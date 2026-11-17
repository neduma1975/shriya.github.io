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
  },{id: "nav-projects",
          title: "Projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
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
          window.open("https://shriya-nedumaran.vercel.app/v2", "_blank");
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
