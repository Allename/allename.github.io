import { Project, Experience, Skill } from '../types/portfolio';

export const personalInfo = {
  name: 'Allename Anthony',
  title: 'Frontend Engineer',
  location: 'San Francisco, CA',
  email: 'allename.dev@gmail.com',
  github: 'https://github.com/Allename',
  linkedin: 'https://linkedin.com/in/allename',
  bio: 'Passionate frontend engineer with 3+ years of experience building scalable web applications. I love creating intuitive user experiences and writing clean, maintainable code.',
};

export const projects: Project[] = [
  {
    title: "Cirlo",
    description:
      "Built a full-featured e-commerce platform with React, TypeScript, and Stripe integration. Implemented real-time inventory management and responsive design.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Stripe"],
    link: "https://cirlo.io",
    github: "https://github.com/alexmorgan/ecommerce",
  },
  {
    title: "Linkcreator",
    description:
      "Developed a collaborative task management tool with drag-and-drop functionality, real-time updates, and team collaboration features.",
    tags: ["React", "Supabase", "Vite", "DnD Kit"],
    link: "https://app.linkcreator.ai",
    github: "https://app.linkcreator.ai",
  },
  {
    title: "Folawej Laundromat",
    description:
      "Created an interactive weather dashboard with geolocation, hourly forecasts, and beautiful data visualizations using Chart.js.",
    tags: ["React", "Chart.js", "REST APIs", "CSS3"],
    link: 'https://folawej.com',
    github: "https://folawej.com",
  },
  {
    title: "SATA | Security Agency Training Academy",
    description:
      "Designed and built a customizable portfolio template for developers. Features dark mode, smooth animations, and SEO optimization.",
    tags: ["React", "TypeScript", "Framer Motion", "Next.js"],
    link: "https://sata.com.ng",
    github: "https://github.com/alexmorgan/portfolio",
  },
  {
    title: "Request Mechanic",
    description:
      "Designed and built a customizable portfolio template for developers. Features dark mode, smooth animations, and SEO optimization.",
    tags: ["React", "TypeScript", "Framer Motion", "Next.js"],
    link: "https://requestmechanic.com",
    github: "https://github.com/alexmorgan/portfolio",
  },
];

export const experience: Experience[] = [
  {
    title: 'Frontend Engineer',
    company: 'Billboxx Technologies',
    period: 'Sept, 2023 - Present',
    description: 'Leading frontend development for customer-facing applications. Improved performance by 40% through code optimization and modern build tools.',
  },
  {
    title: 'Frontend Engineer',
    company: 'Request Mechanic',
    period: 'Jun 2024 - Feb 2025',
    description: 'Developed responsive web applications using React and TypeScript. Collaborated with designers to implement pixel-perfect UI components.',
  },
  {
    title: 'Frontend Engineer',
    company: 'Bluelight Studios',
    period: 'Sept 2021 - Aug 2023',
    description: 'Developed responsive web applications using React and TypeScript. Collaborated with designers to implement pixel-perfect UI components.',
  },
  // {
  //   title: 'Frontend Engineer',
  //   company: 'Linkcreator',
  //   period: 'Feb 2025 - May 2025',
  //   description: 'Developed responsive web applications using React and TypeScript. Collaborated with designers to implement pixel-perfect UI components.',
  // },
];

export const skills: Skill[] = [
  {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'Vite'],
  },
  {
    category: 'Tools & Others',
    items: ['Git', 'REST APIs', 'Responsive Design', 'Performance Optimization', 'Supabase'],
  },
];
