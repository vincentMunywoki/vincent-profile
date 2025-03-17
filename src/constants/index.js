import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  python,
  git,
  carrent,
  jobit,
  tripguide,
  meta,
  starbucks,
  tesla,
  shopify,
  django,
  SQL,
  tensorflow,
  next,
  Pytorch,
  University,
  udemy,
  doctor,
  quiz,
  blog,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Database Management and DevOps",
    icon: mobile,
  },
  {
    title: "Backend and API  Developer",
    icon: backend,
  },
  {
    title: "Internet of Things Associate ",
    icon: creator,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "CSS 3",
    icon: css,
  },

  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "django",
    icon: django,
  },
  {
    name: "next-gen",
    icon: next,
  },
  {
    name: "pytorch",
    icon: Pytorch,
  },
  {
    name: "SQL",
    icon: SQL,
  },
  {
    name: "tesorflow",
    icon: tensorflow,
  },

  {
    name: "Python",
    icon: python,
  },
];

const experiences = [
  {
    title: "Frontend Developer with React",
    company_name: "Personal Projects",
    icon: shopify,
    iconBg: "#383E56",
    date: "April 2023 - To present",
    points: [
      "Built dynamic and scalable frontend applications using React JS, focusing on reusability and performance.",
      "Utilized React's component-based architecture to create modular and maintainable user interfaces.",
      "Improved user experience by optimizing page load times and enhancing interactivity.",
      "Integrated frontend components with RESTful APIs and third-party services.",
      "Ensured cross-browser compatibility and responsiveness for a seamless user experience across devices.",
    ],
  },
  {
    title: "Product Designer",
    company_name: "Havalaa Technologies",
    icon: starbucks,
    iconBg: "#383E56",
    date: "June 2024 - Aug 2024",
    points: [
      "Led the design of intuitive UIs, collaborating in a team of 4 developers to ensure seamless  integration, resulting in a 20% reduction in user onboarding time.",
      "Created high-fidelity wireframes and prototypes using Figma contributing to a 15% increase in user retention rates through improved usability.",
      "Conducted user research, gathering insights that guided design decisions and led to a 25% improvement in task completion rates across key user flows.",
    ],
  },
  {
    title: "ICT Support Associate",
    company_name: "JKUAT",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "May 2023 - Aug 2023",
    points: [
      "Configured, monitored, and troubleshoot network systems at JKUAT, reducing network downtime by 30% and enhancing overall IT infrastructure reliability.",
      "Hosted 10+ hands-on training sessions for IT staff, improving team responsiveness to network issues by 25% through enhanced technical skills.",
      "Worked closely with other Network engineers to ensure maxmum uptime, maintainable infrustucture with unit and integration tests.",
    ],
  },
  {
    title: "Electoral Clerk 1",
    company_name: "IEBC",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jul 2022 - Aug 2022",
    points: [
      "Managed Kenya Integrated Election Management System (KIEMS).",
      "Ensured identification and verification of voters information using biometric systems.",
      "Assisted in setting up polling stations and ensuring all required materials are available.",
      "Guided voters through the voting process while upholding secrecy and impartiality.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "At University of Embu, I excelled academically and developed a strong passion for full-stack software development, which fueled my career aspirations.",
    name: "University of Embu",
    designation: "[2020 - 2024]",
    company:
      "Student with Academic Excellence and Passion for Full-Stack Development",
    image: University,
  },
  {
    testimonial:
      "My time at University of Embu helped me focus on leadership and academic growth, preparing me to contribute effectively in various activities.",
    name: "University of Embu",
    designation: "[2022-2024]",
    company: "Leadership and Academic Excellence",
    image: University,
  },
  {
    testimonial:
      "Currently upskilling in a RESTful APIs course to enhance backend development and integration skills, fueling my passion for technology.",
    name: "Udemy Business",
    designation: "[2024-2025]",
    company: "Professional studies",
    image: udemy,
  },
];

const projects = [
  {
    name: "Doctors",
    description:
      "A platform for doctors to manage appointments, patient data, and more.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: doctor, // Using the imported doctor image
    source_code_link:
      "https://github.com/vincentMunywoki/Doctor-appointment-booking-system",
    live_site_link: "https://healthcare-project-sepia.vercel.app/",
  },
  {
    name: "E-Learning site",
    description:
      "An interactive e-learning platform for engaging online education.",
    tags: [
      {
        name: "scss",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: blog, // Using the imported blog image
    source_code_link: "https://github.com/vincentMunywoki/elearning-web",
    live_site_link: "https://vincentmunywoki.github.io/elearning-web/",
  },
  {
    name: "Quiz App",
    description:
      "A dynamic quiz platform designed for interactive learning and assessment.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "html/css",
        color: "pink-text-gradient",
      },
    ],
    image: quiz, // Using the imported quiz image
    source_code_link: "https://github.com/vincentMunywoki/my-quiz-app",
    live_site_link: "https://vincentmunywoki.github.io/my-quiz-app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
