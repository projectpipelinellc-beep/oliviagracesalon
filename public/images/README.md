# Required photography

This site was built around three specific photographs that were **not**
available to include in this build. Until they're added, the site shows a
tasteful on-brand placeholder in their place (no stock photography is used).

Add the following files to this folder with these **exact filenames** and
everything will pick them up automatically — no code changes needed:

| Filename | Used in | Description |
| --- | --- | --- |
| `Facetune_25-08-2026-17-01-47.jpeg` | Hero (`components/Hero.tsx`) | Full-body portrait of the stylist holding scissors and a round brush. Primary hero image — keep her head, hands, scissors, brush, legs, and shoes uncropped. |
| `BBPhoto-140.JPEG` | Services (`components/Services.tsx`) | Flat-lay of professional brushes, scissors, combs, clips, and black-and-cream checkerboard foils. |
| `BBPhoto-137.JPEG` | Color Experience (`components/ColorExperience.tsx`) | Close-up of hair color being poured into a glass. |

## Future gallery

`components/GalleryPreview.tsx` is deliberately left as an empty, labeled
grid ("Coming soon"). When real portfolio photos are available, add them to
an `images/gallery/` subfolder and swap the placeholder slots in that
component for `PhotoSlot` components pointing at the new files — the grid
layout, spacing, and responsive behavior are already in place.
