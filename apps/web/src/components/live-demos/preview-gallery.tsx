import { ImageIcon, PlayCircle } from "lucide-react";

import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import type { Demo } from "@/components/live-demos/demos-data";

interface PreviewGalleryProps {
    demo: Demo;
}

/**
 * PreviewGallery
 *
 * Grid of preview placeholders for a demo's key screens. When a demo
 * record supplies a `media` array (future multiple images and video
 * walkthroughs), those entries are rendered directly. Otherwise captions
 * are derived from the demo's own feature list, so every gallery stays
 * specific to that build without requiring separate image data today.
 */
export function PreviewGallery({ demo }: PreviewGalleryProps) {
    const items =
          demo.media && demo.media.length > 0
        ? demo.media
            : [
              { type: "image" as const, caption: "Homepage Overview" },
                        ...demo.features.map((feature) => ({ type: "image" as const, caption: feature })),
                      ];

  return (
        <Section className="py-24">
              <Container>
                      <div className="text-center">
                                <p className="text-sm font-medium text-primary">Preview</p>
                                <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                                            A closer look at {demo.name}
                                </h2>
                      </div>
              
                      <div className="mt-12 grid gap-6 sm:grid-cols-2">
                        {items.map((item) => (
                      <figure
                                      key={item.caption}
                                      className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
                                    >
                                    <div className="flex h-48 items-center justify-center bg-gradient-to-br from-primary/10 via-fuchsia-500/10 to-cyan-400/10">
                                      {item.type === "video" ? (
                                                        <PlayCircle className="h-8 w-8 text-muted-foreground" aria-hidden="true" />
                                                      ) : (
                                                        <ImageIcon className="h-8 w-8 text-muted-foreground" aria-hidden="true" />
                                                      )}
                                    </div>
                                    <figcaption className="border-t border-border px-4 py-3 text-sm font-medium text-foreground">
                                      {item.caption}
                                    </figcaption>
                      </figure>
                    ))}
                      </div>
              </Container>
        </Section>
      );

}
