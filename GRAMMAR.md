# Scrollcraft Step 2: Grammar Selection
**Build**: `shreya-portfolio`  
**Status**: Grammar Selected · *Implementation, Asset Generation, and Markup have NOT yet started.*  
**Governing Documents**: [`scrollcraft/builds/shreya-portfolio/BRIEF.md`](BRIEF.md) · [`scrollcraft/builds/shreya-portfolio/JOURNEY.md`](JOURNEY.md)  
**Reference Authority**: [`references/uniqueness.md §2`](../../.agents/skills/scroll-craft/references/uniqueness.md) · [`references/worldflight.md`](../../.agents/skills/scroll-craft/references/worldflight.md)

---

## 1. Evaluation of All Candidate Grammars

Per [`references/uniqueness.md §2`](../../.agents/skills/scroll-craft/references/uniqueness.md), there are eight defined Scrollcraft grammars. Each represents a distinct structural organising logic rather than a mere visual skin. Below is the systematic evaluation of each candidate for Shreya's corporate developer portfolio:

| Grammar | Spatial Behavior | Strengths for Portfolio | Weaknesses & Structural Bans | Continuous-World 3D Fit | Corporate / Recruiter Fit | Peak Capability | Implementation Risk | Verdict |
|---|---|---|---|---|---|---|---|---|
| **2.1 Filmic One-Shot** | Document-flow acts pinning and unpinning sequentially. | Familiar cinematic hero; supported by standard engine devices (`pin`, `scrub`). | **Seam defect**: stages unpin and static document cuts scroll past; banned for unbroken worlds. | **Poor**: Produces jarring horizontal unpinning lines between acts. | Moderate; feels like a consumer product marketing pitch. | High, but flattens into standard marketing stacks. | Low | **Rejected** (Violates continuous-world mandate) |
| **2.2 Chaptered Editorial** | Page behaves like a printed feature with hard cuts and asymmetric spreads. | High intellectual credibility; excellent for long-form engineering essays. | Bans full-bleed scrub heroes, magnetic CTAs, continuous drift, and continuous 3D travel. | **None**: Explicitly forbids continuous spatial continuity. | High for journalism/manifestos, lower for interactive 3D. | Low; climax reads as an article climax, not visual depth. | Low | **Rejected** (Bans continuous 3D world) |
| **2.3 Live Surface** | The page behaves directly like the running software/tool. | Inherent technical honesty; treats code and telemetry as interface. | Bans marketing chrome, full-bleed imagery, kinetic stacks, and continuous camera travel. | **None**: The surface is a 2D software UI, not a 3D cinematic environment. | High for developer tooling products; awkward for personal identity. | Moderate; peak is a tool operation, not an architectural dissection. | Medium | **Rejected** (Bans cinematic camera travel) |
| **2.4 Continuous World** | **Single fixed stage (`position: fixed`) for the entire scroll. Waypoints, not sections. Single spacer track.** | **100% spatial continuity; zero unpinning seams; camera moves through one evolving 3D environment.** | Requires strict pacing discipline; all copy lives in fixed overlay windows; heavier asset/render discipline. | **Native**: Specifically built for unbroken spatial journeys without document-block seams. | **High**: Waypoint map doubles as instant navigation for recruiters. | **Highest**: Peak is the deepest spatial expansion of the world. | Medium | **SELECTED** (Directly fulfills brief & journey) |
| **2.5 Typographic Poster** | Extreme scale contrast in typography (40vw display type); minimal media. | Uncompromising graphic identity; extremely lightweight. | Bans photographic ground, 3D scenes, scrub media, and cards. | **None**: Forbids spatial environments and photographic depth. | Low to Moderate; reads as a boutique design studio, not a systems engineer. | Low; rhythm is purely graphic scale. | Low | **Rejected** (Bans 3D environment) |
| **2.6 Gallery / Catalog** | Walkable collection; lateral rail drift; museum-spec labels. | Outstanding for displaying multiple projects cleanly. | Bans kinetic headlines, magnetic CTAs, and argument-shaped pinned storytelling. | **Low**: Linear room walk, not an evolving multi-act environment. | Good for design portfolios; weak for personal engineering narrative. | Low; treats every item with equal catalog weight. | Low | **Rejected** (Bans unified narrative arc) |
| **2.7 Split Stage** | Two columns held in tension for the whole page (before vs. after). | Great for comparative arguments (e.g., legacy vs. modern). | Bans full-bleed, centered copy, drift, and unified spatial depth; divider is chrome. | **None**: Rigid two-column split prevents deep 3D spatial flight. | Good for SaaS comparative landing pages; artificial for a developer portfolio. | Moderate (divider collapse). | Medium | **Rejected** (Wrong structural thesis) |
| **2.8 Rhythmic Cutlist** | 12–20 rapid hard-cut sections under 1.4vh; speed over dwell. | High pulse; great for energetic event/music brands. | Explicitly bans `pin`, `dwell`, and `parallax`; acts cannot dwell or hold. | **None**: The inverse of continuous space—built entirely of hard seams and cuts. | Low; reads as hyperactive rather than authoritative and credible. | Requires chrome-layer workaround; cannot hold in the scene. | High | **Rejected** (Bans pinning, dwell, and depth) |

---

## 2. Selected Grammar: Continuous World (§2.4)

### The Structural Mandate
Per [`references/uniqueness.md §2.4`](../../.agents/skills/scroll-craft/references/uniqueness.md) and [`references/worldflight.md`](../../.agents/skills/scroll-craft/references/worldflight.md), the **Continuous World** grammar is governed by the following structural model:

1. **One Fixed Stage**:
   The entire page is hosted within a single `position: fixed; inset: 0;` viewport stage (`[data-sc-world]`). There are **no sequential document-flow sections** that pin, unpin, or slide up as blocks.
2. **The Spacer Ruler**:
   The only element in standard document flow is an empty spacer (`[data-sc-spacer]`). Scroll position is mapped as a continuous timeline across this spacer, driving camera flight, spatial transitions, and waypoint triggers.
3. **Fixed Copy Overlay**:
   Content is hosted in a decoupled, fixed typographic layer (`[data-sc-world-copy]`) with strictly windowed appearances (`data-sc-window="from to"`). Copy drifts subtly ($\le 4\text{vh}$) but never scrolls as a disconnected document over the world.
4. **Waypoint Navigation**:
   Traditional page anchor links are replaced by an interactive **Waypoint Map** that reflects current depth, tracks progress via `sc:waypoint`, and allows recruiters to jump directly to any beat.

### The Seam Law & Justification
In previous Scrollcraft builds, attempting to create continuous experiences using sequential pinned acts (`data-sc-act="pin"`) resulted in severe visual failure:
> *"Building it out of pinned acts is not a lesser version of this grammar, it is a different and worse page... you're literally going from scrolling down to static page and then you start scrolling down again... weird clear page lines scrolling up... very cheap looking."*  
> — [`references/uniqueness.md §2.4`](../../.agents/skills/scroll-craft/references/uniqueness.md)

Because Shreya's brief establishes **spatial continuity** as the primary requirement, **Continuous World is the only grammar that eliminates block seams by design.**

---

## 3. Structural Invariants vs. Dynamic Act Transitions

To prevent the portfolio from feeling like an unbroken, monotonous video flythrough, the grammar enforces strict rules about what stays constant and what changes between narrative beats:

### Invariants (Dominant Throughout the Entire Site)
- **The Single Fixed Stage**: The viewport never unpins or leaves its fixed coordinates.
- **The Spacer Timeline**: Scroll position consistently translates to camera/spatial translation along a unified timeline.
- **The Fixed Copy Layer**: All headlines, narrative copy, matrices, and project specs live in the top overlay layer, styled with identical token typography (`--sc-font-display`, `--sc-font-text`).
- **Persistent Waypoint Navigation**: The corporate header and interactive waypoint rail remain permanently available to jump between beats.
- **Unified Color Foundation**: Deep charcoal/off-black canvas (`#090a0d`) and tinted surface tones remain consistent; no sudden rainbow color flips.

### Dynamic Variables (Changing Between Journey Beats)
- **Camera Position & Depth ($z$-axis)**: The camera pushes forward, tracks laterally, or pulls back into wide architectural views depending on the beat's intent.
- **Spatial Plane Occlusion**: Background grids, midground architectural frames, and foreground project artifacts slide past each other at controlled differential rates.
- **Information Density**: Transitions from spacious, minimal editorial text (About) $\rightarrow$ high-density structured matrices (Skills) $\rightarrow$ rich interactive object cards (Projects).
- **Lighting & Focus**: Lighting shifts from quiet ambient illumination $\rightarrow$ focused technical spotlights $\rightarrow$ volumetric illumination at the peak.

---

## 4. Mapping Continuous World to `JOURNEY.md`

| Journey Beat | Emotion | Waypoint ID | Spatial Stage Behavior | Copy Layer Behavior | Transition Execution |
|---|---|---|---|---|---|
| **Beat 1: Identity** | *Curiosity* | `origin` | Establishing wide shot of the 3D workspace. Deep ambient lighting; spatial wireframe/nodes slowly align. | `hero` window (`data-sc-window="hero"`). Present immediately at $p=0$ via greet form. Identity, title, and core ethos. | Camera begins slow forward dolly as scroll starts; wireframe plane resolves into solid surfaces. |
| **Beat 2: Credibility** | *Recognition* | `perspective` | Camera glides into an intimate midground plane. Structural planes frame the reading space. | Clean editorial text column anchored cleanly. Engineering narrative and principles. | Smooth camera pan laterally as text fades out; structural grid lines emerge to form the technical matrix. |
| **Beat 3: Capability** | *Trust* | `systems` | 3D environment transitions into an organized architectural scaffold. Stack categories occupy distinct spatial tiers. | Structured technical matrix. Scannable categories (Languages, Backend, Cloud, Frontend) with high-contrast legibility. | Scaffold planes deconstruct into floating project canvases; camera elevates slightly to prepare for project showcase. |
| **Beat 4: Evidence** | *Interest* | `lineup` | Curated project cards drift into view on staggered dimensional planes, creating physical layering. | Cards carry concise project specs, problem statements, and verified live/source links. | Staggered cards move past camera; visual density rapidly decreases as the stage enters the pre-peak threshold. |
| **[Threshold] Pre-Peak Silence** | *Anticipation* | `threshold` | **Authored silence ($\approx 1.0\,\text{vh}$)**. Peripheral objects recede into darkness; stage lighting dims to a soft focal point. | Canvas clears completely. No distracting text, no arrows, no loading icons. Only a quiet spatial breath. | The darkness gives way as the central flagship architectural model begins to illuminate. |
| **Beat 5: The Peak** | *Immersion / Excitement* | `flagship` | **Maximum spatial expansion (Largest `data-sc-w`)**. The flagship system opens in 3D: frontend plane, API bus, and data layers separate along the $z$-axis. | Deep dive technical annotations, live data flow paths, and architecture decisions in semantic markup. | Bespoke inspection settles; layers smoothly consolidate back into an integrated system model. |
| **Beat 6: Resolution** | *Confidence / Possibility* | `terminal` | The 3D world comes to a dignified, stable halt in a calm architectural plaza. Scene holds indefinitely. | Career timeline, credentials, direct PDF resume download, and active contact interface under uniform CTA **`Get in touch`**. | Final cue holds (`data-sc-window="finale"`). No fade-out; no empty footer. Resolves permanently. |

---

## 5. Architectural Risks & Mitigations

### 1. The Sizing-at-Mount Trap (`references/worldflight.md §7b`)
- **Risk**: In Continuous World mode, the engine sizes the spacer height once at mount (`(total + 1) * innerHeight`). If the DOM or web fonts settle after mount, or if embedded containers report height 0, the scroll track collapses to 0px, causing the entire page to lock permanently on frame one.
- **Mitigation**: Dispatch explicit `resize` events upon `window.load` and `document.fonts.ready` in page-local script:
  ```js
  function relayout() { dispatchEvent(new Event('resize')); }
  addEventListener('load', relayout);
  if (document.fonts?.ready) document.fonts.ready.then(relayout);
  ```

### 2. The Inconsistent Pacing Surge / Drag Trap (`references/worldflight.md §7c`)
- **Risk**: If the ratio of leg scroll weight (`data-sc-w`) to visual progress varies widely across waypoints, the camera will unpredictably jerk or crawl, destroying the feeling of smooth continuous motion.
- **Mitigation**: Standardize pace across waypoints to roughly $0.21\text{--}0.24\,\text{vh}$ per second of equivalent motion. Keep weights proportional to the cognitive load of each beat, dedicating the largest weight exclusively to the Peak.

### 3. Recruiter Scan Friction
- **Risk**: An unbroken 3D journey risks frustrating high-volume recruiters who want immediate answers (e.g., "Does she know TypeScript and Go? Where is her resume?").
- **Mitigation**:
  - The **Waypoint Nav Rail** and fixed top bar remain persistently accessible with direct one-click anchor jumps (`#skills`, `#projects`, `#experience`, `#contact`).
  - All factual text is real HTML rendered in standard reading order, accessible to browser search (`Ctrl+F`), screen readers, and automated parsers without requiring 3D interaction.

### 4. Text Contrast Over 3D Canvas
- **Risk**: As the 3D scene travels beneath the fixed copy layer, bright highlights or light geometry can pass under text, causing catastrophic contrast drops below WCAG 4.5:1.
- **Mitigation**:
  - Implement `.sc-world__scrim` as a **sibling element** to copy blocks (never child or pseudo-element), ensuring it is measured during the verification pass (`shoot.mjs`).
  - Constrain text blocks to dedicated shadow zones or scrimmed columns so that copy never floats over unchecked high-key geometry.

---

## 6. Responsive & Accessibility Architecture

### Responsive Art Direction (Mobile 360×640 & 390×844)
- **100svh Sizing**: Stage and spacer calculations must account for dynamic mobile address bars to eliminate scroll jumping.
- **Stepped-Down Typography**: Display typography stepped down from `--sc-t-4xl` to `--sc-t-2xl` on screens under $768\text{px}$ to prevent 6-line headline wrapping.
- **Camera Re-Framing**: Mobile composition uses native portrait camera perspectives so that negative space is preserved above and below the subject rather than cropped laterally.
- **Single-Column Stacking**: Multi-tiered grids (Skills and Projects) gracefully adapt to vertical scrollable stacks on mobile.

### Reduced Motion (`prefers-reduced-motion: reduce`)
- **Engine Compliance**: Under reduced motion, all 3D camera translation and parallax lerping are bypassed.
- **Static Grounded Scenes**: Each waypoint resolves to a stable, high-legibility composition.
- **Zero Information Loss**: Every word of narrative, every technical competency, every project link, and the full contact form remain 100% accessible and readable without motion.

---

## 7. Status Declaration

- [x] **Grammar evaluation complete**: All 8 candidates reviewed.
- [x] **Primary grammar selected**: **Continuous World (§2.4)**.
- [x] **Journey mapping established**: 6 narrative beats mapped to spatial waypoints.
- [x] **Implementation has NOT started**:
  - `index.html` has not been created.
  - Page CSS / JS has not been created.
  - Engine files (`scrollcraft.js`, `scrollcraft.css`) remain pristine and unedited.
  - No assets have been generated.
  - Step 2 signature move design, fingerprint gate audit, and score table remain pending.
