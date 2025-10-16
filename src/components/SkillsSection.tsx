import { skills } from '../data/portfolioData';

export default function SkillsSection() {
  return (
    <section className="space-y-8">
      <h2 className="text-4xl font-bold text-gray-900">Skills & Technologies</h2>
      <div className="grid sm:grid-cols-2 gap-8">
        {skills.map((skillGroup, groupIndex) => (
          <div
            key={skillGroup.category}
            className="space-y-4 animate-fade-in-up"
            style={{ animationDelay: `${groupIndex * 100}ms`, opacity: 0 }}
          >
            <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wide">
              {skillGroup.category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {skillGroup.items.map((skill, skillIndex) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-gradient-to-br from-gray-100 to-gray-50 text-gray-800 text-sm rounded-xl font-medium border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-200 animate-fade-in"
                  style={{ animationDelay: `${(groupIndex * 100) + (skillIndex * 50)}ms`, opacity: 0 }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
