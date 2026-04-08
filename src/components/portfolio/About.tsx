import cloudImg from "/projects/cloud.jpg";
import automationImg from "/projects/automation.jpg";
import developmentImg from "/projects/development.jpg";
import avatar from "/avatar.png";
import {
  Cloud,
  Server,
  Terminal,
  Briefcase,
  GraduationCap,
} from "lucide-react";

const HIGHLIGHTS = [
  {
    icon: Cloud,
    title: "Cloud Engineering",
    desc: "Supporting and improving cloud-native environments on Azure and Kubernetes with a strong focus on production reliability, troubleshooting and operational stability.",
    image: cloudImg,
  },
  {
    icon: Server,
    title: "DevOps & Automation",
    desc: "Building internal automation tools, operational bots, and scripting solutions that streamline workflows, reduce repetitive tasks and improve engineering efficiency.",
    image: automationImg,
  },
  {
    icon: Terminal,
    title: "Software Development",
    desc: "Developing internal tools and automation solutions in JS/TS, Bash and Python to solve complex operational and production engineering challenges.",
    image: developmentImg,
  },
];

const TIMELINE = [
  {
    icon: Briefcase,
    period: "2024 — Present",
    title: "Software Engineer | Cloud Support",
    place: "SAP",
    desc: "Supporting cloud-native production environments on Kubernetes and Azure, building internal automation tools and bots used globally, troubleshooting infrastructure and Java application issues.",
  },
  {
    icon: Briefcase,
    period: "2024",
    title: "Python Developer",
    place: "ASD Systems",
    desc: "Developed automation scripts and operational tooling in Python and Bash, improving workflow efficiency and system reliability.",
  },
  {
    icon: Briefcase,
    period: "2020 — 2021",
    title: "Intern Fullstack Developer",
    place: "EPLAN Software & Service",
    desc: "Contributed to a team-built web application with REST API and database integration in an Agile development environment.",
  },
  {
    icon: GraduationCap,
    period: "2023 — 2027",
    title: "B.Eng. Computer Science",
    place: "Silesian University of Technology in Gliwice",
    desc: "Engineering studies focused on software development, data structures, databases, and analytical problem-solving.",
  },
];

export default function About() {
  return (
    <section id="about" className="section-container">
      {/* Top: photo + text side by side */}
      <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center mb-16 fade-up">
        <div className="w-full md:w-2/5 flex-shrink-0">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-lg border border-border">
            <img
              src={avatar}
              alt="Jan Skibinski"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex-1">
          <h2 className="section-title">About Me</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            I’m a Software Engineer focused on cloud infrastructure, automation,
            and production reliability. I work with Kubernetes, Azure, Bash,
            Python and Java to support large-scale cloud environments, debug
            production issues and build internal tools used by engineering teams
            globally.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            I enjoy transforming complex operational challenges into scalable,
            reliable solutions and creating automation that improves both system
            stability and engineer efficiency.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Outside of engineering, I enjoy continuously learning new
            technologies, creating video content, and recharging through
            mountain hikes and outdoor activities.
          </p>
        </div>
      </div>

      {/* Highlight cards with images */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {HIGHLIGHTS.map((item, i) => (
          <div
            key={item.title}
            className="glass-card overflow-hidden fade-up group"
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <div className="h-36 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-3 -mt-8 relative z-10 border border-border shadow-sm">
                <item.icon size={18} className="text-primary" />
              </div>
              <h3 className="text-base font-semibold mb-1.5 text-foreground">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Timeline */}
      <div className="fade-up" style={{ transitionDelay: "0.3s" }}>
        <h3 className="text-xl font-semibold mb-8 text-foreground">
          Experience & Education
        </h3>
        <div className="relative space-y-10">
          {TIMELINE.map((entry, i) => (
            <div
              key={i}
              className="relative flex gap-6 fade-up"
              style={{ transitionDelay: `${0.4 + i * 0.1}s` }}
            >
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center flex-shrink-0">
                  <entry.icon size={14} className="text-primary" />
                </div>
                {i < 4 && <div className="w-0.5 flex-1 bg-border mt-2" />}
              </div>
              <div className="pb-2">
                <span className="text-xs font-mono text-primary">
                  {entry.period}
                </span>
                <h4 className="text-base font-semibold text-foreground mt-1">
                  {entry.title}
                </h4>
                <p className="text-sm text-muted-foreground font-medium">
                  {entry.place}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mt-1">
                  {entry.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
