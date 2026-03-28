import { ExternalLink, Github } from "lucide-react";
import pythonImg from "/projects/python.png";
import javaImg from "/projects/java.png";
import flaskImg from "/projects/flask.png";
import angularImg from "/projects/angular.png";

const PROJECTS = [
  {
    title: "AI Banking Assistant (Python)",
    description:
      "AI-powered banking assistant built with Python and Flask, enabling users to interact with account data and perform actions through natural language queries.",
    tech: ["Python", "Flask", "JavaScript", "REST API", "GenAI"],
    github: "https://github.com/skibins/MyBankAIAssistant",
    image: pythonImg,
  },
  {
    title: "AI Banking Assistant 2.0 (Java)",
    description:
      "Re-engineered version of the AI banking assistant built with Java and Spring, focusing on improved architecture and backend scalability.",
    tech: ["Java", "Spring", "JavaScript", "REST API", "GenAI"],
    github: "https://github.com/skibins/BankAIAssistant2.0",
    image: javaImg,
  },
  {
    title: "AI Code Evaluation Platform (WIP)",
    description:
      "(Work-In-Progress) Platform for automatic validation of code, including code correctness, output verification, edge case handling, optimization checks and AI-assisted evaluation via API integration.",
    tech: ["Python", "Flask / Django", "REST API", "AI", "Automation"],
    github: null,
    image: flaskImg,
  },
  {
    title: "Book Rental Web App",
    description:
      "Fullstack web application for managing book rentals with REST API integration, built in Angular with focus on UI and client-server communication.",
    tech: ["Angular", "TypeScript", "REST API", "HTML/CSS"],
    github: "https://github.com/skibins/angular-book-rental",
    image: angularImg,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-container">
      <div className="mb-12 fade-up">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          A selection of projects I've built and contributed to.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {PROJECTS.map((project, i) => (
          <div
            key={project.title}
            className="glass-card overflow-hidden flex flex-col fade-up group"
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                loading="lazy"
                width={800}
                height={512}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-foreground">
                  {project.title}
                </h3>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors p-1"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <Github size={18} />
                </a>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 text-xs font-mono rounded bg-primary/10 text-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
