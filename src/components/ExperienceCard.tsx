import { Briefcase } from 'lucide-react';
import { Experience } from '../types/portfolio';

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

export default function ExperienceCard({ experience, index }: ExperienceCardProps) {
  return (
    <div
      className="group relative border-l-2 border-gray-200 pl-8 pb-12 last:pb-0 hover:border-gray-400 transition-all duration-300 animate-fade-in-up"
      style={{ animationDelay: `${index * 150}ms`, opacity: 0 }}
    >
      <div className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <Briefcase size={12} className="text-white" />
      </div>

      <div className="space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
          <h3 className="text-xl font-bold text-gray-900">{experience.title}</h3>
          <span className="text-sm text-gray-500 font-medium whitespace-nowrap">{experience.period}</span>
        </div>
        <p className="text-gray-700 font-semibold text-lg">{experience.company}</p>
        <p className="text-gray-600 leading-relaxed">
          {experience.description}
        </p>
      </div>
    </div>
  );
}
