/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "CodeWithEze",
  title: "Hi all, I'm Eze",
  subTitle: emoji(
    `Hey, I'm Chinemerem Ezenagu, a Backend Engineer passionate about building secure, scalable, and AI-powered backend systems.
With experience across fintech, e-commerce, and AI platforms, I’ve architected APIs and data systems handling millions of operations while ensuring speed, reliability, and clean design.
Skilled in Go, Rust, Node.js, and Python, I focus on API architecture, database optimization, and AI integration to create intelligent, high-performance backend solutions.
Beyond coding, I’m a technical writer and mentor, committed to simplifying complex concepts and helping teams build with clarity and precision.
Currently, I’m focused on AI-driven automation, system scalability, and mentorship within the developer community.`
  ),
  resumeLink:
    "https://drive.google.com/file/d/1qZqX8IYFOcpsB68k7k2BG5RckbWPHRmX/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Pascal509",
  linkedin: "https://www.linkedin.com/in/ezenagu-chinemerem/",
  gmail: "chinemeremezenagu@gmail.com",
  medium: "https://medium.com/@CodeWithEzeh",
  stackoverflow: "https://stackoverflow.com/users/23903260/ezenagu-chinemerem",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY BACKEND DEVELOPER WHO WANTS TO EXPLORE APIs DESIGN, DATABASE OPTIMIZATION, SYSTEM Auth, DevOps etc",
  skills: [
    emoji(
      "⚡ Create scalable, well-structured APIs for seamless frontend-backend communication"
    ),
    emoji("⚡ Use JWT, OAuth2, and RBAC to protect sensitive endpoints and manage user access"),
    emoji(
      "⚡ Work with MySQL, PostgreSQL, and MongoDB to ensure fast, reliable data storage and retrieva"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "rust",
      fontAwesomeClassname: "fas fa-cubes",
      svg: require("./assets/fonts/rust-svgrepo-com.svg")
    },
    {
      skillName: "go",
      fontAwesomeClassname: "fab fa-golang",
      svg: require("./assets/fonts/Go-Logo_Aqua.svg")
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "mongodb",
      fontAwesomeClassname: "fab fa-mongodb",
      svg: require("./assets/fonts/MongoDB_Logo.svg")
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "authentication",
      fontAwesomeClassname: "fas fa-user-shield"
    },
    {
      skillName: "encryption",
      fontAwesomeClassname: "fas fa-user-lock"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "ALX Academy",
      logo: require("./assets/images/alx3.png"),
      subHeader: "Diploma in Software Engineering",
      duration: "August 2023 -  October 2024",
      desc: "Developed a strong foundation in software engineering principles, focusing on backend development, system design, and database management.",
      descBullets: [
        "Gained hands-on experience in building scalable applications using Python and Node.js",
        "Learned best practices in API design, security, and performance optimization",
        "Engaged in collaborative projects, enhancing teamwork and problem-solving skills"
      ]
    },
    {
      schoolName: "Alt School Africa",
      logo: require("./assets/images/Altschool.png"),
      subHeader: "Associate's degree in software development",
      duration: "January 2022 - December 2022",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Developed a deep understanding of backend system design and API development",
        "Gained expertise in Python, Node.js, and database management",
        "Worked on real-world projects, enhancing practical skills in software development"]
    },
    {
      schoolName: "Boot.dev",
      logo: require("./assets/images/bootdev-logo-full-small.webp"),
      subHeader: "Certificate Of Achievement",
      duration: "May 2025 - Present",
      desc: "Ongoing Course Certification from Boot.dev for Backend Development",
      descBullets: ["Gaining hands-on experience building scalable backend systems using Go, Python, and SQL.",
        "Designing and deploying RESTful APIs with strong focus on data modeling, authentication, and performance optimization.",
        "Applying real-world backend principles through projects emphasizing microservices, containerization, and clean architecture."]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "50%" //Insert relative proficiency in percentage
    },
    {
      Stack: "JavaScript, Go, Rust, mySQL, Python, Typescript, LangChain, Data structures and Algorithms ",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "ScaleWorkFlow",
      project: "Lead Backend Engineer",
      companylogo: require("./assets/images/scaleworkflow_logo.png"),
      companyUrl: "http://www.scaleworkflow.com/",
      date: "August 2025 – Present",
      desc: `ScaleWorkflow is a workflow automation and business optimization platform designed to help enterprises streamline 
            operations through intelligent process management. The platform provides custom software solutions, automation tools, 
            and system integrations that enhance team collaboration, efficiency, and productivity.`,
      descBullets: [
        "Contributed as a Lead Backend Engineer, where I architected and deployed a secure Node.js + Express REST API with MongoDB, improved performance by 30%",
        "Implemented JWT-based authentication, robust file upload services, and automated testing pipelines."
      ],
    },
    {
      role: "AudioAlly",
      project: "Backend Developer",
      companylogo: require("./assets/images/Audioally.jpg"),
      companyUrl: "https://audio-ally.vercel.app/",
      date: "April 2024 – July 2024",
      desc: "Engineered a robust backend system for an audio content platform, focusing on API development and database management.",
      descBullets: [
        "Designed and implemented RESTful APIs for audio content management, user authentication, and search functionality",
        "Optimized database queries to improve performance and reduce response times",
        "Ensured data integrity and security through proper validation and authentication mechanisms"
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "PERSONAL AND OPEN SOURCE PROJECTS",
  projects: [
    {
      image: require("./assets/images/multi-agent-assistant.png"),
      projectName: "Multi-Agent Assistant",
      projectDesc: "A Groceries Shopping Multi-Agent Assistant Application",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://multi-agent-groceries-shopping-assistant.streamlit.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/Audioally.jpg"),
      projectName: "AudioAlly",
      projectDesc: "An AI-Powered Audio Content Management Platform",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://audio-ally.vercel.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/AI-recruiter.jpg"),
      projectName: "AI-Freddie recruiter",
      projectDesc: "An AI-Powered Recruitment Assistant",
      footerLink: [
        {
          name: "See Video",
          url: "https://drive.google.com/file/d/196xOSvZF1LDOmQQoT4c_AMrlKqm8wuvN/view?usp=sharing"
        }
      ]
    },
    {
      image: require("./assets/images/Asteroids-game.png"),
      projectName: "Asteroid Game",
      projectDesc: "A 2D Space Shooter Game Built with Python and Pygame",
      footerLink: [
        {
          name: "See Video",
          url: "https://drive.google.com/file/d/1WRW2vwcSymzldYbhZ4e5q5_bHCnZ0fK6/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Alx_Africa",
      subtitle:
        "Full-year immersive program on backend system design, API development, and AI integration",
      image: require("./assets/images/alx3.png"),
      imageAlt: "Alx Africa Logo",
      footerLink: [
        {
          name: "Certificate Of Achievement",
          url: "https://drive.google.com/file/d/11oaioFJeaxl3aPM3XFxevDOS4pyMADm7/view?usp=sharing"
        },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: ""
        // }
      ]
    },
    {
      title: "Alt_School Africa",
      subtitle:
        "Mastered linux systems and software development in a rigorous program",
      image: require("./assets/images/Altschool.png"),
      imageAlt: "Alt School Africa Logo",
      footerLink: [
        // {name: "Certification", url: "https://drive.google.com/file/d/1V6it3nOu9TaPgtz4rLy2gcmqvkX9Zqtq/view?usp=sharing"},
        {
          name: "Alt_School Africa",
          url: "https://www.altschoolafrica.com/"
        }
      ]
    },
    {
      title: "Google Developers Group (GDG)",
      subtitle: "Contributed to various open-source projects, focusing on backend development and API integration.",
      image: require("./assets/images/GDG-Google.png"),
      imageAlt: "GDG Logo",
      footerLink: [
        {
          name: "Membership Card",
          url: "https://drive.google.com/file/d/18YN-vl1KQdgcWBkUiBx0kjsWIGTC9ZH7/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE"
  ),

  talks: [
    {
      title: "Build With AI",
      subtitle: "A Google Developer Group Event, Mpape, Abuja",
      slides_url: "https://docs.google.com/presentation/d/e/2PACX-1vRZvO_pplU0iXPwCKcSsy6mLyHY1sk7PeuSfW7V3g3Xs4FimfvrzBZj_MRsikocaVvV_9WFf7LYv1F4/pub?start=false&loop=false&delayms=3000&slide=id.g3246bfcce04_0_0",
      event_url: "https://gdg.community.dev/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+2349028854415",
  email_address: "chinemeremezenagu@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
