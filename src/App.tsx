import Header from './components/Header';
import ProjectCard from './components/ProjectCard';
import ExperienceCard from './components/ExperienceCard';
import SkillsSection from './components/SkillsSection';
import { projects, experience } from './data/portfolioData';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="max-w-6xl mx-auto px-6 py-24 space-y-32">
        <section id="projects" className="space-y-12 scroll-mt-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-gray-900">Featured Projects</h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              A selection of projects that showcase my skills in building modern web applications.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </section>

        <section className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-gray-900">Work Experience</h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              My professional journey building products and solving problems.
            </p>
          </div>
          <div className="space-y-0 max-w-3xl">
            {experience.map((exp, index) => (
              <ExperienceCard key={exp.company} experience={exp} index={index} />
            ))}
          </div>
        </section>

        <SkillsSection />
      </main>

      <footer className="border-t border-gray-100 mt-32 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <p className="text-center text-gray-500">
            Designed and built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
