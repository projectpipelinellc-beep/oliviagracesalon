# Photography

| Filename | Used in | Status |
| --- | --- | --- |
| `Facetune_25-08-2026-17-01-47.jpeg` | Hero (`components/Hero.tsx`) | ✅ Added — full-body portrait of the stylist holding scissors and a round brush. |
| `BBPhoto-137.JPEG` | Color Experience (`components/ColorExperience.tsx`) | ✅ Added — hair color being poured into a glass. |
| `BBPhoto-140.JPEG` | Services (`components/Services.tsx`) | ⏳ **Still needed** — flat-lay of professional brushes, scissors, combs, clips, and black-and-cream checkerboard foils. Add it here with this exact filename and it will replace the "Image pending" placeholder automatically — no code changes needed. |

## Gallery (`images/gallery/`)

`components/GalleryPreview.tsx` renders `work-01.jpg` through `work-08.jpg`
from this folder — real color/styling results supplied for the site. To add
more, drop new files into `images/gallery/` and add a matching entry to the
`galleryImages` array at the top of `components/GalleryPreview.tsx`; the
grid, aspect ratios, and responsive behavior already support any number of
tiles.

Note: the gallery images were converted from the original HEIC photos to
JPEG for browser compatibility (HEIC isn't reliably supported by web
browsers or Next's image optimizer). If more HEIC photos are added later,
convert them the same way before dropping them in.
