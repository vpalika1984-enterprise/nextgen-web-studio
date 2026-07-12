// Skip Husky install in production and CI environments (e.g. Vercel),
// where devDependencies such as husky may not be installed.
// See: https://typicode.github.io/husky/how-to.html#ci-server-and-docker
if (process.env.NODE_ENV === 'production' || process.env.CI === 'true') {
    process.exit(0)
}
const husky = (await import('husky')).default
console.log(husky())
