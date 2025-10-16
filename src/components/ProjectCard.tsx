import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <div
      className="group relative bg-white rounded-2xl p-8 hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500 border border-gray-100 hover:border-gray-200 animate-fade-in-up"
      style={{ animationDelay: `${index * 100}ms`, opacity: 0 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="relative space-y-4">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
            {project.title}
          </h3>
          <div className="flex gap-2 flex-shrink-0">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition-all duration-200"
                aria-label="View project"
              >
                <ExternalLink size={20} />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition-all duration-200"
                aria-label="View source code"
              >
                <Github size={20} />
              </a>
            )}
          </div>
        </div>

        <p className="text-gray-600 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-full font-medium group-hover:bg-gray-200 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
