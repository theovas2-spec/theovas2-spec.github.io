/* =========================================================================
   PORTFOLIO CONTENT: edit everything here, no need to touch index.html.
   -----------------------------------------------------------------
   Single source of truth for the site. Filled in from Theodoros Vasileiou's CV.
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
  github: null,                                  // TODO: add your GitHub URL if you have one
  linkedin: "https://www.linkedin.com/in/your-username", // TODO: paste your LinkedIn profile URL
  resumePdf: "assets/documents/CV.pdf",
  tagline:
    "5th-year mechanical engineering student focused on CFD methodology, aerodynamics and simulation, from workflow development to experimental validation.",
  about: [
    "I am a 5th-year Mechanical Engineering student at the National Technical University of Athens, specialising in Air & Ground Transportation, with 2+ years of Formula Student experience in CFD and aerodynamics.",
    "My work spans the whole simulation pipeline: geometry preparation, meshing, solver setup, HPC execution and post-processing, with a focus on CFD methodology development, adjoint-based optimisation and experimental validation against wind-tunnel data.",
    "I'm driven by motorsport and simulation/software engineering, and I enjoy building automated, validated workflows that turn complex flow problems into clear engineering insight.",
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

/* ------------------------------------------------- PROJECTS */
/* TODO (next step): replace the example projects below with your real ones
   from the CV: Centrifugal Pump Design, Wind-Turbine Planetary Gearbox,
   Motorcycle Reverse Engineering & FEA, Adjoint-Based Numerical Optimisation. */
const PROJECTS = [
  {
    id: "bike-frame",
    title: "Topology-Optimised Bicycle Frame",
    category: "Structural Optimisation",
    year: "2025",
    role: "Solo project · Coursework",
    summary:
      "Re-designed a road-bike frame with topology optimisation, cutting 18% of mass while keeping peak stress below yield.",
    description: [
      "Starting from a conventional aluminium frame, I set up a topology-optimisation study in ANSYS with realistic rider loads (static + fatigue-relevant cases). The resulting load paths were re-interpreted as manufacturable tube cross-sections and rebuilt in SolidWorks.",
      "The final geometry was re-meshed and validated with a full FEA run. Peak von Mises stress stayed under 60% of yield for the worst-case load, and the optimised frame saved 18% of mass versus the baseline.",
    ],
    cover: "assets/images/project-bike.svg",
    images: [
      "assets/images/project-bike.svg",
      "assets/images/detail-mesh.svg",
      "assets/images/detail-cad.svg",
      "assets/images/detail-photo.svg",
    ],
    specs: {
      Material: "Aluminium 6061-T6",
      "Load case": "100 kg rider · 2.5 g",
      "Peak von Mises": "142 MPa",
      "Mass reduction": "18%",
      Software: "SolidWorks · ANSYS",
    },
    tags: ["FEA", "Topology Optimisation", "SolidWorks", "ANSYS"],
    pdf: "assets/documents/report-bike.pdf",
  },
  {
    id: "desktop-cnc",
    title: "Desktop CNC Milling Machine",
    category: "Machine Design",
    year: "2024",
    role: "Team lead · 3 members",
    summary:
      "Designed and built a low-cost 3-axis CNC mill, from stiffness calculations to cutting its first aluminium part.",
    description: [
      "I led the mechanical design of a 3-axis CNC mill with a 300×200 mm work envelope. Frame stiffness was sized analytically (beam models) and verified in ANSYS, targeting < 50 µm deflection under typical cutting loads.",
      "The machine uses a steel frame, profile-rail linear guides and a high-speed spindle. We manufactured the parts on a shared workshop mill, assembled and trammed the axes, and validated repeatability with a dial indicator.",
    ],
    cover: "assets/images/project-cnc.svg",
    images: [
      "assets/images/project-cnc.svg",
      "assets/images/detail-cad.svg",
      "assets/images/detail-photo.svg",
      "assets/images/detail-mesh.svg",
    ],
    specs: {
      "Work envelope": "300 × 200 × 100 mm",
      "Frame": "Steel · bolted",
      "Spindle": "1.5 kW · 24,000 rpm",
      "Target stiffness": "20 N/µm",
      "Repeatability": "±0.02 mm",
    },
    tags: ["Machine Design", "CNC", "DFM", "SolidWorks"],
    pdf: null,
  },
  {
    id: "turbine-blade",
    title: "Small Wind Turbine Blade: CFD Study",
    category: "Fluid Dynamics",
    year: "2024",
    role: "Solo project · Coursework",
    summary:
      "Aerodynamic analysis of a 1 m horizontal-axis turbine blade, comparing NACA profiles across wind speeds.",
    description: [
      "I modelled three candidate NACA airfoils for a small horizontal-axis wind turbine and ran 3D CFD simulations across the operating wind-speed range to compare power coefficient and thrust.",
      "The best-performing profile was refined with a twist distribution along the span. Results were validated against blade-element momentum theory, and the report includes mesh-independence and turbulence-model sensitivity checks.",
    ],
    cover: "assets/images/project-blade.svg",
    images: [
      "assets/images/project-blade.svg",
      "assets/images/detail-mesh.svg",
      "assets/images/detail-cad.svg",
      "assets/images/detail-photo.svg",
    ],
    specs: {
      "Rotor diameter": "1.0 m",
      Profiles: "NACA 4412 · 6412 · 2412",
      "Design TSR": "6",
      "Peak Cp": "0.41",
      Software: "ANSYS Fluent · MATLAB",
    },
    tags: ["CFD", "Aerodynamics", "ANSYS Fluent", "BEM"],
    pdf: "assets/documents/report-blade.pdf",
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
      "Conducted a brake-disc heat-transfer CFD study on the wheel assembly to derive thermal inputs for integration into a transient brake thermal model.",
    ],
  },
  {
    period: "2026 - Present",
    role: "Academic Project",
    org: "NTUA Parallel CFD & Optimization Unit",
    location: "Athens, Greece",
    bullets: [
      "CFD Validation, Turbulence Modelling & Optimisation",
    ],
  },
];

/* ------------------------------------------------- EDUCATION */
const EDUCATION = [
  {
    period: "2022 - Present",
    degree: "Diploma in Mechanical Engineering: Air & Ground Transportation Specialisation",
    school: "National Technical University of Athens (NTUA)",
    location: "Athens, Greece",
    note: "Entering 5th year",
    bullets: [
      "Selected coursework: Computational Fluid Dynamics, Aerodynamics, Optimisation Methods, Computational Methods for Transport Phenomena, Fluid Mechanics II, Vehicle Dynamics.",
    ],
  },
];
