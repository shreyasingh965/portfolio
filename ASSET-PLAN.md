# Scrollcraft Step 3: Asset Strategy & Production Plan
**Build**: `shreya-portfolio`  
**Status**: Asset Strategy Complete · *No final assets have been generated yet. Implementation has not started.*  
**Governing Documents**: [`BRIEF.md`](BRIEF.md) · [`JOURNEY.md`](JOURNEY.md) · [`GRAMMAR.md`](GRAMMAR.md) · [`FINGERPRINT.md`](FINGERPRINT.md) · [`SCORE.md`](SCORE.md)  
**Reference Authority**: [`references/assets.md`](../../.agents/skills/scroll-craft/references/assets.md) · [`references/hero-depth.md`](../../.agents/skills/scroll-craft/references/hero-depth.md) · [`references/taste.md`](../../.agents/skills/scroll-craft/references/taste.md) · [`references/worlds.md`](../../.agents/skills/scroll-craft/references/worlds.md)

---

## 1. Asset Inventory & Current Workspace Audit

### Workspace Asset Audit
A comprehensive inspection of the project workspace was conducted prior to planning:
- **Current Workspace State**: **No portfolio assets currently exist.**
- **Finding**: There are no existing resume PDFs, professional photographs, project screenshots, product demo captures, client logos, or company certificates in `scrollcraft/builds/shreya-portfolio/` or any workspace directory.
- **Strict Anti-Fabrication Rule**: Factual career data, metrics, employment records, client identities, and project deliverables will **never be fabricated or synthesized**. Clean, structured placeholders are maintained until authentic materials are supplied.
- **Flagship Project Reference Rule**: The primary project is strictly designated as **"strongest project, to be selected from supplied project data."**

### Master Asset Inventory

| Asset Identifier | Category | Journey Beat | Dimensions / Format | Text-Safe Negative Space | Visual Treatment & Role | Essential / Optional |
|---|---|---|---|---|---|---|
| `resume.pdf` | **A (Supplied)** | Nav / Beat 6 | Multi-page PDF | Standard document | Authentic, verified curriculum vitae. Accessible via 1-click header link. | **Essential** |
| `shreya-portrait.webp` | **A (Supplied)** | Beat 1 / 2 | 1200×1600 (3:4) WebP | Centered subject; lateral clearance | Professional, candid portrait with neutral grade and natural lighting. | Optional (Editorial architectural plate if omitted) |
| `project-1-thumb.webp` | **A (Supplied)** | Beat 4 (`lineup`) | 1920×1080 (16:9) WebP | Bottom 35% band clear for specs | Clean production screenshot/diagram of Project 1. True aspect ratio. | **Essential** |
| `project-2-thumb.webp` | **A (Supplied)** | Beat 4 (`lineup`) | 1920×1080 (16:9) WebP | Bottom 35% band clear for specs | Clean production screenshot/diagram of Project 2. True aspect ratio. | **Essential** |
| `project-3-thumb.webp` | **A (Supplied)** | Beat 4 (`lineup`) | 1920×1080 (16:9) WebP | Bottom 35% band clear for specs | Clean production screenshot/diagram of Project 3. True aspect ratio. | **Essential** |
| `flagship-schematic.svg` | **C (Graphic)** | Beat 5 (`flagship`) | Scalable Vector Graphic | Layered transparent strata | System architecture diagram for "strongest project, to be selected from supplied project data." | **Essential** |
| `tech-icons.svg` | **C (Graphic)** | Beat 3 (`systems`) | Scalable Vector Sprite | Crisp bounding boxes | Monochrome/tinted official vendor glyphs for verified languages, frameworks, and cloud tooling. | **Essential** |
| `workspace-far.webp` | **B (Generated)** | Beat 1–3 (`world`) | 2736×1520 (16:9) WebP | Large dark upper quadrant | Deep environmental horizon: dark architectural geometry, muted coordinate grid lines. | **Essential** |
| `workspace-mid.webp` | **B (Generated)** | Beat 1–4 (`world`) | 2736×1520 (16:9) PNG/WebP alpha | Centered portal/opening | Midground spatial structural frames, providing occlusion for the moving camera. | **Essential** |
| `atmosphere-mist.webp` | **B (Generated)** | All Waypoints | 2736×1520 PNG alpha | Semi-transparent | Subdued spatial light mist creating true depth separation between text and deep geometry. | Optional |
| `flagship-scrub.mp4` | **D (Video)** | Beat 5 (`flagship`) | 1920×1080 MP4 (Desktop) | Outer margins clear | Controlled continuous camera dolly into the flagship architecture. Dense GOP (`-g 8`), no audio. | **Essential** (The Single Peak) |
| `flagship-scrub-m.mp4` | **D (Video)** | Beat 5 (`flagship`) | 720×1280 MP4 (Mobile) | Centered subject focus | Native portrait crop of the flagship camera flight. Dense GOP (`-g 4`), no audio. | **Essential** |
| `flagship-poster.webp` | **D (Video)** | Beat 5 (`flagship`) | 1920×1080 WebP | Matches video frame 1 | Extracted first frame of `flagship-scrub.mp4` to prevent black-screen flash or seek stalls. | **Essential** |

---

## 2. Supplied vs. Generated Asset Strategy

To preserve visual credibility while providing a cinematic continuous-world 3D experience, all assets adhere to a strict four-category taxonomy:

```
┌────────────────────────────────────────────────────────────────────────┐
│ Category A: User-Supplied (Authentic Portfolio Material)               │
│ • Resume PDF, verified headshot, real project screenshots/recordings.  │
│ • Never synthesized or simulated by AI. Used strictly as supplied.     │
├────────────────────────────────────────────────────────────────────────┤
│ Category B: Generated Visual Assets (Spatial & Environmental Only)     │
│ • Background horizons, midground spatial frames, subtle atmospheric    │
│   depth planes. Never falsely representing real client or code work.   │
├────────────────────────────────────────────────────────────────────────┤
│ Category C: UI & Graphic Assets (Deterministic Code & Vectors)         │
│ • Official vendor technology icons, architectural schematic SVGs,      │
│   waypoint telemetry markers, high-contrast typography frames.         │
├────────────────────────────────────────────────────────────────────────┤
│ Category D: Video & Scrub Assets (The Engineered Single Peak)          │
│ • Dense-GOP scrub clips strictly capped at 1 act (Beat 5 Flagship).    │
│   Stripped of audio, paired with frame-matched posters.                │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 3. Reusable Style Preamble

Per [`references/worlds.md`](../../.agents/skills/scroll-craft/references/worlds.md), every generated image and video prompt must begin with the exact same verbatim style preamble. This guarantees visual continuity across disparate renders, establishing a single cohesive architectural environment.

### Verbatim Style Preamble
```text
Architectural product photography and spatial engineering visualization shot on 35mm anamorphic and 24mm tilt-shift lenses. Restrained, low-key lighting: deep charcoal canvas (#090a0d), muted gunmetal architectural planes, and warm bone highlights with surgical electric cyan/amber edge light accents. True blacks, high dynamic range, fine physical matte film grain, razor-sharp orthographic line work, and physical depth of field. Controlled studio atmosphere with subtle volumetric air. Photographic and physical realism. NOT 3D clay diorama, NOT low-poly, NOT cartoon, NOT cyberpunk neon, no purple-to-blue AI gradients, no glowing plastic buttons, no digital bloom, no baked-in text, no fake UI screenshots, no watermarks, no distorted fisheye lens.
```

### Preamble Breakdown
- **Medium & Lens**: 35mm anamorphic and 24mm tilt-shift architectural lenses; zero fish-eye distortion.
- **Lighting**: Restrained low-key key light, deep charcoal canvas (`#090a0d`), warm bone highlights (`#f2f3f5`), and razor-sharp cyan/amber edge accents.
- **Environment**: Precision-engineered architectural pavilion with orthographic grid lines and physical matte surfaces.
- **Color & Grade**: High dynamic range, deep true blacks, neutral desaturated tones, avoiding neon oversaturation.
- **Texture**: Fine physical matte film grain, etched aluminum and slate finishes; zero plastic sheen.
- **Realism Level**: Photoreal architectural scale; physical plausibility throughout.
- **Depth Characteristics**: Natural optical falloff, differential focal planes, clear occlusion boundaries.
- **Negative Prompt**: No cartoon, no low-poly, no AI 3D clay diorama, no cyberpunk neon, no purple gradients, no baked-in lettering.
- **Negative Space Rule**: Minimum 45% low-contrast negative space reserved for typography on every prompt.

---

## 4. Negative-Space & Typography Rules

Per [`references/taste.md`](../../.agents/skills/scroll-craft/references/taste.md), the user reads the developer's story; the background must never compete with the text. The following negative-space geometry is enforced:

1. **Beat 1 (Hero Identity · `origin`)**:
   - *Focal Geometry*: Shifted low and to the right quadrant.
   - *Text Safe Area*: The entire upper-left and top-middle zone ($\ge 45\%$ of screen area) is kept in deep shadow (`#090a0d`) for the primary headline, title, and ethos statement.
2. **Beat 2 (Perspective · `perspective`)**:
   - *Focal Geometry*: Lateral structural columns flanking the viewport margins.
   - *Text Safe Area*: Central $55\text{--}65\text{ch}$ column cleared of specular highlights, supporting effortless reading.
3. **Beat 3 (Technical Matrix · `systems`)**:
   - *Focal Geometry*: Base plinths anchored in the lower 25% of the viewport.
   - *Text Safe Area*: Center and upper viewport cleared for the high-contrast 3-column architecture matrix.
4. **Beat 4 (Project Lineup · `lineup`)**:
   - *Focal Geometry*: Horizontal carousel cards entering with wide margins.
   - *Text Safe Area*: Lower 35% of each card reserved for specifications, tech badges, and action triggers.
5. **Beat 5 (Flagship Peak · `flagship`)**:
   - *Focal Geometry*: Symmetrical architectural explosion expanding outward from the center.
   - *Text Safe Area*: Deep callouts positioned on designated lateral anchor zones with dedicated sibling scrim plates.

---

## 5. Layered Hero Depth Plan

Per [`references/hero-depth.md`](../../.agents/skills/scroll-craft/references/hero-depth.md), hero depth is constructed from independent visual planes moving at differential scroll rates rather than a single flat image:

```
[Layer 0: Deep Horizon Grid]    Far coordinate grid & horizon falloff (Scroll Rate: -0.2x)
              ↓
[Layer 1: Midground Frame]      Architectural portal & spatial scaffolding (Scroll Rate: -0.5x)
              ↓
[Layer 2: Typography Ground]    High-contrast semantic headline (Scroll Rate: 1.0x with scroll)
              ↓
[Layer 3: Foreground Plinth]    Anchored coordinate contact plinth (Scroll Rate: 1.2x)
              ↓
[Layer 4: Atmosphere]           Fine atmospheric mist & physical grain (Scroll Rate: 0.1x)
```

### Depth & Contact Safeguards
- **Anchored Contact Point**: The identity plinth is grounded firmly to the baseline; it never appears to float untethered during camera translation.
- **Genuine Alpha Cutouts**: Foreground and midground plates utilize genuine PNG/WebP alpha transparency. White card borders or simulated checkerboard patterns are strictly forbidden.
- **Natural Occlusion**: As scroll begins, the near foreground plinth slides upward slightly faster than the headline, while the headline recedes in front of the midground frame.

---

## 6. Video & Scrub Specification

Per [`references/devices.md §1`](../../.agents/skills/scroll-craft/references/devices.md) and [`references/assets.md`](../../.agents/skills/scroll-craft/references/assets.md):
- **Scrub Acts Total**: Capped at **exactly one scrub video** on the entire site (Beat 5 `flagship` Peak).
- **Narrative Role**: Materially articulates the internal 3D architecture of the "strongest project, to be selected from supplied project data."

### Desktop Master Encode (`assets/flagship-scrub.mp4`)
- **Resolution**: $1920\times 1080$ (16:9 landscape).
- **Encoding Command**:
  ```bash
  ffmpeg -y -i raw-flagship.mp4 \
    -an \
    -vf "scale=-2:1080:flags=lanczos,format=yuv420p" \
    -c:v libx264 -profile:v high -preset slow -crf 20 \
    -g 8 -keyint_min 8 -sc_threshold 0 \
    -movflags +faststart \
    assets/flagship-scrub.mp4
  ```
- **Dense GOP Rationale**: Keyframe every 8 frames (`-g 8`). Default web video uses keyframes every 60–120 frames, resulting in severe seek lag when tied to the scroll wheel. Dense GOP enables instantaneous, tactile scrubbing.
- **Audio Stripped**: Audio track stripped (`-an`) to eliminate dead weight and satisfy mobile autoplay restrictions.

### Mobile Portrait Encode (`assets/flagship-scrub-m.mp4`)
- **Resolution**: $720\times 1280$ (9:16 portrait native crop/render).
- **Encoding Command**:
  ```bash
  ffmpeg -y -i raw-flagship.mp4 \
    -an \
    -vf "scale=720:-2:flags=lanczos,format=yuv420p" \
    -c:v libx264 -profile:v high -preset slow -crf 24 \
    -g 4 -keyint_min 4 -sc_threshold 0 \
    -movflags +faststart \
    assets/flagship-scrub-m.mp4
  ```
- **Mobile GOP**: Dense keyframe every 4 frames (`-g 4`) for rapid seeking on lower-powered mobile hardware.

### First-Frame Poster Extraction
To prevent black-screen flash or seek stalls prior to video decode:
```bash
ffmpeg -y -i assets/flagship-scrub.mp4 -frames:v 1 -c:v libwebp -quality 82 assets/flagship-poster.webp
```

---

## 7. Desktop vs. Mobile Art Direction

| Axis | Desktop ($\ge 1024\text{px}$) | Mobile Phone ($360\text{--}390\text{px}$) |
|---|---|---|
| **Framing & Aspect Ratio** | 16:9 widescreen landscape composition. | 9:16 portrait vertical framing (`data-sc-src-mobile`). |
| **Typography Scaling** | Full fluid ramp (`--sc-t-4xl` up to $7.5\text{rem}$). | Stepped down to `--sc-t-2xl` ($2.1\text{--}3.4\text{rem}$) to avoid excessive line wraps. |
| **Interactive Tilt** | Fine-pointer 3D rotation (`data-sc-tilt="6"`). | Bypassed; clean touch-scrolled stacked cards. |
| **Stage Height** | $100\text{vh}$ / natural desktop viewport. | $100\text{svh}$ to prevent jumpiness as browser navigation bars expand/collapse. |
| **Pacing Lerp** | `data-sc-lerp="0.18"` (desktop mousewheel smoothing). | `data-sc-lerp="0.12"` + touch-tuned deadbands. |
| **Project Cards** | Multi-column interactive 3D layout. | Single-column swipeable/scrolling stack with direct touch targets. |

---

## 8. Reduced-Motion Fallbacks (`prefers-reduced-motion: reduce`)

Per [`references/taste.md`](../../.agents/skills/scroll-craft/references/taste.md) and [`references/verify.md`](../../.agents/skills/scroll-craft/references/verify.md):
- **Video Fetching Bypassed**: Scrub MP4 files are **never fetched or loaded**, conserving mobile bandwidth and avoiding motion triggers.
- **Posters Become Static Plates**: `flagship-poster.webp` displays cleanly as a static architectural diagram.
- **3D Parallax Stilled**: Layer transforms resolve to `transform: none`.
- **Zero Information Loss**: Every headline, career milestone, technology badge, live repository link, and the full contact form remain 100% accessible, legible, and functional.

---

## 9. Performance Considerations

To ensure instant loading, high frame rates, and frictionless recruiter evaluation:

1. **Total Asset Budget**:
   - Initial page load asset budget: $\le 1.8\text{MB}$ (excluding video).
   - Flagship scrub video budget: $\le 3.5\text{MB}$ desktop (`-g 8`), $\le 1.8\text{MB}$ mobile (`-g 4`).
2. **Modern Image Formats**:
   - All photographic and atmospheric plates encoded in WebP/AVIF with 82–85 quality.
   - Vector assets (schematics, tech stack glyphs, telemetry) stored as minified SVGs ($\le 25\text{KB}$ total).
3. **Lazy Loading & Preloading Strategy**:
   - Hero background and midground plates preloaded via `<link rel="preload">`.
   - Off-screen project screenshots and Beat 5 video deferred until Waypoint 2 (`perspective`).
4. **Font Subsetting & Loading**:
   - System/variable fonts preferred, preconnecting to Google Fonts for *Space Grotesk* and *Geist Mono*.
   - `font-display: swap` enforced to prevent flash of invisible text (FOIT).
5. **Continuous World Spacer Guard**:
   - In Continuous World mode, `scrollcraft.js` calculates spacer height once at mount.
   - A page-local resize event is dispatched upon `window.load` and `document.fonts.ready` to guarantee correct track calculation.

---

## 10. KIE.AI / API Key Requirement Assessment

- **Is `KIE_AI_API_KEY` required right now?** **NO.**
- **Rationale**:
  - The portfolio's factual assets (resume, code links, project screenshots, typography) are 100% user-supplied or code-rendered (SVG/HTML/CSS).
  - High-end architectural wireframes and coordinate plinths can be cleanly rendered via vector SVG and CSS 3D transforms with zero AI generation and zero credit spend.
  - An API key will only be requested if the user explicitly authorizes generating atmospheric background imagery or AI-rendered video clips via `scripts/kie.mjs`.

---

## 11. Missing Assets That Must Later Be Supplied

Before final production deployment, the following authentic client materials must be supplied:

1. **Curriculum Vitae**: Authentic PDF resume (`resume.pdf`).
2. **Flagship Project Identity & Artifacts**:
   - Selection of the "strongest project, to be selected from supplied project data."
   - Project name, live production URL, GitHub repository URL, and architectural breakdown notes.
3. **Selected Projects Portfolio (2–3 Projects)**:
   - Project titles, accurate problem/solution descriptions, verified tech stacks, live links, and high-resolution interface captures.
4. **Professional History**:
   - Verified employment history, job titles, and educational/certification milestones.
5. **Contact Information**:
   - Production email address, LinkedIn profile URL, and GitHub handle.

---

## 12. Exact Asset-Production Order

When asset production begins, assets must be created in this strict dependency order:

```
Step 1: Ingest User Materials
        • Place authentic resume PDF, real project screenshots, and factual bio notes in assets/
        ↓
Step 2: Vector & Graphic Assets
        • Export minified SVG tech icons, telemetry markers, and architectural schematics
        ↓
Step 3: Background & Environmental Plates
        • Render/crop deep horizon and midground spatial frames adhering strictly to Style Preamble
        ↓
Step 4: Flagship Video Production
        • Render/record raw camera move for strongest project
        • Execute desktop dense-GOP encode (-g 8, no audio)
        • Execute mobile portrait dense-GOP encode (-g 4, no audio)
        • Extract first frame as flagship-poster.webp
        ↓
Step 5: Visual Inspection & Seam Verification
        • Inspect all alpha cutouts over dark (#090a0d) and light grounds
        • Verify mobile portrait crop framing and negative-space compliance
```

---

## 13. Statement That No Final Assets Have Been Generated Yet

**Formal Statement**: As of this planning stage, **no final assets have been generated, rendered, or encoded**. All asset dimensions, encoding parameters, and style preambles defined herein are strictly preparatory.

---

## 14. Statement That Implementation Has Not Started

**Formal Statement**: **Implementation has not started.** No `index.html`, page-local CSS, or page-local JavaScript files have been created. The Scrollcraft engine files (`scrollcraft.js` and `scrollcraft.css`) remain completely unmodified and in their pristine upstream state.
