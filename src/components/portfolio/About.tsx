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
    desc: "Designing and managing scalable cloud infrastructure on Azure with a focus on reliability and cost optimization.",
    image: "/projects/k8s-provisioner.jpg",
  },
  {
    icon: Server,
    title: "DevOps & Automation",
    desc: "Building CI/CD pipelines, automating deployments with Kubernetes and Docker, and improving operational efficiency.",
    image: "/projects/cicd-pipeline.jpg",
  },
  {
    icon: Terminal,
    title: "Software Development",
    desc: "Developing robust backend services and tooling in Java, Python, and Bash to solve real engineering problems.",
    image: "/projects/log-platform.jpg",
  },
];

const TIMELINE = [
  {
    icon: Briefcase,
    period: "2022 — Present",
    title: "Cloud Engineer",
    place: "Acme Cloud Solutions",
    desc: "Managing Kubernetes clusters, designing CI/CD pipelines, and maintaining Azure infrastructure for enterprise clients.",
  },
  {
    icon: Briefcase,
    period: "2020 — 2022",
    title: "Junior Software Engineer",
    place: "TechStart GmbH",
    desc: "Built internal tooling with Python and Java, automated deployment workflows, and contributed to microservice architecture.",
  },
  {
    icon: GraduationCap,
    period: "2016 — 2020",
    title: "B.Sc. Computer Science",
    place: "University of Technology",
    desc: "Focused on distributed systems, networking, and cloud computing fundamentals.",
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
              src="/avatar.png"
              alt="Jan Skibinski"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex-1">
          <h2 className="section-title">About Me</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            I'm a mid-level Software and Cloud Engineer with a strong focus on
            building production-grade infrastructure and automating everything I
            can. I value clean code, reliable systems, and continuous learning.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            When I'm not deploying clusters or writing automation scripts, I
            enjoy contributing to open source projects and exploring new
            cloud-native technologies.
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
                {i < 2 && <div className="w-0.5 flex-1 bg-border mt-2" />}
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
