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
    "A passionate Backend Developer 🚀 with a solid background in Python, Node.js, Rust, and database systems like MySQL and MongoDB. I build fast, scalable, and secure server-side applications, and I’m constantly exploring new tools that push performance and maintainability."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1L6ZjuqfB16R90kdjpDAb-ntNQZt5pkpb/view?usp=sharing", // Set to empty to hide the button
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
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
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
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
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
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
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
      schoolName: "Google Developers Group (GDG)",
      logo: require("./assets/images/GDG-Google1.png"),
      subHeader: "Contributor / Participant",
      duration: "May 2025 - Present",
      desc: "Contributed to various open-source projects, focusing on backend development and API integration.",
      descBullets: ["Participated in hackathons and coding challenges, enhancing problem-solving skills",
        "Collaborated with a community of developers to build innovative solutions",
        "Contributed to open-source projects, gaining practical experience in software development"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "50%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Nodejs, React, Python, MySQL, Rust",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Lead Backend Engineer",
      project: "AudioAlly",
      companylogo: require("./assets/images/Audioally.jpg"),
      date: "June 2024 – Present",
      desc: "Engineered an intelligent backend system to enhance user experience and audio personalization for daily activities.",
      descBullets: [
        "Collaborated to build a scalable and efficient AI-Powered Playlist Recommendation Platform",
        "Implemented a caching mechanism for API responses, reducing average load time"
      ]
    },
    {
      role: "Backend Developer",
      project: "Bookstore-Catalog-App",
      companylogo: require("./assets/images/BookStore-App.png"),
      date: "February 2025 – May 2025",
      desc: "Developed a robust backend system for a bookstore catalog application, focusing on API development and database management.",
      descBullets: [
        "Designed and implemented RESTful APIs for book management, user authentication, and search functionality",
        "Optimized database queries to improve performance and reduce response times",
        "Ensured data integrity and security through proper validation and authentication mechanisms"
      ]
    },
    {
      role: "Backend Software Engineer",
      project: "OpenAI API assistant",
      projectlogo: require("./assets/images/OpenAIAssistantsAPI.png"),
      date: "June 2025 –  June 2025",
      desc: "Developed a backend system for the OpenAI API assistant, focusing on natural language processing and machine learning integration.",
      descBullets: [
        "Implemented a backend system to handle user queries and provide intelligent responses using OpenAI's API",
        "Integrated machine learning models to enhance the assistant's understanding of user intent",
        "Ensured scalability and reliability of the backend system to handle high traffic and concurrent requests"
      ]
    }
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
      image: require("./assets/images/FinTech.png"),
      projectName: "Fintech",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "AudioAlly",
      projectDesc: "AI-Powered Music Personalization Platform",
      footerLink: [
        {
          name: "Visit Website",
          url: "audio-ally.vercel.app"
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
      title: "AltSchool Africa",
      subtitle:
        "Full-year immersive program on backend system design and API development",
      image: require("./assets/images/Altschool.png"),
      imageAlt: "Alt-school",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.altschoolafrica.com/"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "ALX Africa",
      subtitle:
        "Mastered low-level programming, memory management, and Linux systems",
      image: require("./assets/images/alx3.png"),
      imageAlt: "ALX Logo",
      footerLink: [
        {
          name: "ALX Africa",
          url: "https://www.alxafrica.com/"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
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
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build With AI",
      subtitle: "A Google Developer Group Event, Mpape, Abuja",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
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
  display: true // Set false to hide this section, defaults to true
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
