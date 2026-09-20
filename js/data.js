/* =========================================================================
   PORTFOLIO CONTENT
   Main content for the site. Keep project copy short and engineering-focused.
   ========================================================================== */

const PROFILE = {
  name: "Theodoros Vasileiou",
  initials: "TV",
  photo: "assets/images/profile.png",
  title: "CFD & Aerodynamics Engineer",
  affiliation: "National Technical University of Athens",
  affiliationShort: "NTUA",
  location: "Athens, Greece",
  email: "theovas2@gmail.com",
  phone: "+30 698 291 4890",
  github: "https://github.com/theovas2-spec",
  linkedin: null,
  resumePdf: "assets/documents/CV.pdf",
  tagline:
    "5th-year Mechanical Engineering student at NTUA working on CFD and aerodynamics, with 2+ years of Formula Student experience.",
  about: [
    "I’m a 5th-year Mechanical Engineering student at NTUA, specialising in Air & Ground Transportation, with a strong interest in motorsport aerodynamics and CFD methodology.",
    "What I enjoy most is understanding why a simulation behaves the way it does: building the mesh and setup carefully, checking the physics, comparing against experimental or reference data, and improving the method when something does not correlate.",
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
    intro:
      "Selected NTUA research and engineering projects outside Formula Student.",
  },
];

/* ------------------------------------------------- PROJECTS */
const PROJECTS = [
  {
    id: "p26-half-car-cfd-meshing",
    group: "prom-racing",
    title: "P26 Half-Car CFD & Meshing",
    category: "PROM Racing · P26",
    year: "2026",
    role: "CFD & Aerodynamics Engineer · PROM Racing",
    summary:
      "Production half-car CFD workflow for straight-line aero development, with ANSA meshing, local refinement, boundary-layer resolution and mesh-quality control.",
    description: [
      "For the 2026–27 season I am responsible for the CFD workflow used for PROM Racing’s aerodynamic development. The straight-line baseline uses a half-car computational domain with symmetry, moving ground and rotating wheels.",
      "The production mesh is built in ANSA as a hexa-dominant hybrid mesh. Surface curvature, local size fields and refinement boxes are used around the car and wake, while boundary-layer cells resolve the near-wall gradients.",
      "Before production runs I check mesh quality and near-wall resolution, including the y+ field. The baseline production setup uses an approximately 82 million-cell mesh with low-Re near-wall treatment."
    ],
    cover: "assets/images/p26-mesh-refinement.jpg",
    images: [
      "assets/images/p26-domain-bc.jpg",
      "assets/images/p26-mesh-refinement.jpg",
      "assets/images/p26-yplus-quality.jpg"
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
    year: "2026",
    role: "CFD Validation & Methodology · PROM Racing",
    summary:
      "Rear-wing wind-tunnel correlation study used to identify where steady RANS worked, where it failed, and when an unsteady DES approach was needed.",
    description: [
      "We used a P20 rear-wing wind-tunnel campaign as the experimental reference, including angle-of-attack changes, Gurney flaps and vortex generators. I worked on reproducing the test matrix in CFD and comparing both integrated loads and the underlying surface-flow behaviour.",
      "Steady RANS correlated very well for the conventional configurations, with R² ≈ 0.960. The correlation collapsed for the Gurney-flap / vortex-generator subset, where strongly separated and unsteady structures were not represented well by the steady approach.",
      "After checking the numerical setup — including mesh strategy, wall treatment, schemes and solver settings — selected cases were moved to DES. The mean |CL| error dropped from 4.27% to 2.60%, the CL RMSE from 0.062 to 0.033, and all 11 DES cases fell within ±5% of the wind-tunnel lift. Flow-visualisation paint was also compared against CFD wall-shear-stress topology to check the physics behind the force agreement."
    ],
    cover: "assets/images/wt-reference.jpg",
    images: [
      "assets/images/wt-reference.jpg",
      "assets/images/wt-rans-correlation.jpg",
      "assets/images/wt-des-force-history.jpg",
      "assets/images/wt-des-results.jpg",
      "assets/images/wt-flow-topology.jpg"
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
