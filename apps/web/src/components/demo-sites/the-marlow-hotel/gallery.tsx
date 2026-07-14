import { ImageIcon } from "lucide-react";

import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { GALLERY_IMAGES } from "./hotel-data";

/**
 * Gallery
 *
 * Photo gallery grid giving prospective guests a visual sense of the
 * property before they book. Uses labeled placeholder tiles, consistent
 * with the placeholder-photo pattern used across the platform demos.
 */
export function Gallery() {
  return (
    <Section id="gallery" className="bg-slate-50">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Gallery</h2>
          <p className="mt-4 text-slate-600">A closer look at our rooms, dining, amenities, and grounds.</p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {GALLERY_IMAGES.map((image) => (
            <div
              key={image.id}
              role="img"
              aria-label={image.imageAlt}
              className="relative flex aspect-square flex-col items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-slate-200 to-slate-300"
            >
              <ImageIcon className="h-6 w-6 text-slate-400" aria-hidden="true" />
              <span className="px-2 text-center text-xs font-medium text-slate-500">{image.category}</span>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
