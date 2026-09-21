/* =========================================================================
   PORTFOLIO CONTENT
   Main content for the site. Keep project copy short and engineering-focused.
   ========================================================================== */

const PROFILE = {
  name: "Theodoros Vasileiou",
  initials: "TV",
  photo: "assets/images/profile.png?v=20260920-4",
  title: "CFD Methodology, Aerodynamics & Simulation Engineer",
  affiliation: "National Technical University of Athens",
  affiliationShort: "NTUA",
  location: "Athens, Greece",
  email: "theovas2@gmail.com",
  phone: "+30 698 291 4890",
  github: "https://github.com/theovas2-spec",
  linkedin: null,
  resumePdf: "assets/documents/CV.pdf",
  tagline:
    "5th-year Mechanical Engineering student at NTUA working on CFD methodology and aerodynamics.",
  about: [
    "I’m a 5th-year Mechanical Engineering student at NTUA, specialising in Air & Ground Transportation, with a strong interest in motorsport aerodynamics and CFD methodology.",
    "I enjoy working through the full CFD methodology, from geometry and meshing to solver setup, validation, post-processing and understanding where the method needs to improve.",
    "I’m naturally curious, practical and quite persistent with technical problems. I like working close to the full CFD process rather than treating the solver as a black box, and I’m especially interested in turbulence modelling, unsteady aerodynamics, optimisation and automated workflows."
  ],
  focus: ["CFD", "Aerodynamics", "Simulation", "Motorsport"],
};

/* ------------------------------------------------------------------ SKILLS */
const SKILLS = [
  {
    category: "CFD & Simulation",
    items: ["OpenFOAM", "ANSYS Fluent", "RANS", "DES", "MRF", "AMR", "Adjoint Optimisation"],
  },
  {
    category: "Meshing, Post-Processing & Data",
    items: ["ANSA", "ParaView"],
  },
  {
    category: "Programming & Automation",
    items: ["Python", "MATLAB", "Bash"],
  },
  {
    category: "Engineering Design & CAD",
    items: ["SolidWorks", "ANSYS Mechanical", "FEA", "Topology Optimisation"],
  },
  {
    category: "Computing",
    items: ["Linux", "HPC", "Parallel Computing", "SLURM"],
  },
];

/* ------------------------------------------------- PROJECT GROUPS */
const PROJECT_GROUPS = [
  {
    id: "prom-racing",
    title: "PROM Racing — CFD & Aerodynamics",
    intro:
      "Formula Student work covering the CFD workflow from mesh generation and steady development cases to validation, unsteady simulation and optimisation.",
  },
  {
    id: "research-academic",
    title: "Research & Academic Projects",
    intro: "",
  },
  {
    id: "selected-academic",
    title: "Selected Academic Projects",
    intro: "",
  },
];

/* ------------------------------------------------- PROJECTS */
const PROJECTS = [
  {
    id: "p26-half-car-cfd-meshing",
    group: "prom-racing",
    title: "P26 Half-Car CFD & Meshing",
    category: "PROM Racing · P26",
    year: "2025",
    role: "CFD & Aerodynamics Engineer · PROM Racing",
    summary:
      "Production half-car CFD workflow for straight-line aero development, with ANSA meshing, local refinement, boundary-layer resolution and mesh-quality control.",
    description: [
      "For the 2026–27 season I am responsible for the CFD workflow used for PROM Racing’s aerodynamic development. The straight-line baseline uses a half-car computational domain with symmetry, moving ground and rotating wheels.",
      "The production mesh is built in ANSA as a hexa-dominant hybrid mesh. Surface curvature, local size fields and refinement boxes are used around the car and wake, while boundary-layer cells resolve the near-wall gradients.",
      "Before production runs I check mesh quality and near-wall resolution, including the y+ field. The baseline production setup uses an approximately 82 million-cell mesh with low-Re near-wall treatment."
    ],
    cover: "assets/images/p26-mesh-refinement.jpg?v=20260920-4",
    images: [
      "assets/images/p26-domain-bc.jpg?v=20260920-4",
      "assets/images/p26-mesh-refinement.jpg?v=20260920-4",
      "assets/images/p26-yplus-quality.jpg?v=20260920-4"
    ],
    specs: {
      "Simulation": "Half-car · straight-line aero development",
      "Meshing": "ANSA · hexa-dominant hybrid mesh",
      "Mesh size": "~82 M cells",
      "Near-wall": "Low-Re treatment · target y+ ≈ 3–5",
      "Refinement": "Surface + boundary layer + local volume boxes",
      "Boundary conditions": "Symmetry · moving ground · rotating wheels",
      "Quality checks": "y+ field · skewness · aspect ratio · non-orthogonality"
    },
    tags: ["ANSA", "OpenFOAM", "RANS", "Meshing", "y+"],
    pdf: null,
  },
  {
    id: "wind-tunnel-cfd-validation",
    group: "prom-racing",
    title: "Wind-Tunnel CFD Validation — RANS to DES",
    category: "PROM Racing · Validation",
    year: "2025",
    role: "CFD Validation & Methodology · PROM Racing",
    summary:
      "Rear-wing wind-tunnel correlation study used to identify where steady RANS worked, where it failed, and when an unsteady DES approach was needed.",
    description: [
      "We used a P20 rear-wing wind-tunnel campaign as the experimental reference, including angle-of-attack changes, Gurney flaps and vortex generators. I worked on reproducing the test matrix in CFD and comparing both integrated loads and the underlying surface-flow behaviour.",
      "Steady RANS correlated very well for the conventional configurations, with R² ≈ 0.960. The correlation collapsed for the Gurney-flap / vortex-generator subset, where strongly separated and unsteady structures were not represented well by the steady approach.",
      "After checking the numerical setup — including mesh strategy, wall treatment, schemes and solver settings — selected cases were moved to DES. The mean |CL| error dropped from 4.27% to 2.60%, the CL RMSE from 0.062 to 0.033, and all 11 DES cases fell within ±5% of the wind-tunnel lift. Flow-visualisation paint was also compared against CFD wall-shear-stress topology to check the physics behind the force agreement."
    ],
    cover: "assets/images/wt-reference.jpg?v=20260920-4",
    images: [
      "assets/images/wt-reference.jpg?v=20260920-4",
      "assets/images/wt-rans-correlation.jpg?v=20260920-4",
      "assets/images/wt-des-force-history.jpg?v=20260920-4",
      "assets/images/wt-des-results.jpg?v=20260920-4",
      "assets/images/wt-flow-topology.jpg?v=20260920-4"
    ],
    specs: {
      "Experimental reference": "P20 rear-wing wind-tunnel campaign",
      "Test variations": "AoA · Gurney flaps · vortex generators",
      "RANS baseline": "R² ≈ 0.960 for conventional configurations",
      "RANS GF/VG subset": "R² ≈ 0.013",
      "DES campaign": "11 selected GF / VG configurations",
      "Mean |CL| error": "4.27% → 2.60%",
      "CL RMSE": "0.062 → 0.033",
      "Cases within ±5%": "RANS 7/11 → DES 11/11",
      "Validation basis": "Forces + flow topology / wall shear stress"
    },
    tags: ["Wind Tunnel", "RANS", "DES", "Validation", "OpenFOAM"],
    pdf: null,
  },
  {
    id: "p26-full-car-des",
    group: "prom-racing",
    title: "P26 Full-Car Detached-Eddy Simulation",
    category: "PROM Racing · Unsteady CFD",
    year: "2026",
    role: "CFD Methodology & Aerodynamics Engineer · PROM Racing",
    summary:
      "Full-car SA-DES methodology developed to resolve wheel wakes, separated structures and asymmetric vehicle-wake dynamics beyond the steady half-car RANS workflow.",
    description: [
      "The full-car DES study was developed as the next step after the rear-wing wind-tunnel validation. Rather than using the usual half-car symmetry model, the complete P26 geometry was retained so resolved wake structures could move independently across the vehicle centre plane.",
      "The case was initialised from a converged steady RANS field and run as a transient Spalart–Allmaras DES simulation. The setup used a fixed Δt = 1e-4 s, low-dissipation momentum discretisation and PIMPLE coupling, with moving ground and rotating wheels.",
      "The methodology was assessed using more than solver convergence alone. I checked the spatial Courant field, the local RANS–DES operating regions, resolved turbulent content and statistical stationarity before averaging the aerodynamic coefficients. Attached near-wall layers remained mainly RANS-like, while the separated outer flow and wake switched to DES-like behaviour.",
      "Selected wake regions reached approximately 95% resolved turbulence content. Relative to the steady RANS reference, the statistically averaged DES solution predicted 1.87% lower drag and 2.67% lower total downforce, with the larger change appearing in the front-to-rear load distribution. The main value of the study was the time-resolved access to vortex development, wheel-wake interaction, separation and full-car wake dynamics."
    ],
    cover: "assets/images/des-lambda2.jpg?v=20260920-4",
    media: [
      { type: "image", src: "assets/images/des-lambda2.jpg?v=20260920-4" },
      { type: "image", src: "assets/images/des-rans-transition.jpg?v=20260920-4" },
      { type: "image", src: "assets/images/des-regions.jpg?v=20260920-4" },
      { type: "image", src: "assets/images/des-force-history.jpg?v=20260920-4" },
      { type: "image", src: "assets/images/des-wss.jpg?v=20260920-4" },
      { type: "video", src: "assets/videos/DES_U_YSlice.mp4?v=20260920-4" },
      { type: "video", src: "assets/videos/DES_U_XSlice.mp4?v=20260920-4" }
    ],
    specs: {
      "Geometry": "Full-car P26 Bench configuration",
      "Method": "Spalart–Allmaras DES",
      "Initialisation": "Converged steady RANS field",
      "Mesh": "~150 M cells",
      "Time step": "1 × 10⁻⁴ s",
      "Mean Courant": "≈ 0.0149",
      "Resolved turbulence": "≈ 95% in selected wake regions",
      "Mean CD change vs RANS": "−1.87%",
      "Mean downforce change vs RANS": "−2.67%",
      "Assessment": "Methodology development · not full-car experimental validation"
    },
    tags: ["DES", "Unsteady CFD", "OpenFOAM", "PIMPLE", "ParaView"],
    pdf: null,
  },
  {
    id: "adaptive-mesh-refinement",
    group: "prom-racing",
    title: "Adaptive Mesh Refinement & Mesh Independence",
    category: "PROM Racing · CFD Methodology",
    year: "2026",
    role: "CFD Methodology & Aerodynamics Engineer · PROM Racing",
    summary:
      "Mesh-independence study for the P26 half-car case, using Q-driven refinement and pressure-gradient coarsening to spend cells only where they changed the answer.",
    description: [
      "The starting point was an 18.8 million-cell snappyHexMesh half-car case that was about 5.4% away from the wind-tunnel lift. Refining the whole domain was not practical, so the aim was to find where the discretisation error was actually coming from.",
      "My first refinement indicator was vorticity magnitude. It looked sensible, but it also selected attached boundary layers and pushed the result further away from the experiment. I switched the refinement criterion to Q, so the added cells followed vortex cores and wakes instead of being spent on wall layers that were already resolved.",
      "The campaign used three steady solves with two adaptation steps between them. Run 1 started at 18.84 M cells; the Q-driven pass produced a 44.58 M-cell re-snapped mesh, followed by a low-|∇p| coarsening pass and a final 44.13 M-cell mesh. Each solve was warm-started from the previous flow field.",
      "The adapted mesh reduced the tail-mean CL error from 5.43% to 2.30% and reduced the CL scatter by 35.4%. The coarsening pass removed 2.18 million cells from low-gradient regions before re-snapping, while the force change stayed inside the run-to-run scatter. That was the mesh-independence check I wanted from the study."
    ],
    cover: "assets/images/amr-resolved-flow.jpg?v=20260921-3",
    images: [
      "assets/images/amr-mesh-evolution.jpg?v=20260921-3",
      "assets/images/amr-convergence.jpg?v=20260921-3",
      "assets/images/amr-resolved-flow.jpg?v=20260921-3",
      "assets/images/amr-half-mesh-comparison.jpg?v=20260921-3"
    ],
    specs: {
      "Baseline mesh": "18.84 M cells",
      "Final adapted mesh": "44.13 M cells",
      "Refinement indicator": "Q-criterion",
      "Coarsening indicator": "Low |∇p|",
      "Adaptation": "dynamicRefineFvMesh · octree split / merge",
      "Campaign": "3 steady solves · 2 adaptation passes",
      "CL error vs WT": "5.43% → 2.30%",
      "CL scatter": "−35.4%",
      "Mesh-independence check": "−2.18 M cells · no significant CL change"
    },
    tags: ["AMR", "OpenFOAM", "Q-criterion", "snappyHexMesh", "HPC"],
    pdf: null,
  },
  {
    id: "mrf-cornering-simulation",
    group: "prom-racing",
    title: "MRF Cornering Simulation & Tapered Domain",
    category: "PROM Racing · Cornering CFD",
    year: "2025",
    role: "CFD Methodology & Aerodynamics Engineer · PROM Racing",
    summary:
      "Steady MRF cornering CFD that captures yaw-rate effects, curved relative flow and wake steering without a transient moving-mesh solve. The tapered domain cuts the mesh by 44% while preserving wake capture, and the cases feed directly into the aero map for design decision-making.",
    description: [
      "The car is kept fixed while the reference frame rotates about the turn centre. This gives a steady constant-radius cornering solution where the local relative velocity varies across the car, rather than treating cornering as one uniform yaw angle.",
      "The car and wheel boundary velocities are tied to the same yaw rate, including local wheel rotation. The result is a consistent cornering flow field with the radial pressure gradient and wake steering expected in a sustained turn.",
      "To make the workflow cheaper, I redesigned the rotating sector as a tapered domain. It uses 44% fewer cells while keeping the same wake-capture capability. The cornering cases are then included in the aerodynamic map together with ride height, pitch, roll and yaw, so they can be used directly for aero and vehicle-design decisions.",
      "The loft itself was also smoothed using exponential-decay step sizing, reducing the peak curvature metric from 250 mm to 36 mm and removing the crease at the car station."
    ],
   cover: "assets/images/mrf-clean-cornering-flow.png?v=20260921-11",
   images: [
     "assets/images/mrf-clean-approach.png?v=20260921-11",
     "assets/images/mrf-clean-boundary-conditions.png?v=20260921-11",
     "assets/images/mrf-clean-cornering-flow.png?v=20260921-11",
     "assets/images/mrf-clean-domain-optimization.png?v=20260921-11"
   ],
    specs: {
      "Cornering model": "Steady MRF · constant-radius operating point",
      "Yaw rate": "Ωturn = Uc / Rc",
      "Kinematics": "Rigid-body car motion + local wheel rotation",
      "Domain extent": "30° upstream · 90° downstream · 25 loft stations",
      "Widths": "4.0 m inlet · 6.0 m car station · 7.5 m outlet",
      "Blockage at car": "3.67%",
      "Domain saving": "44% fewer cells · same wake capture",
      "Loft smoothing": "Exponential-decay step sizing",
      "Peak |Δ²W|": "250 mm → 36 mm",
      "Use": "Integrated into aero mapping for design decisions"
    },
    tags: ["MRF", "Cornering CFD", "OpenFOAM", "ANSA", "Aero Map"],
    pdf: null,
  },
  {
    id: "adjoint-brake-duct-optimisation",
    group: "prom-racing",
    title: "Continuous Adjoint Shape Optimisation — Brake Cooling Duct",
    category: "PROM Racing · Optimisation",
    year: "2026",
    role: "CFD Methodology & Optimisation Engineer · PROM Racing",
    summary:
      "Continuous-adjoint optimisation of the P26 brake-cooling duct to increase outlet flow, using a volumetric B-spline morphing box and 1008 active design variables.",
    description: [
      "I used continuous-adjoint shape optimisation to improve the P26 brake-cooling duct and increase the airflow delivered to the brake disc. The geometry and 2.45 M-cell verification mesh were prepared in ANSA, and the primal–adjoint optimisation loop was run in OpenFOAM on MareNostrum 5.",
      "The duct was placed inside a volumetric B-spline morphing box with 1008 active design variables. Fixed control points protected the inlet and disc interface, while the internal duct shape and mesh were allowed to deform directly between optimisation cycles.",
      "The retained design increased outlet flow from 25.78 to 27.19 L/s, approximately +5.4%."
    ],
    cover: "assets/images/adjoint-shape-morph.gif?v=20260921-15",
    media: [
      { type: "image", src: "assets/images/adjoint-cad-comparison.png?v=20260921-14" },
      { type: "image", src: "assets/images/adjoint-morphing-regions.png?v=20260921-14" },
      { type: "image", src: "assets/images/adjoint-velocity.png?v=20260921-14" },
      { type: "image", src: "assets/images/adjoint-shape-morph.gif?v=20260921-14" },
      { type: "image", src: "assets/images/adjoint-optimization-cycles.png?v=20260921-14" }
    ],
    specs: {
      "Objective": "Maximise brake-duct outlet flow",
      "Method": "Continuous adjoint · E-SI sensitivities",
      "Parameterisation": "Volumetric B-splines · degree 3",
      "Control lattice": "8 × 16 × 6",
      "Active design variables": "1008",
      "Verification mesh": "2.45 M cells",
      "Compute": "448 cores · MareNostrum 5",
      "Retained result": "25.78 → 27.19 L/s · +5.45%"
    },
    tags: ["Adjoint", "Shape Optimisation", "OpenFOAM", "B-splines", "HPC"],
    pdf: null,
  },

  {
    id: "drivaer-des-field-inversion",
    group: "research-academic",
    title: "DES-Informed Field Inversion for Automotive Aerodynamics — DrivAer Fastback",
    category: "NTUA PCOpt · Turbulence Modelling",
    year: "2026",
    role: "CFD Validation & Turbulence Modelling · NTUA PCOpt",
    summary:
      "Full-scale DrivAer Fastback validation using RANS/SA and DES/SA, followed by an ongoing DES-informed Eddy Viscosity Adaptation / Field Inversion study in OpenFOAM.",
    description: [
      "I am working on a full-scale DrivAer Fastback at 16 m/s with moving ground, rotating wheels and detailed wheel-contact modelling. The first stage focused on validating the CFD setup and understanding where steady RANS/SA differs from the unsteady DES solution.",
      "The experimental drag reference is CD ≈ 0.243. The baseline RANS/SA case predicted about 0.292, while the improved DES setup reduced the mean value to about 0.280. Component analysis shows the main remaining discrepancy around the tires, with strong coupling between wheel wakes and the underbody flow.",
      "The next stage is ongoing: the time-averaged DES velocity field will be used as the high-fidelity target for an adjoint-based Eddy Viscosity Adaptation / Field Inversion workflow. The aim is to identify where the SA closure gives the wrong turbulent momentum transport in the wheel wakes, underbody and separated rear wake, rather than only matching the total drag."
    ],
    cover: "assets/images/drivaerimage.jpg?v=20260921-18",
    images: [
      "assets/images/drivaerimage.jpg?v=20260921-18",
      "assets/images/drivaer-full-mesh.png?v=20260921-17",
      "assets/images/drivaer-wheel-contact-mesh.png?v=20260921-17",
      "assets/images/drivaer-component-drag.png?v=20260921-17"
    ],
    specs: {
      "Geometry": "Full-scale DrivAer Fastback",
      "Freestream": "16 m/s",
      "Ground / wheels": "Moving ground · rotating wheels · contact patch",
      "Experimental CD": "≈ 0.243",
      "RANS / SA CD": "≈ 0.292",
      "DES / SA mean CD": "≈ 0.280",
      "Diagnosis": "Wheel wakes · underbody · rear wake",
      "FI target": "Time-averaged DES velocity field",
      "Status": "RANS/DES validation largely complete · EVA/FI ongoing"
    },
    tags: ["DrivAer", "DES", "Field Inversion", "EVA", "OpenFOAM"],
    pdf: null,
  },
  {
    id: "academic-pump-design",
    group: "selected-academic",
    title: "Pump Design",
    category: "NTUA · Academic Project",
    year: "",
    role: "Selected Academic Project · NTUA",
    summary: "",
    description: [],
    cover: null,
    images: [],
    specs: {},
    tags: [],
    pdf: null,
    draft: true,
  },
  {
    id: "academic-planetary-gearbox",
    group: "selected-academic",
    title: "500 kW Wind Turbine Planetary Gearbox — CAD & FEA",
    category: "NTUA · Machine Design",
    year: "2025",
    role: "Machine Design Project · NTUA",
    summary:
      "Mechanical design of a three-stage planetary gearbox for a 500 kW wind turbine, with my work focused on the SolidWorks assembly and structural verification of critical components.",
    description: [
      "The project was to design the drivetrain for a 500 kW wind turbine, increasing rotor speed from 40 rpm to 3000 rpm. The final concept used three coaxial planetary stages with stage ratios of 3:1, 5:1 and 5:1, giving the required overall 75:1 speed increase.",
      "My part focused mainly on the CAD and structural side. I built the gearbox and its main components in SolidWorks from the calculated gear, shaft, carrier, bearing and housing dimensions, then prepared the full assembly and manufacturing geometry.",
      "I also ran SolidWorks Simulation checks on the critical shafts and planetary carriers. The analytical gear and bearing loads were transferred into the FE models and the components were checked using von Mises stress, giving a numerical cross-check of the hand calculations before finalising the design."
    ],
    cover: "assets/images/wind-turbine-gearbox-cad.jpg?v=20260921-22",
    images: [
      "assets/images/wind-turbine-gearbox-cad.jpg?v=20260921-22",
      "assets/images/assembly.png?v=20260921-22",
      "assets/images/wind-turbine-gearbox-fea-stage1.jpg?v=20260921-22",
      "assets/images/wind-turbine-gearbox-fea-stage2.jpg?v=20260921-22",
      "assets/images/wind-turbine-gearbox-fea-stage3.jpg?v=20260921-22"
    ],
    specs: {
      "Rated power": "500 kW",
      "Architecture": "3-stage coaxial planetary gearbox",
      "Rotor / generator speed": "40 → 3000 rpm",
      "Overall speed increase": "75:1",
      "Stage ratios": "3:1 · 5:1 · 5:1",
      "CAD": "SolidWorks · full gearbox assembly",
      "Structural verification": "SolidWorks Simulation · von Mises stress",
      "Design checks": "Gears · shafts · carriers · bearings · housing",
      "Project constraints": "Efficiency ≥ 87% · mass < 4.5 t · life ≥ 7 years"
    },
    tags: ["SolidWorks", "Machine Design", "Planetary Gearbox", "FEA", "Wind Turbine"],
    pdf: null,
  },
  {
    id: "academic-motorcycle-reverse-engineering",
    group: "selected-academic",
    title: "Motorcycle Reverse Engineering, FEA & Optimisation",
    category: "NTUA · Vehicle Engineering",
    year: "2026",
    role: "Vehicle Engineering Project · NTUA",
    summary:
      "Full motorcycle engineering study starting from a physical Triumph Tiger 955i, then moving through CAD reconstruction, FEA, topology optimisation and MATLAB powertrain and performance modelling.",
    description: [
      "We started from the physical Triumph Tiger 955i, stripped the motorcycle and measured the frame, mounting points and main interfaces. The chassis was then rebuilt parametrically in SolidWorks as a digital twin that we could use for the rest of the analysis.",
      "For the structural study, I worked with an ANSA hybrid shell-solid model of about 1.88 million elements and checked mesh sensitivity before solving four representative load cases in ANSYS: static, acceleration, braking and a 3g vertical impact. The central rocker was then topology-optimised with casting constraints, reducing its mass by 30% while keeping a fatigue safety factor of 5.43.",
      "In parallel, we built MATLAB models for the powertrain and vehicle performance. A digitised Yamaha CP3 dyno curve was used to scan final-drive combinations, followed by an acceleration model including weight transfer, traction and wheelie limits. The same model was then used for parametric maps of CdA, road grade and grip conditions."
    ],
    cover: "assets/images/motorcycle-frame-cover.jpg?v=20260921-21",
    images: [
      "assets/images/motorcycle-frame-cover.jpg?v=20260921-21",
      "assets/images/motorcycle-reverse-engineering.jpg?v=20260921-21",
      "assets/images/motorcycle-ansa-hybrid-mesh.jpg?v=20260921-21",
      "assets/images/motorcycle-topology-optimization.jpg?v=20260921-21",
      "assets/images/motorcycle-matlab-performance.jpg?v=20260921-21",
      "assets/images/motorcycle-parametric-mapping.png?v=20260921-21"
    ],
    specs: {
      "Reference vehicle": "Triumph Tiger 955i",
      "CAD": "SolidWorks digital twin from physical measurements",
      "FE model": "ANSA hybrid shell-solid mesh · 1.88 M elements",
      "Mesh sensitivity": "Δσ = 1.3% · Δu = 0.8%",
      "Load cases": "1g static · 0.6g acceleration · 1g braking · 3g bump",
      "Topology result": "Rocker mass −30% · fatigue SF 5.43",
      "Final drive": "15 / 49 · i = 3.267",
      "Vmax": "≈ 205–207 km/h",
      "Acceleration": "0–100 km/h: 3.79 s · 0–200 km/h: 14.58 s",
      "MATLAB mapping": "CdA · road grade · grip conditions"
    },
    tags: ["SolidWorks", "ANSA", "ANSYS", "FEA", "MATLAB"],
    pdf: null,
  },
  {
    id: "academic-adjoint-numerical-optimisation",
    group: "selected-academic",
    title: "Adjoint-Based Numerical Optimisation",
    category: "NTUA · Academic Project",
    year: "",
    role: "Selected Academic Project · NTUA",
    summary: "",
    description: [],
    cover: null,
    images: [],
    specs: {},
    tags: [],
    pdf: null,
    draft: true,
  },
];

/* ------------------------------------------------- EXPERIENCE */
const EXPERIENCE = [
  {
    period: "2024 - Present",
    role: "CFD Methodology & Aerodynamics Engineer",
    org: "Prom Racing Navios NTUA FSAE Team",
    location: "Athens, Greece",
    bullets: [
      "Developed end-to-end CFD workflows using ANSA, OpenFOAM and ParaView, covering geometry preparation, advanced meshing, solver setup, HPC execution, post-processing and validation.",
      "Developed a Detached-Eddy Simulation methodology using pimpleFoam and the Spalart-Allmaras DES model, applied to full-car transient simulations with moving ground and rotating wheels.",
      "Conducted CFD and wind-tunnel validation across multiple rear-wing configurations, using the experimental results to assess steady RANS limitations and introduce DES selectively for strongly separated flows.",
      "Developed advanced aerodynamic simulation methods including Adaptive Mesh Refinement, adjoint-based shape optimisation, MRF cornering simulations and CFD aero-mapping across representative vehicle states.",
      "Designed and developed front-wing aerodynamic concepts in SolidWorks, evaluating geometry changes and their effect on overall vehicle aerodynamic performance.",
      "Developed a custom MATLAB workflow to process vehicle-dynamics data and combine lap states with CFD aero-map results for aerodynamic performance analysis.",
      "Conducted a brake-disc heat-transfer CFD study on the wheel assembly to derive thermal inputs for integration into a transient brake thermal model."
    ],
  },
  {
    period: "2026 - Present",
    role: "CFD Validation, Turbulence Modelling & Optimisation",
    org: "NTUA Parallel CFD & Optimization Unit",
    location: "Athens, Greece",
    bullets: [
      "Working on a DrivAer Fastback field-inversion study using experimental and RANS/DES data to assess turbulence-model discrepancies."
    ],
  },
];

/* ------------------------------------------------- EDUCATION */
const EDUCATION = [
  {
    period: "2022 - Present",
    degree: "Diploma in Mechanical Engineering · Air & Ground Transportation Specialisation",
    school: "National Technical University of Athens (NTUA)",
    location: "Athens, Greece",
    note: "5th year",
    bullets: [
      "Selected coursework: Computational Fluid Dynamics, Aerodynamics, Optimisation Methods, Computational Methods for Transport Phenomena, Fluid Mechanics II, Vehicle Dynamics."
    ],
  },
];
