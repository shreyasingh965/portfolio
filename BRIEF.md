# Portfolio Brief: Shreya

## 1. Creative Authority & Status
- **Authority**: Self-authored under explicit creative delegation by the client.
- **Source of Truth**: Provided creative parameters for a high-end, corporate-grade developer portfolio.
- **Role**: Creative brief and governing specification for all downstream journey beats, grammar selection, fingerprint gating, scoring, assets, and verification.

---

## 2. Vibe
- **Keywords**: Modern, immersive, elegant, technical, aspirational.
- **Tone**: Understated authority, cinematic precision, clean corporate engineering.

---

## 3. Reference Direction
- **Spatial & Visual Reference**: Cinematic 3D environments, architectural visualization, physical product exhibits, and refined editorial digital publications.
- **Execution Principle**: Do not copy any specific portfolio or web template. The site should feel like entering a bespoke, finely illuminated digital pavilion rather than scrolling down a marketing one-pager.

---

## 4. Target Audience
- **Primary Audience**: Technical recruiters, engineering hiring managers, CTOs, venture founders, and technical collaborators.
- **Audience Mindset**: Looking for immediate proof of technical depth, architectural rigor, system design capability, design maturity, and execution excellence without navigating through marketing fluff or gimmicks.

---

## 5. Scroll Journey
The journey translates the candidate's career into a structured sequence:
*Who I am → what I can do → what I have built → why my work matters → what I can contribute → how to work with me.*

1. **Act 1 · Landing / Hero**: Establishing the space, identity, and core engineering philosophy.
2. **Act 2 · About Me**: Grounded perspective, engineering mindset, principles, and professional narrative.
3. **Act 3 · Technical Capabilities (Skills)**: Systematic breakdown of tools, architectures, backend/frontend engineering, and systems knowledge.
4. **Act 4 · Selected Projects (Portfolio)**: A curated spatial gallery of major shipped software and applications.
5. **Act 5 · Transition / Authored Silence**: A quiet spatial breath and framing interval that clears the canvas before the primary demonstration.
6. **Act 6 · Project Deep Dive (The Peak)**: An immersive architectural breakdown of the flagship system, revealing internal mechanics, data pipelines, and technical complexity.
7. **Act 7 · Experience & Achievements**: Track record of engineering roles, verifiable contributions, and leadership.
8. **Act 8 · Contact & Colloquy (Outcome)**: Direct correspondence terminal, resume download, and communication links.

---

## 6. Energy Curve
- **Act 1 (Hero)**: Quiet, intriguing, spatial, setting a calm ambient baseline.
- **Act 2 (About)**: Focused, steady, readable.
- **Act 3 (Skills)**: Crisp, structured, rhythmic, accumulating density.
- **Act 4 (Projects)**: Engaging, lateral exploration, dynamic interaction.
- **Act 5 (Transition)**: Sudden drop in visual density; a deliberate calm threshold.
- **Act 6 (Deep Dive / Peak)**: Maximum visual, architectural, and spatial intensity.
- **Act 7 (Experience)**: Controlled settling, authoritative, steady, structured.
- **Act 8 (Contact)**: Confident, still, welcoming, resolved.

---

## 7. Feeling Curve
*Spec: One line per act — the exact emotion felt, followed by what on screen causes it.*

```
Act 1 (Landing)     Curiosity       A darkened, delicately lit 3D workspace where spatial coordinates and typography slowly align
Act 2 (About)       Recognition     Clean editorial plane presenting the engineer's philosophy, clear voice, and focus
Act 3 (Skills)      Trust           An architectural matrix of technical disciplines and stack components grounded in real-world systems
Act 4 (Projects)    Interest        Curated project planes drifting into view with measured lateral depth and contextual specs
Act 5 (Transition)  Anticipation    An authored silence; media and copy yield to a quiet spatial clearing before the drop
Act 6 (Deep Dive)   Immersion       The flagship project unfolds into an illuminated 3D architectural explosion of data flow and layers
Act 7 (Experience)  Confidence      A disciplined, verifiable timeline of engineering impact, roles, and technical milestones
Act 8 (Contact)     Possibility     A resolved, dignified contact plate with active channels and clear invitation to build
```

---

## 8. The Peak
- **Location**: Act 6 (Project Deep Dive).
- **The Peak Moment (Visitor Quote)**:
  > "The page went quiet for a beat, and then the whole screen pulled back to let me fly straight into the living architecture of her flagship system, dissecting the layers with my cursor while the telemetry stayed razor sharp."
- **Budget Allocation**:
  - Receives the largest viewport span (`data-sc-span`) on the site.
  - Receives the primary asset budget and 3D spatial fidelity.
  - Preceded by an intentional authored silence (Act 5) to ensure the contrast lands with maximum impact.

---

## 9. Signature Move
- **Concept**: *Interactive Spatial Workspace Navigation*.
- **Implementation**: The portfolio avoids conventional disjointed blocks by implementing a continuous spatial coordinate system where project artifacts exist on distinct 3D planes. A bespoke page-local interaction (driven by `--sc-p` and fine cursor coordinates, completely separate from the Scrollcraft engine mechanism) allows the visitor to tilt, inspect, or toggle projection planes of the flagship system's architecture without breaking document scroll flow.
- **Constraint**: Fully implemented in local markup, CSS variables, and bespoke script; zero modifications to `scrollcraft.js`.

---

## 10. Aesthetic Direction
- **Style Family**: Premium-minimal + cinematic + architectural editorial.
- **Color Discipline**:
  - Six functional token roles; no random accent confetti.
  - Dark-mode foundation using deep charcoal/off-black (`--sc-canvas: #090a0d`), tinted surfaces (`--sc-surface: #12141a`), warm bone typography (`--sc-ink: #f2f3f5`), muted soft ink (`--sc-ink-soft: #8e929b`), and a single restrained technical accent (such as surgical electric cyan `#38bdf8` or amber gold `#e2b357`).
  - No pure black (`#000000`).
  - No violet/blue AI gradients, neon glows, or cybernetic tropes.
- **Typography**:
  - Maximum of two type families:
    1. Display: Modern geometric grotesque (e.g., *Archivo*, *Space Grotesk*, or *Cabinet Grotesk*).
    2. Body/Text: Crisp neutral sans (e.g., *Geist* or *Inter*).
    3. Monospace: Reserved strictly for code snippets, telemetry, and system specs (e.g., *Geist Mono*).
  - Strict tracking adjustments (tighter on display, normal on text) and optical measure (45–75ch).
- **Spatial Quality**:
  - Realistic elevation shadows (offset + blur tinted to canvas hue).
  - Subtle hairline borders (`--sc-edge`) and fine structural grain.

---

## 11. World Structure: Continuous World
- **Decision**: Continuous 3D World / Integrated Spatial Environment.
- **Rationale**: The user's explicit brief specifies that the entire portfolio should feel like navigating one coherent environment that evolves as the visitor scrolls, preserving spatial and visual continuity across transitions.
- **Execution Law**: Seams between scenes must be structural, spatial, or camera-driven rather than raw HTML block chops. All content layers and dimensional planes must honor clear foreground/midground/background occlusion contracts.

---

## 12. Existing Asset Assumptions
- **Supplied Documents**: Resume PDF to be supplied separately; linked from navigation and the closing contact act.
- **Project Assets**: Project screenshots, diagrams, links, and descriptions to be supplied by the user.
- **Strict Anti-Fabrication Rule**:
  - No fabricated achievements, fake metrics (e.g., "improved latency by 94.2%"), made-up company names, or pseudo testimonials.
  - Where actual project data, employment history, or client logos are pending, clean, clearly labeled structural placeholders (e.g., `[Flagship Project Name]`, `[Production Metric]`, `[Repository Link]`) will be used.

---

## 13. Corporate & Professional Requirements
- **Recruiter Usability**: Information hierarchy must be immediately scannable. A recruiter spending 30 seconds can immediately locate: tech stack, recent roles, live project demos, and contact info.
- **Semantic HTML**: Real semantic tags (`<header>`, `<main>`, `<section>`, `<article>`, `<h1>`-`<h6>`, `<p>`, `<nav>`, `<footer>`) ensuring complete screen-reader compatibility and SEO indexing.
- **Accessibility & Contrast**:
  - Body text contrast ≥ 4.5:1; display text ≥ 3:1 measured directly against composited renders.
  - Scrims must always be sibling elements to copy, never child pseudo-elements.
  - Visible `:focus-visible` rings on all interactive elements.
- **Responsive Architecture**:
  - Full mobile art direction across portrait viewports (360x640, 390x844).
  - Display typography stepped down on mobile to prevent excessive multi-line wrapping.
  - Pinned containers utilize `100svh` to avoid dynamic browser address bar jitter.
- **Reduced Motion (`prefers-reduced-motion: reduce`)**:
  - Eliminates camera travel and rapid parallax while preserving all semantic content, project specs, and text.
  - Interactive galleries smoothly downgrade to accessible scrollable or stacked views.
- **CTA Uniformity**: Exactly one primary action label for contact intent throughout the site (e.g., "Get in touch" or "Initiate contact"), used identically in the header, hero, and close.

---

## 14. The Tell-Someone Sentence
> "It's the site where my work becomes a cinematic 3D journey through what I build and how I think."

---

## 15. Authored Silences
- **The Pre-Peak Silence (Act 5)**: A measured 0.8–1.2vh region of spatial calm between Selected Projects and the Project Deep Dive. The visual stage decompresses, copy clears, and ambient light narrows. This intentional silence ensures the sensory impact of the Peak (Act 6) feels profound rather than continuous noise.
- **Hero Stasis**: An immediate landing state where the opening composition is readable and grounded before scroll begins (using `data-sc-cue="0 ... 0"` greet form).
- **The Closing Hold**: The final contact act resolves cleanly and holds its position; it never fades to black, dissipates, or drops into an empty generic footer.

---

## 16. Non-Negotiable Scrollcraft Rules
1. **Never edit the engine files** (`scrollcraft.js` and `scrollcraft.css`).
2. **Never use clay diorama / low-poly / toy diorama styles**.
3. **Never include "scroll to explore", animated mouse icons, or directional arrows**.
4. **Never use section counters** (`01 / 08`).
5. **At most one eyebrow per three sections**.
6. **No visible em dashes (`—`)**; use colons, commas, or parentheses.
7. **No centering every section**; vary anchors (lead, trail, center, split).
8. **No repeated device families in succession**; at least 4 distinct device families utilized.
9. **At most two `scrub` video acts** across the entire page.
10. **The feeling curve must be locked before acts are coded**.
11. **Exactly one engineered peak** with the highest scroll budget and preceding silence.
12. **Must clear the Fingerprint Gate**: differ from every row in `FINGERPRINTS.md` on at least 4 of 6 dimensions.
13. **Never use `transition: all` or animate layout properties** (`top`, `left`, `width`, `height`, `margin`, `padding`).
14. **All scrub clips must have audio stripped**.
15. **Never ship without running Step 5 verification** (`shoot.mjs` desktop, mobile, reduced-motion passes, and cold feel check).
