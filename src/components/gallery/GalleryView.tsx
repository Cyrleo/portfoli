"use client";

import React from "react";
import { Media, MasonryGrid } from "@once-ui-system/core";
import { gallery } from "@/resources";

export default function GalleryView() {
  return (
    <MasonryGrid columns={2} s={{ columns: 1 }}>
      {gallery.images.map((image, index) => (
        <div
          key={index}
          style={{ position: "relative", cursor: "pointer" }}
        >
          <Media
            enlarge
            priority={index < 10}
            sizes="(max-width: 560px) 100vw, 50vw"
            radius="m"
            aspectRatio={image.orientation === "horizontal" ? "16 / 9" : "3 / 4"}
            src={image.src}
            alt={image.alt}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(0,0,0,0.5)",
              color: "#fff",
              fontSize: "1.1rem",
              fontWeight: 500,
              textAlign: "center",
              opacity: 0,
              transition: "opacity 0.2s",
              pointerEvents: "none",
              zIndex: 2,
            }}
            className="gallery-alt-overlay"
          >
            {image.alt}
          </div>
          <style>{`
            .gallery-alt-overlay:hover, .gallery-alt-overlay:active, div:hover > .gallery-alt-overlay {
              opacity: 1 !important;
            }
          `}</style>
        </div>
      ))}
    </MasonryGrid>
  );
}
