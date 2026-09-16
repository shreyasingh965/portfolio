# Asset System — Shreya Portfolio (Scrollcraft Build)

> **Engine**: Scrollcraft Continuous-World 3D
> **Build**: `scrollcraft/builds/shreya-portfolio/`
> **Step**: 15 — Asset Preparation, Part 1
> **Status**: SVG deterministic assets complete. Raster/video slots reserved.

---

## Directory Structure

```
assets/
├── hero/          5-plane hero layer SVGs (deterministic, always shipped)
├── flagship/      3-stratum exploder SVGs for the skin-cancer-detection project
├── projects/      Architectural schematics for supporting projects
├── ui/            Reusable micro-element SVGs (overlays, grids, connectors)
├── video/         Reserved — scrub-video source files (MP4/WebM, not yet generated)
├── posters/       Reserved — first-frame poster images for video elements
└── mobile/        Reserved — art-directed mobile-specific raster overrides
```

---

## `hero/` — 5-Plane Hero Layer System

The hero stage uses `data-hero-plane` attributes (`0`–`4`) to create a CSS/JS-driven parallax depth stack.

| File | `data-hero-plane` | Role |
|------|-------------------|------|
| `hero-horizon-grid.svg` | `0` (deepest) | Receding perspective grid, implies infinite depth |
| `hero-portal-frame.svg` | `2` (mid) | Architectural chamfer frame; primary focal accent |
| `hero-plinth-datum.svg` | `4` (nearest) | Ground-plane datum stripe; anchors the scene |

**Style constraints**: All hero SVGs use stroke `#00d4ff` (surgical cyan) on fill none against the `#090a0d` canvas. No raster imagery. Reduced-motion fallback: planes lock to z:0, parallax disabled.

---

## `flagship/` — Explainer Exploder (Skin Cancer Detection)

The flagship section uses a 3-stratum "exploder" layout. Each stratum maps to one SVG schematic and one reserved raster slot.

| File | Stratum | Label | Description |
|------|---------|-------|-------------|
| `stratum-01-inference-ui.svg` | Top | Inference & UI Layer | Grad-CAM heatmap overlay, FastAPI endpoint nodes, REST flow |
| `stratum-02-hybrid-core.svg` | Mid | Hybrid CNN-ViT Core | Dual-branch model architecture, attention head flow |
| `stratum-03-ingestion-pipeline.svg` | Base | Ingestion & Preprocessing | ISIC dataset ingest, augmentation pipeline, train/val split |

**DOM wiring**: Each stratum `<div>` carries `data-asset-slot="stratum-NN"`. The `<img>` src paths point to these SVGs.

---

## `projects/` — Supporting Project Schematics

| File | Project | Representation |
|------|---------|----------------|
| `project-1-schematic.svg` | Full-Stack Task Manager | Service graph: React → FastAPI → PostgreSQL → JWT Auth |
| `project-2-schematic.svg` | Real-Time Chat App | Event flow: WebSocket → Django Channels → Redis channel layer |
| `project-3-schematic.svg` | Automated Expense Tracker | Pipeline: PDF/CSV ingest → NLP classifier → SQLite → Charts |

---

## `ui/` — Reusable Micro-Element SVGs

| File | Usage |
|------|-------|
| `coordinate-grid.svg` | Background coordinate reference grid |
| `architectural-frame.svg` | Chamfered corner frame accent |
| `system-nodes.svg` | Connected node diagram |
| `telemetry-marker.svg` | Diamond/crosshair position marker |
| `data-flow-connector.svg` | Horizontal connector with directional arrow |

---

## `video/` — Reserved (Not Yet Generated)

| Slot | Beat | Purpose |
|------|------|---------|
| `hero-flight.mp4` | Beat 1 (Hero) | Continuous-world camera fly-in |
| `flagship-reveal.mp4` | Beat 4 (Deep Work) | Flagship project reveal flight |

> Constraint: No more than 2 scrub-video acts total (Scrollcraft grammar rule SV-2).

---

## `posters/` — Reserved (Not Yet Generated)

First-frame static poster images for `<video poster="">` attributes. One poster per video slot.

---

## `mobile/` — Reserved (Not Yet Generated)

Art-directed mobile overrides for hero and flagship raster slots. Tighter crops, no deep parallax planes.

---

## Palette Reference

| Token | Hex | Role |
|-------|-----|------|
| `--canvas` | `#090a0d` | Base background |
| `--cyan` | `#00d4ff` | Primary accent |
| `--amber` | `#f59e0b` | Warmth accent |
| `--white-10` | `rgba(255,255,255,0.10)` | Subtle surface |
| `--white-60` | `rgba(255,255,255,0.60)` | Body text |
| `--white-90` | `rgba(255,255,255,0.90)` | Headings |

---

## Integrity Constraints

- No profile photographs — permanently excluded.
- No invented screenshots or fake product UIs.
- No fabricated project URLs, repositories, or metrics.
- All factual content sourced exclusively from RESUME-DATA-SANITIZED.md.
- scrollcraft.js and scrollcraft.css are untouched.
- Reduced-motion behaviour preserved in all animated asset contexts.
