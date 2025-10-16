import { Github, Linkedin, Mail, MapPin, ArrowDown } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Header() {

  const handleNavigation = (id: string) => {
    // setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      <div className="relative max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="space-y-8 animate-fade-in-up">
          <div className="space-y-4">
            <div className="inline-block">
              <div className="flex items-center justify-center gap-2 text-sm text-gray-600 mb-6">
                <MapPin size={16} className="text-gray-400" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-gray-900 tracking-tight text-balance leading-[0.95]">
              {personalInfo.name}
            </h1>

            <p className="text-2xl sm:text-3xl text-gray-600 font-light tracking-wide">
              {personalInfo.title}
            </p>
          </div>

          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto text-balance">
            {personalInfo.bio}
          </p>

          <div className="flex gap-6 justify-center pt-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="group flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-all duration-200"
              aria-label="Email"
            >
              <div className="p-2 rounded-full bg-gray-100 group-hover:bg-gray-900 transition-colors">
                <Mail
                  size={18}
                  className="group-hover:text-white transition-colors"
                />
              </div>
              <span className="text-sm font-medium">Email</span>
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-all duration-200"
              aria-label="GitHub"
            >
              <div className="p-2 rounded-full bg-gray-100 group-hover:bg-gray-900 transition-colors">
                <Github
                  size={18}
                  className="group-hover:text-white transition-colors"
                />
              </div>
              <span className="text-sm font-medium">GitHub</span>
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <div className="p-2 rounded-full bg-gray-100 group-hover:bg-gray-900 transition-colors">
                <Linkedin
                  size={18}
                  className="group-hover:text-white transition-colors"
                />
              </div>
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
          </div>
        </div>

        <div
          className="absolute bottom-[-3rem] left-1/2 -translate-x-1/2 animate-bounce rounded-full border p-3 cursor-pointer"
          aria-label="Scroll to projects"
          onClick={() => handleNavigation('projects')}
        >
          <ArrowDown size={24} className="text-gray-400" />
        </div>

        {/* <a
          href="#projects"
          className="absolute bottom-[-3rem] left-1/2 -translate-x-1/2 animate-bounce rounded-full border p-3"
          aria-label="Scroll to projects"
        >
          <ArrowDown size={24} className="text-gray-400" />
        </a> */}
      </div>
    </header>
  );
}
