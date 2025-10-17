import { Project, Experience, Skill } from '../types/portfolio';

export const personalInfo = {
  name: "Allename Anthony",
  title: "Frontend Engineer",
  location: "Remote · Open to Opportunities",
  email: "allename.dev@gmail.com",
  github: "https://github.com/Allename",
  linkedin: "https://linkedin.com/in/allename",
  resume: "https://docs.google.com/document/d/1hUlISEbFC3RB69sC49n2TXnyBym4SuXofaQ8e0RQkKE/view?tab=t.0#heading=h.orbv5bf2mrdt",
  bio: "Passionate frontend engineer with 3+ years of experience building scalable web applications. I love creating intuitive user experiences and writing clean, maintainable code.",
};

export const projects: Project[] = [
  {
    title: "Billboxx Technologies",
    description: "Handles all invoice-related tasks, including issue, payment, and reconciliation, for businesses of all sizes",
    tags: ["React.js", "Styled Components", "Tailwind CSS", "Redux", "Next.js"],
    link: "https://billboxx.com",
  },
  {
    title: "RoomPadi",
    description:
      "Roommate matching platform for students and young professionals",
    tags: ["Vue.js", "Tailwind CSS", "PrimeVue", "Pinia"],
    link: "https://roompadi.com",
  },
  {
    title: "Cirlo",
    description:
      "Community event management platform with drag-and-drop builder, attendee management, and powerful insights",
    tags: [
      "React",
      "TypeScript",
      "Styled Components",
      "Next.js",
      "Redux",
      "React Query",
    ],
    link: "https://cirlo.io",
  },
  {
    title: "Linkcreator",
    description:
      "An AI advanced software that automatically assists website owners and users to promote their articles and site content.",
    tags: ["React", "Next.js", "Context API", "React Query"],
    link: "https://app.linkcreator.ai",
  },
  {
    title: "Folawej Laundromat",
    description:
      "World-class laundry experience with self-service facilities, coin-operated machines, and mobile app integration",
    tags: ["React", "Ionic"],
    link: "https://folawej.com",
  },
  {
    title: "SATA | Security Agency Training Academy",
    description:
      "An application that helps educate security agencies and tests their knowledge of security protocols.",
    tags: [
      "React",
      "TypeScript",
      "Styled Components",
      "Next.js",
      "Jotai",
      "React Query",
    ],
    link: "https://sata.com.ng",
  },
  {
    title: "Request Mechanic",
    description:
      "A platform that connects automobile users to the nearest automobile experts.",
    tags: ["React", "JavaScript", "Tailwind CSS", "Redux"],
    link: "https://requestmechanic.com",
  },
  {
    title: "Bluelight Studios",
    description:  "Solving user problems through the use of software and technologies",
    tags: ["React", "JavaScript", "Tailwind CSS"],
    link: "https://www.bluelight.studio/",
  },
];

export const experience: Experience[] = [
  {
    title: 'Frontend Engineer',
    company: 'Billboxx Technologies',
    period: 'Sept, 2023 - Present',
    description: 'Redesigned responsive user interfaces and email templates, rebuilt the admin dashboard in TypeScript to boost performance by 45%, and streamlined API data management using React Query',
  },
  {
    title: 'Frontend Engineer',
    company: 'Request Mechanic',
    period: 'Jun 2024 - Feb 2025',
    description: 'Migrated legacy code to modern React functional components for a 40% boost in maintainability, developed features that attracted 200+ new users, and resolved 15+ critical issues through root cause analysis and backend collaboration to enhance user satisfaction.',
  },
  {
    title: 'Frontend Engineer',
    company: 'Bluelight Studios',
    period: 'Sept 2021 - Aug 2023',
    description: 'Developed responsive web applications using React, Next.js, and TypeScript. Collaborated with designers to implement pixel-perfect UI components.',
  },
];

export const skills: Skill[] = [
  {
    category: "Skills",
    items: [
      "React",
      "TypeScript",
      "JavaScript",
      "Next.js",
      "Vue.js",
      "HTML & CSS",
      "Tailwind CSS",
      "Styled Components",
    ],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Vercel"],
  },
];
