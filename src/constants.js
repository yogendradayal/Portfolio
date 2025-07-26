// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import innobyte from './assets/company_logo/innobyte.png';
import techies from './assets/company_logo/techiesgateway.png';

// Education Section Logo's
import glaLogo from './assets/education_logo/akg.jpg';
import vpsLogo from './assets/education_logo/vps.jpg';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/OIP.jpg';
import csprepLogo from './assets/work_logo/OI.jpg';
import movierecLogo from './assets/work_logo/cyber.jpg';
import npmLogo from './assets/work_logo/Cms.jpg';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
  {
    id: 0,
    img: innobyte,
    role: "Fullstack Developer - Intern",
    company: "Innobyte Services",
    date: "Jan 2025 – Apr 2025",
    desc: "Built a full-stack analytics dashboard using ReactJS, Node.js, and MySQL. Architected RESTful APIs using Node.js and Express.js. Integrated Nodemailer-based authentication alerts, reducing unauthorized login attempts by 20%. Engineered 3+ RESTful APIs, performing CRUD operations on MongoDB, ensuring scalability.",
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "MySQL",
      "Nodemailer",
    ],
  },
  {
    id: 1,
    img: techies,
    role: "Frontend Developer - Intern",
    company: "TechiesGateway IT Solutions",
    date: "June 2024 – Sep 2024",
    desc: "Optimized front-end performance by using lazy loading, code-splitting, and asset optimization. Styled UI components using TailwindCSS and DaisyUI, improving user experience by 30%. Revamped UI/UX workflows using React.js and Material UI, boosting customer satisfaction scores by 20%. Reduced initial page load time by 20%, thus increasing customer engagement.",
    skills: [
      "React.js",
      "TailwindCSS",
      "DaisyUI",
      "Material UI",
      "JavaScript",
    ],
  },
];

  export const education = [
    {
      id: 0,
      img: glaLogo,
      school: "Ajay Kumar Garg Engineering College, Ghaziabad",
      date: "Sept 2022 - July 2026",
      grade: "8.1 CGPA",
      desc: "I am currently pursuing my B.Tech in Computer Science and Engineering from Ajay Kumar Garg Engineering College (AKGEC), Ghaziabad. During my time at AKGEC, I have gained a strong foundation in core computer science subjects such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I’ve also actively participated in workshops, coding contests, and technical events, which have helped sharpen my problem-solving skills and practical knowledge. ",
      degree: "B-Tech in Computer Science and Engineering",
    },
    
    {
      id: 2,
      img: vpsLogo,
      school: "Vrindavan Public School, Mathura",
      date: "Apr 2020 - March 2021",
      grade: "91.8%",
      desc: "I completed my class 12 education from Vrindavan Public School, Mathura, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "CBSE(XII) - PCM with Computer Science",
    },
    {
      id: 3,
      img: vpsLogo,
      school: "Vrindavan Public School, Mathura",
      date: "Apr 2018 - March 2019",
      grade: "95.8%",
      desc: "I completed my class 10 education from Vrindavan Public School, under the CBSE board, where I studied Science with Computer.",
      degree: "CBSE(X), Science with Computer Application",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "GitHarbor",
      description:
        " Full-stack web application inspired by GitHub, built to simulate core version control functionalities.",
      image: githubdetLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "Passport.js"],
      github: "https://github.com/yogendradayal/gitNest",
      webapp: "https://github-mern-app-6eey.onrender.com/login",
    },
    {
      id: 1,
      title: "PingNet",
      description:
        "A full-stack real-time chat application built with React, Node.js, and Socket.IO. It supports secure user authentication, private/group chats, and real-time messaging.",
      image: csprepLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "socket.io"],
      github: "https://github.com/yogendradayal/WebApp",
      webapp: "https://webchat-app-k8yk.onrender.com/login",
    },
    {
      id: 2,
      title: "Cyber Secure Login System",
      description:
        "A PHP-based secure authentication system with email OTP verification, brute-force protection, and cyber-themed UI. Built using HTML, CSS, PHP, MySQL, and PHPMailer for real-world cybersecurity simulation.",
      image: movierecLogo,
      tags: ["React JS", "HTML", "CSS", "PHP" , "MySQL", "PHPMailer"],
      github: "https://github.com/yogendradayal/cyberSecureLoginSystem",
      webapp: "https://github.com/yogendradayal/cyberSecureLoginSystem",
    },
    {
      id: 3,
      title: "Content Management System",
      description:
        "A responsive Content Management System (CMS) built with HTML5, CSS3, JavaScript/jQuery, Bootstrap (frontend), and PHP/MySQL (backend). ",
      image: npmLogo,
      tags: ["HTML", "CSS", "JavaScript", "Bootsrap" , "PHP", "MySQL"],
      github: "https://github.com/yogendradayal/contentManagementSystem",
      webapp: "https://github.com/yogendradayal/contentManagementSystem",
    }];