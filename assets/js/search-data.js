// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-builds",
          title: "Builds",
          description: "Mechanical engineering portfolio — 7 tested hardware, CAD, FEA, and robotics builds.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/builds/";
          },
        },{id: "nav-honors-amp-awards",
          title: "Honors &amp; Awards",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/awards/";
          },
        },{id: "nav-leadership",
          title: "Leadership",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/leadership/";
          },
        },{id: "nav-media",
          title: "Media",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/media/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-robotics",
          title: "Robotics",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/robotics/";
          },
        },{id: "awards-national-stem-festival-champion",
          title: 'National STEM Festival — Champion',
          description: "",
          section: "Awards",handler: () => {
              window.location.href = "/awards/2025-national-stem-festival/";
            },},{id: "builds-drone-belly-mount-for-hyperspectral-camera",
          title: 'Drone Belly Mount for Hyperspectral Camera',
          description: "Belly mount hanging a 1.5 kg MicroHSI 410 hyperspectral camera from a DJI Matrice-class drone — two print iterations, SolidWorks FEA at 20 N (1.59 MPa max stress, 0.015 mm displacement), bench-fitted on drone.",
          section: "Builds",handler: () => {
              window.location.href = "/builds/drone-hsi-mount/";
            },},{id: "builds-pit-cooling-rig-box-bot",
          title: 'Pit Cooling Rig + Box Bot',
          description: "Pit-side reliability hardware: a 4-fan high-static-pressure cooling rig with custom fan-control PCB plus a modular 3D-printed powered cart that hauls the 30+ lb competition robot.",
          section: "Builds",handler: () => {
              window.location.href = "/builds/pit-rig-box-bot/";
            },},{id: "builds-reclaiming-7th-street-reconfigurable-housing-prototype",
          title: 'Reclaiming 7th Street: Reconfigurable Housing Prototype',
          description: "Modular West Oakland housing development drafted in AutoCAD, modeled in Fusion 360, and 3D-printed in PLA on a Bambu Lab X1E as an interlocking scale model — won Autodesk&#39;s Grand Prize for Best Physical Prototype.",
          section: "Builds",handler: () => {
              window.location.href = "/builds/reclaiming-7th-street/";
            },},{id: "builds-soft-supernumerary-robotic-limb",
          title: 'Soft Supernumerary Robotic Limb',
          description: "Wearable 9-segment Ecoflex 00-30 silicone continuum arm with 12-stepper tendon drive and Discrete Cosserat Rod control — $247 BOM, 16.1 lb system, 2.2 cm avg point error across 8 trials, 92.4 lb max tested payload.",
          section: "Builds",handler: () => {
              window.location.href = "/builds/soft-robotic-limb/";
            },},{id: "builds-instrumented-handle-for-stroke-rehab",
          title: 'Instrumented Handle for Stroke Rehab',
          description: "Utensil-sized rehab handle sensing 0–100 N grip force, tremor, and orientation — three PCB spins from a bulky 2-layer board to a slim edge-mount board with strain relief and test pads.",
          section: "Builds",handler: () => {
              window.location.href = "/builds/stroke-rehab-handle/";
            },},{id: "builds-wireless-tavns-biostimulant-earbud",
          title: 'Wireless taVNS Biostimulant Earbud',
          description: "Wireless earbud pairing BLE audio with biphasic taVNS stimulation for motion sickness — KiCad PCB, Phrozen 16K resin housing, machined aluminum electrodes (0.9 Ω vs 165.0 kΩ graphite-silicone, n=6), under $200 BOM.",
          section: "Builds",handler: () => {
              window.location.href = "/builds/tavns-earbud/";
            },},{id: "builds-vex-drivetrain-testing-bézier-autonomy",
          title: 'VEX Drivetrain Testing + Bézier Autonomy',
          description: "Built three identical drivable testbeds (tank vs X-drive vs 6-motor mecanum) to compare sprint speed and current-logged push force, picked mecanum, then drove it with a C++ odometry + Bézier planner.",
          section: "Builds",handler: () => {
              window.location.href = "/builds/vex-drivetrain-autonomy/";
            },},{id: "competitions-vex-robotics-state-qualifier-amp-awards",
          title: 'VEX Robotics — State Qualifier &amp;amp; Awards',
          description: "",
          section: "Competitions",handler: () => {
              window.location.href = "/competitions/2025-vex-states/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%73%68%72%69%79%61.%6E%65%64@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/shriya-nedumaran", "_blank");
        },
      },{
        id: 'social-work',
        title: 'Work',
        section: 'Socials',
        handler: () => {
          window.open("https://www.shriyanedumaran.com/builds/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
