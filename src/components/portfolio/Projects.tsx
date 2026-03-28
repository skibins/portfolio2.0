import { ExternalLink, Github } from "lucide-react";
import k8sImg from "/projects/k8s-provisioner.jpg";
import cicdImg from "/projects/cicd-pipeline.jpg";
import logImg from "/projects/log-platform.jpg";
import infraImg from "/projects/infra-monitor.jpg";

const PROJECTS = [
  {
    title: "K8s Cluster Provisioner",
    description: "Automated Kubernetes cluster provisioning on Azure using Terraform and Bash scripts. Includes monitoring setup with Prometheus and Grafana.",
    tech: ["Kubernetes", "Terraform", "Azure", "Bash", "Prometheus"],
    github: "https://github.com",
    image: k8sImg,
  },
  {
    title: "CI/CD Pipeline Framework",
    description: "Reusable CI/CD pipeline templates for multi-service deployments. Supports Docker builds, automated testing, and blue-green deployments.",
    tech: ["Docker", "GitHub Actions", "Python", "Bash"],
    github: "https://github.com",
    image: cicdImg,
  },
  {
    title: "Log Aggregation Platform",
    description: "Centralized logging solution using OpenSearch and custom Python ingestors. Processes millions of log entries daily with real-time alerting.",
    tech: ["OpenSearch", "Python", "Docker", "Azure"],
    github: "https://github.com",
    image: logImg,
  },
  {
    title: "Infrastructure Monitor",
    description: "Real-time infrastructure health dashboard with custom Dynatrace integrations. Provides SLA tracking and automated incident response.",
    tech: ["TypeScript", "Dynatrace", "Azure SQL", "Flask"],
    github: "https://github.com",
    image: infraImg,
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
                <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
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
