import { Project, Experience, Skill } from '../types/portfolio';

export const personalInfo = {
  name: 'Alex Morgan',
  title: 'Frontend Engineer',
  location: 'San Francisco, CA',
  email: 'alex.morgan@example.com',
  github: 'https://github.com/alexmorgan',
  linkedin: 'https://linkedin.com/in/alexmorgan',
  bio: 'Passionate frontend engineer with 3+ years of experience building scalable web applications. I love creating intuitive user experiences and writing clean, maintainable code.',
};

export const projects: Project[] = [
  {
    title: 'E-Commerce Platform',
    description: 'Built a full-featured e-commerce platform with React, TypeScript, and Stripe integration. Implemented real-time inventory management and responsive design.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Stripe'],
    link: 'https://example.com',
    github: 'https://github.com/alexmorgan/ecommerce',
  },
  {
    title: 'Task Management App',
    description: 'Developed a collaborative task management tool with drag-and-drop functionality, real-time updates, and team collaboration features.',
    tags: ['React', 'Supabase', 'Vite', 'DnD Kit'],
    link: 'https://example.com',
    github: 'https://github.com/alexmorgan/taskmanager',
  },
  {
    title: 'Weather Dashboard',
    description: 'Created an interactive weather dashboard with geolocation, hourly forecasts, and beautiful data visualizations using Chart.js.',
    tags: ['React', 'Chart.js', 'REST APIs', 'CSS3'],
    github: 'https://github.com/alexmorgan/weather',
  },
  {
    title: 'Portfolio Template',
    description: 'Designed and built a customizable portfolio template for developers. Features dark mode, smooth animations, and SEO optimization.',
    tags: ['React', 'TypeScript', 'Framer Motion', 'Next.js'],
    link: 'https://example.com',
    github: 'https://github.com/alexmorgan/portfolio',
  },
];

export const experience: Experience[] = [
  {
    title: 'Frontend Engineer',
    company: 'TechCorp Inc.',
    period: '2022 - Present',
    description: 'Leading frontend development for customer-facing applications. Improved performance by 40% through code optimization and modern build tools.',
  },
  {
    title: 'Junior Frontend Developer',
    company: 'StartupXYZ',
    period: '2021 - 2022',
    description: 'Developed responsive web applications using React and TypeScript. Collaborated with designers to implement pixel-perfect UI components.',
  },
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
