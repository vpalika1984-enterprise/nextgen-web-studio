// Husky's "prepare" lifecycle script (see package.json) runs this file
// instead of calling the husky binary directly, following Husky's official
// CI/Docker/production guidance:
// https://typicode.github.io/husky/how-to.html#ci-server-and-docker
//
// Some environments legitimately do not install devDependencies during
// `npm install` (for example, Vercel's production build step), which means
// the optional "husky" package is genuinely and expectedly unavailable
// there. Since git hooks are only useful for local development, it is safe
// to skip installing them in that case. However, we must be careful not to
// hide real problems: only a missing-"husky" module resolution error should
// be treated as this expected case. Any other failure (a corrupted install,
// a bug in husky itself, etc.) is rethrown so it fails loudly instead of
// being silently swallowed.

if (process.env.NODE_ENV === 'production' || process.env.CI === 'true') {
      process.exit(0)
}

let husky
try {
      ;({ default: husky } = await import('husky'))
} catch (error) {
      const isHuskyMissing =
              error?.code === 'ERR_MODULE_NOT_FOUND' &&
              typeof error?.message === 'string' &&
              error.message.includes("'husky'")

  if (!isHuskyMissing) {
          throw error
  }

  // husky isn't installed (devDependencies were omitted for this install) —
  // skip silently, this is expected outside of local development.
  process.exit(0)
}

console.log(husky())
