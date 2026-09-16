# Scrollcraft Step 2: Uniqueness & Fingerprint Specification
**Build**: `shreya-portfolio`  
**Status**: Fingerprint Defined & Audited · *Implementation and Asset Generation have NOT yet started.*  
**Governing Documents**: [`BRIEF.md`](BRIEF.md) · [`JOURNEY.md`](JOURNEY.md) · [`GRAMMAR.md`](GRAMMAR.md)  
**Reference Authority**: [`references/uniqueness.md §4`](../../.agents/skills/scroll-craft/references/uniqueness.md) · [`templates/FINGERPRINTS.md`](../../.agents/skills/scroll-craft/templates/FINGERPRINTS.md)

---

## 1. The Six Scrollcraft Fingerprint Dimensions

Per [`references/uniqueness.md §4`](../../.agents/skills/scroll-craft/references/uniqueness.md), every site created with Scrollcraft is fingerprinted across six distinct structural axes. A new build must differ from **every** existing registered build on at least **4 of the 6 dimensions**:

1. **Grammar**: The organising architectural logic of the document.
2. **Nav Treatment**: What the persistent chrome is, what it displays, and what it does.
3. **Hero Device**: How the first viewport behaves before and during initial scroll.
4. **Act-Sequence Shape**: The device order, waypoint/act count, pacing distribution, and total scroll track length.
5. **Close Pattern**: How the final screen behaves, how it resolves, and what the CTA sits in.
6. **Signature Move**: The single bespoke interaction unique to this site alone (coded locally in the page; engine untouched).

---

## 2. Existing Registry Observations

The local workspace registry at [`scrollcraft/FINGERPRINTS.md`](../FINGERPRINTS.md) was inspected:

```markdown
| Build | Grammar | Nav treatment | Hero device | Act-sequence shape | Close pattern | Signature move | World | Port |
|---|---|---|---|---|---|---|---|---|
*(empty: your first build has nothing to clear, so build whatever the interview points at. From the second onwards, this table is the constraint.)*
```

### Registry Status
- **Current Rows**: 0 (The local workspace registry is clean and freshly seeded).
- **First-Build Rule**: Because this is the initial build in this workspace, there are no prior local rows to collide with. However, Scrollcraft explicitly mandates that the first build must **not** fall into the historical "template trap" that plagued early Scrollcraft builds (documented in [`references/uniqueness.md §1`](../../.agents/skills/scroll-craft/references/uniqueness.md)).

---

## 3. Collision Analysis: The Template Trap Benchmark

To ensure genuine uniqueness and prevent accidental recurrence of generic patterns, the proposed portfolio is audited against the historical default archetype described in `uniqueness.md §1`:

| Fingerprint Dimension | Historical Default Archetype ("The Template Trap") | Potential Collision Risk | Proposed `shreya-portfolio` Fingerprint | Collision Status |
|---|---|---|---|---|
| **1. Grammar** | Filmic One-Shot (§2.1) using sequential pinned `<section data-sc-act="pin">` blocks. | Reaching for act blocks creates unpinning seams and horizontal cut lines. | **Continuous World (§2.4)** using `data-sc-mode="worldflight"`, single fixed stage, decoupled copy layer, and spacer track. | **CLEAN (Different)** |
| **2. Nav Treatment** | Minimal fixed top bar with wordmark + single generic CTA button. | Generic header that provides zero progress context or spatial awareness. | **Corporate Telemetry & Waypoint Map**: Persistent status rail displaying real-time depth/waypoint index (`--sc-seg`), direct anchor jumps, and dedicated one-click `Resume (PDF)` action alongside uniform CTA. | **CLEAN (Different)** |
| **3. Hero Device** | Full-bleed video scrub under corner-anchored kinetic headline with greet cue. | Relying on a heavy video scrub clip that freezes on mobile or feels like a stock commercial. | **Spatial Coordinate Orientation**: Darkened 3D environment where architectural node coordinates and identity typography align quietly via camera dolly (no video scrub). | **CLEAN (Different)** |
| **4. Act-Sequence Shape** | 6–7 acts landing between 13.6 and 13.8vh: `scrub > pin > flow > scrub > pan > pin`. | Uniform act lengths and repetitive pacing rhythms. | **7-Waypoint Asymmetric Spatial Track (14.7vh total)**: Weighted progression (`1.2vh → 1.4vh → 1.8vh → 2.2vh → 1.0vh [Silence] → 3.6vh [Peak] → 1.5vh [Close]`). Dedicated pre-peak silence and oversized flagship peak. | **CLEAN (Different)** |
| **5. Close Pattern** | Pinned act (`data-sc-span="1.15"`) with spotlight highlight and magnetic button CTA (`data-sc-magnet="0.26"`). | Gimmicky magnetic cursor physics that feel frivolous for corporate recruiters. | **Permanent Architectural Plaza Resolution**: Stable resting plate holding at full opacity (`data-sc-window="finale"`), structured career credentials, verified milestone dossier, and clean correspondence channels. No magnetic button; no spotlight gimmick. | **CLEAN (Different)** |
| **6. Signature Move** | None (or minor parameter tweaks to kit devices, like `data-sc-tilt="9"` or recolored spotlights). | Failing to invent a truly bespoke interaction. | **Interactive Spatial Architecture Exploder & Coordinate Projection**: Bespoke page-local script reading `--sc-p` and pointer offset to separate the flagship system's architectural layers (Client, API, Data) in 3D space during the peak. | **CLEAN (Different)** |

**Result**: Differs on **6 of 6 dimensions** against the historical default pattern (exceeding the required minimum of 4).

---

## 4. Proposed Distinctive Fingerprint Specification

```
Build:               shreya-portfolio
Grammar:             Continuous World (§2.4)
Nav Treatment:       Corporate Telemetry & Interactive Waypoint Map (Depth readout, recruiter jumps, PDF resume action)
Hero Device:         3D Spatial Coordinate Orientation & Identity Dock (Camera dolly, stationary wireframe alignment)
Act-Sequence Shape:  7-Waypoint Asymmetric Track (14.7vh total: 1.2, 1.4, 1.8, 2.2, 1.0 [Silence], 3.6 [Peak], 1.5)
Close Pattern:       Permanent Architectural Plaza Resolution (Stable held plate, verified credentials, direct action)
Signature Move:      Interactive Spatial Architecture Exploder (3D layer separation via local pointer & progress)
World:               Dark Architectural Workspace (#090a0d canvas, surgical technical cyan/amber accent)
```

---

## 5. Rationale for Each Fingerprint Dimension

### 1. Grammar: Continuous World (§2.4)
- **Why**: Eliminates document-flow block seams entirely. A candidate portfolio presenting high-end engineering capability cannot afford visible horizontal cut lines or stage-unpinning jumps as the user scrolls.

### 2. Nav Treatment: Corporate Telemetry & Waypoint Map
- **Why**: Serves both audiences simultaneously. For technical evaluators, it reinforces spatial awareness and technical precision. For time-constrained recruiters, it provides immediate, non-blocking 1-click jumps to `#about`, `#skills`, `#projects`, `#experience`, and `#contact`, with direct access to the PDF resume.

### 3. Hero Device: Spatial Coordinate Orientation
- **Why**: A full-bleed video scrub can easily look like an agency template or fail to decode cleanly on low-power mobile devices. An authored 3D coordinate dock immediately establishes spatial depth through real typography, restrained camera motion, and architectural wireframes.

### 4. Act-Sequence Shape: Asymmetric Waypoint Track with Authored Silence
- **Why**: Standard portfolios give equal length to every section, producing an exhausting, flat tempo. This fingerprint gives the pre-peak silence its own dedicated $1.0\,\text{vh}$ pause and awards the flagship peak $3.6\,\text{vh}$—more than double any other section—ensuring the emotional peak is physically felt.

### 5. Close Pattern: Permanent Architectural Plaza Resolution
- **Why**: Avoids the lazy pattern of fading out to a dead footer or relying on playful magnetic buttons. Recruiter evaluation requires a confident, grounded closing where contact channels, GitHub links, and career history remain lit and stable.

### 6. Signature Move: Interactive Spatial Architecture Exploder
- **Why**: Proves that the candidate understands both systems architecture and advanced frontend interaction. During the flagship project deep dive, the system's architecture separates into distinct spatial strata (UI/Client layer, API routing, Data engine) under scroll and cursor control, allowing visitors to inspect the technical anatomy.

---

## 6. Support for Continuous 3D World & The Single Peak

### Continuous World Alignment
- The single fixed stage (`[data-sc-world]`) and empty spacer track (`[data-sc-spacer]`) allow the camera to travel uninterrupted across all seven waypoints.
- The waypoint map listens to the native `sc:waypoint` event and updates active indicators without requiring artificial URL hash churn.

### Engineered Peak Support
- The peak is structurally protected by the preceding silence (`threshold`).
- At waypoint `flagship`, the camera reaches its deepest point of interior travel. The signature architecture exploder activates exclusively within this waypoint, ensuring that the visual climax and technical climax occur simultaneously.

---

## 7. Implementation Boundaries & Safeguards

1. **Engine Integrity**:
   - `scrollcraft.js` and `scrollcraft.css` **remain 100% pristine and unmodified**.
   - The signature move is implemented strictly in page-local JavaScript and CSS custom properties reading `--sc-p` and cursor offsets.
2. **Strict Factual Accuracy**:
   - Zero fabricated achievements, client names, metrics, or technologies.
   - Clean structural placeholders used where project details are pending.
3. **Recruiter Fast-Path**:
   - No 3D interaction or animation is required to read skills, history, or contact details; standard DOM accessibility is maintained throughout.
4. **Current Status**:
   - **Implementation has NOT started**.
   - No `index.html` created; no assets generated; no CSS written.
   - Ready for the next workflow stage (Step 2 Score Table / Beat Assignment).
