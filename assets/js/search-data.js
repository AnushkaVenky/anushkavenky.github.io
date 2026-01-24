// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-cv",
          title: "CV",
          description: "Anushka Venkatesh&#39;s CV",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-research",
          title: "Research",
          description: "During my undergraduate years at IITM, I worked on multiple projects involving sub-continuum simulations with applications in materials science and fluid mechanics.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-hobbies",
          title: "Hobbies",
          description: "All the fun stuff about me.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/hobbies/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "hobbieslist-tennis",
          title: 'Tennis',
          description: "",
          section: "Hobbieslist",handler: () => {
              window.location.href = "/hobbieslist/hobby1/";
            },},{id: "hobbieslist-summiting-kuari-pass",
          title: 'Summiting Kuari Pass',
          description: "My first Himalayan Trek",
          section: "Hobbieslist",handler: () => {
              window.location.href = "/hobbieslist/hobby2/";
            },},{id: "hobbieslist-quiz-sets",
          title: 'Quiz Sets',
          description: "Questions I set for the IITM Quiz CLub Quizzes",
          section: "Hobbieslist",handler: () => {
              window.location.href = "/hobbieslist/hobby3/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-master-39-s-thesis-project",
          title: 'Master&amp;#39;s Thesis Project',
          description: "Identifying new reaction pathways for reactions under vibrationally excited conditions",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-smiles-to-liquid-properties",
          title: 'SMILES to Liquid Properties',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-hydrogel-project",
          title: 'Hydrogel Project',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/cv.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%65%32%31%62%30%32%36@%73%6D%61%69%6C.%69%69%74%6D.%61%63.%69%6E", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/AnushkaVenky", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/anushka-venkatesh-80ab84255", "_blank");
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
