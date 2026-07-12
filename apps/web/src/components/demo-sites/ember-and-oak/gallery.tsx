import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { GALLERY_IMAGES } from "./restaurant-data";

/**
 * Gallery
 *
 * Ambiance, dish, and event photography grid. Uses labeled placeholder
 * tiles so the section reads correctly before real photography is
 * dropped in.
 */
export function Gallery() {
    return (
          <Section className="bg-neutral-950 text-white">
                <Container>
                        <div className="mx-auto max-w-2xl text-center">
                                  <h2 className="font-serif text-3xl font-semibold sm:text-4xl">Gallery</h2>
                                  <p className="mt-4 text-white/70">
                                              A look at the room, the plates, and the nights out.
                                  </p>
                        </div>
                        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                          {GALLERY_IMAGES.map((image) => (
                        <div
                                        key={image.caption}
                                        className="flex aspect-[4/3] flex-col justify-end rounded-2xl border border-white/10 bg-white/5 p-4"
                                      >
                                      <span className="text-xs font-semibold uppercase tracking-wide text-amber-400">
                                        {image.category}
                                      </span>
                                      <p className="mt-1 text-sm text-white/70">{image.caption}</p>
                        </div>
                      ))}
                        </div>
                </Container>
          </Section>
        );
}
