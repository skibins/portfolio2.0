import {
  Code2, Cloud, Globe, Layers, Database, Wrench, GitBranch,
} from "lucide-react";
import { type LucideIcon } from "lucide-react";

interface Category {
  name: string;
  icon: LucideIcon;
  items: string[];
}

const CATEGORIES: Category[] = [
  {
    name: "Programming",
    icon: Code2,
    items: ["Java", "Python", "Bash", "C++"],
  },
  {
    name: "Cloud & Infra",
    icon: Cloud,
    items: ["Kubernetes", "Azure", "Linux", "Docker"],
  },
  {
    name: "Web & Scripting",
    icon: Globe,
    items: ["JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    name: "Frameworks",
    icon: Layers,
    items: ["Selenium", "Spring", "Flask"],
  },
  {
    name: "Databases",
    icon: Database,
    items: ["Azure SQL", "MySQL", "MongoDB"],
  },
  {
    name: "Tools",
    icon: Wrench,
    items: ["Git", "GitHub", "Jira", "OpenSearch", "Dynatrace"],
  },
];

export default function TechStack() {
  return (
    <section id="tech" className="bg-cloud-soft">
      <div className="section-container">
        <div className="mb-12 fade-up">
          <h2 className="section-title">Tech Stack</h2>
          <p className="section-subtitle">
            Technologies and tools I work with on a daily basis.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CATEGORIES.map((cat, i) => (
            <div
              key={cat.name}
              className="glass-card p-5 fade-up group"
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <cat.icon size={18} className="text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-foreground">{cat.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-xs font-mono rounded-full bg-secondary text-secondary-foreground border border-border hover:border-primary/30 hover:bg-primary/5 transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Methodologies note */}
        <div className="mt-8 flex items-center gap-3 text-sm text-muted-foreground fade-up" style={{ transitionDelay: "0.5s" }}>
          <GitBranch size={16} className="text-primary flex-shrink-0" />
          <span>Working with <strong className="text-foreground">Agile</strong> & <strong className="text-foreground">Scrum</strong> methodologies</span>
        </div>
      </div>
    </section>
  );
}
