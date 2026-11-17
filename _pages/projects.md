---
layout: page
title: Projects
permalink: /projects/
nav: true
nav_order: 3
---

> Visual case studies with build photos, CAD/FEA views, and downloadable PDFs are on **[Builds]({{ '/builds/' | relative_url }})**.

### 1. Wireless taVNS Biostimulant Earbud (Caltech Gao Group / FSRI)

Co-developed a self-contained wireless earbud pairing BLE audio streaming with controllable biphasic transcutaneous auricular vagus nerve stimulation (0–5 mA, 32 V boost rail) to offset motion sickness under a <$200 prototype BOM.

| Role | Methods | Measured Results |
|------|---------|------------------|
| Undergraduate researcher (co-developer) | KiCad schematic + PCB, Phrozen 16K SLA resin housing, machined aluminum electrodes | 0.9 Ω (Al) vs. 165.0 kΩ graphite-silicone composite (~177,000× lower resistance, n=6); <$200 BOM |

**Artifacts**:
- <a href="{{ '/builds/tavns-earbud/' | relative_url }}">Full case study &amp; photos →</a>
- <a href="{{ '/assets/pdf/builds/tavns-earbud-poster-1p.pdf' | relative_url }}" target="_blank" rel="noopener">FSRI poster (PDF, 1 p) ↗</a>

---

### 2. An Instrumented Handle for Stroke Rehabilitation (Utah NeuroRobotics Lab)

Utensil-sized instrumented handle (115 mm × 33 mm, <80 g) measuring 0–100 N grip force, thumb pinch, 3-axis acceleration, and Hall-effect orientation during feeding ADLs across three PCB spins.

| Role | Methods | Measured Results |
|------|---------|------------------|
| Research contributor (electronics & mechanical integration) | 3 PCB spins (to slim edge-mount board with test pads), 3D-printed internal spine, Python force/IMU pipeline | 115 × 33 mm, <80 g; 0–100 N range; 3 PCB iterations |

**Artifacts**:
- <a href="{{ '/builds/stroke-rehab-handle/' | relative_url }}">Full case study &amp; PCB gallery →</a>
- <a href="{{ '/assets/pdf/project-2-artifact.pdf' | relative_url }}" target="_blank">Poster</a>
- <a href="https://neurorobotics.ece.utah.edu/category/presentation/" target="_blank">Presentation</a>
- <a href="https://our.utah.edu/urs/an-instrumented-utensil-handle-for-functional-assessment-of-hand-performance-in-stroke-rehabilitation/" target="_blank">Utah URS abstract</a>

---

### 3. Soft Supernumerary Robotic Limb (SRL) for Human Augmentation

Wearable 9-segment Ecoflex 00-30 silicone continuum arm driven by 12 stepper motors on a 3D-printed torso backplate, using a Discrete Cosserat Rod path planner with vision and speech intention control.

| Role | Methods | Measured Results |
|------|---------|------------------|
| Solo developer | Silicone elastomer molding, 12-stepper tendon drive, Discrete Cosserat Rod kinematics | 2.2 cm avg point error (8 trials); 0.03 s latency; 84% task completion; 16.1 lb system ($247 BOM); 92.4 lb peak tested payload (157 N) |

**Artifacts**:
- <a href="{{ '/builds/soft-robotic-limb/' | relative_url }}">Full case study &amp; test data →</a>
- <a href="{{ '/assets/pdf/project-5-artifact.pdf' | relative_url }}" target="_blank">Poster (8 pp)</a>
- <a href="https://science-fair.org/database/project_awards.php?school_year=2425&schoolname=Leigh+High+School" target="_blank">Synopsys 2025 1st Award</a>

---

### 4. Drone Belly Mount for Hyperspectral Camera (SJSU ARAS Lab)

Rigid two-part belly mount suspending a ~1.5 kg MicroHSI 410 hyperspectral camera straight-down beneath a DJI Matrice-class drone without blocking heat sinks, ports, or shifting CG off-axis.

| Role | Methods | Measured Results |
|------|---------|------------------|
| Research contributor (CAD, FEA & 3D print) | SolidWorks L-bracket + cradle, heat-set inserts, ribbing, linear static FEA (ABS, 20 N load) | 2 print iterations; 1.59 MPa max plate stress / 1.24 MPa cradle stress; 0.015 mm max displacement; bench-fitted on airframe |

**Artifacts**:
- <a href="{{ '/builds/drone-hsi-mount/' | relative_url }}">Full case study &amp; FEA plots →</a>
- <a href="https://www.aras-lab.club/team" target="_blank">ARAS Lab team page</a>

---

### 5. Reclaiming 7th Street: Reconfigurable Housing Prototype (Autodesk Make It Home)

Modular West Oakland housing development drafted in AutoCAD, modeled in Fusion 360, and 3D-printed in PLA on a Bambu Lab X1E as an interlocking scale model — winner of Autodesk's **Grand Prize for Best Physical Prototype**.

| Role | Methods | Impact |
|------|---------|--------|
| Solo designer & builder | AutoCAD floor plans, Fusion 360 modular assembly, Bambu Lab X1E PLA scale model | Grand Prize — Best Physical Prototype (Make It Home 2025); featured by Autodesk |

**Artifacts**:
- <a href="{{ '/builds/reclaiming-7th-street/' | relative_url }}">Case study &amp; 3D-print photos →</a>
- <a href="https://www.instructables.com/Reclaiming-7th-Street-Designing-Reconfigurable-Hou/" target="_blank">Instructables build log (35 steps)</a>

---

### 6. HopeNest: Non-Electrical Neonatal Incubator

Power-independent medical enclosure using paraffin phase-change material (PCM), polycarbonate/fiberglass insulation, and passive HEPA/carbon filtration to maintain 35–38 °C and 40–80% humidity for 3.5 hours ($103.60 BOM).

| Role | Methods | Impact |
|------|---------|--------|
| Lead designer | Thermal PCM modeling, passive stack airflow, 4-hour environmental testing | National STEM Festival Champion (1 of 3 in CA) &amp; Autodesk Design &amp; Make Champion (1 of 2 of 8,000) |

**Artifacts**:
- <a href="{{ '/assets/pdf/project-6-artifact.pdf' | relative_url }}" target="_blank">Poster</a>
- <a href="https://www.prnewswire.com/news-releases/explr-announces-top-student-innovators-named-national-stem-champions-302335311.html" target="_blank">PR Newswire</a>

---

### 7. VEX Drivetrain Testing, Bézier Autonomy & Pit Infrastructure (12478X)

Built three full-width drivable testbeds (tank, X-drive, 6-motor mecanum) to pick the competition base, implemented a C++ odometry + Bézier field-centric planner, and engineered a 4-fan pit cooling PCB and 3D-printed powered transport cart.

| Role | Methods | Impact |
|------|---------|--------|
| Co-founder, Captain, Designer & Programmer | Controlled A/B testbeds, C++ odometry/Bézier planner, custom fan PCB, Bambu FDM | Ranked 15th globally of 200,000+ teams; 2025 VEX World Amaze Award (1 of 10 of 15,000) |

**Artifacts**:
- <a href="{{ '/builds/vex-drivetrain-autonomy/' | relative_url }}">Drivetrain + Bézier case study →</a>
- <a href="{{ '/builds/pit-rig-box-bot/' | relative_url }}">Pit Cooling Rig + Box Bot case study →</a>

---

### 8. Revisiting Stellar Systems J0946 and V723 Monocerotis (ASDRP)

Astrophysics research study investigating mass-gap black hole candidates in binary systems (`arXiv:2412.06130`).

**Artifacts**:
- <a href="https://arxiv.org/abs/2412.06130" target="_blank">arXiv preprint</a>
- <a href="https://www.asdrp.org/post/a-study-of-mass-gap-black-hole-candidates-by-the-downing-laboratory-at-asdrp" target="_blank">ASDRP publication</a>

---

### 9. Software & Assistive Apps (Elderlynk, Visionary, SafetyButton)

- **Elderlynk**: Senior health & social connection app (<a href="https://youtu.be/lgh_EQ8lhjA?si=IwfM8BaJ-piYb-3u" target="_blank">Demo video</a>)
- **Visionary**: Hands-free eye-tracking + BCI communication web app (<a href="https://youtu.be/jJgJ5SNxIaE?si=b7riXCyYkV5D7Im1" target="_blank">Demo video</a>)
- **SafetyButton**: Voice-triggered emergency alert app — Congressional App Challenge Winner CA-16 (<a href="https://youtu.be/PjY-H4DazVc?si=PwltJi5raUiDfjAm" target="_blank">Demo video</a>)
