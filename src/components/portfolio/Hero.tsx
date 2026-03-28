import { ChevronDown, Mail } from "lucide-react";
import avatar from "/avatar.png";

function CloudShape({ style }: { style?: React.CSSProperties }) {
  return (
    <div className="absolute pointer-events-none" style={style}>
      <svg
        width="180"
        height="80"
        viewBox="0 0 180 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse cx="90" cy="55" rx="90" ry="25" className="fill-cloud-fill" />
        <ellipse cx="55" cy="35" rx="35" ry="35" className="fill-cloud-fill" />
        <ellipse cx="100" cy="30" rx="40" ry="30" className="fill-cloud-fill" />
        <ellipse cx="135" cy="40" rx="28" ry="25" className="fill-cloud-fill" />
      </svg>
    </div>
  );
}

const CLOUDS = [
  { top: "10%", scale: 1.4, duration: 55, delay: 0 },
  { top: "30%", scale: 0.9, duration: 70, delay: -20 },
  { top: "55%", scale: 1.1, duration: 60, delay: -35 },
  { top: "75%", scale: 0.7, duration: 80, delay: -50 },
  { top: "42%", scale: 1.2, duration: 65, delay: -10 },
  { top: "85%", scale: 0.6, duration: 75, delay: -40 },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="hero-bg min-h-screen flex items-center pt-16 relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        {CLOUDS.map((cloud, i) => (
          <CloudShape
            key={i}
            style={{
              top: cloud.top,
              transform: `scale(${cloud.scale})`,
              animation: `cloud-drift ${cloud.duration}s linear ${cloud.delay}s infinite`,
            }}
          />
        ))}
      </div>

      <div className="section-container w-full relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="flex-1 order-2 md:order-1">
            <p className="text-base font-mono text-primary mb-4 fade-up">
              Hello, I'm
            </p>
            <h1
              className="text-5xl md:text-7xl font-bold tracking-tight mb-4 fade-up"
              style={{ transitionDelay: "0.1s" }}
            >
              Jan Skibinski
            </h1>
            <p
              className="text-2xl md:text-3xl font-light text-muted-foreground mb-6 fade-up"
              style={{ transitionDelay: "0.2s" }}
            >
              Software Engineer{" "}
              <span className="text-gradient font-medium">/</span> Cloud
              Engineer
            </p>
            <p
              className="text-lg text-muted-foreground max-w-xl mb-10 fade-up"
              style={{ transitionDelay: "0.3s" }}
            >
              Focused on cloud infrastructure, production reliability, and
              engineering automation at scale. Building internal tools and
              operational bots that improve workflows across Kubernetes and
              Azure environments.
            </p>
            <div
              className="flex flex-wrap gap-4 fade-up"
              style={{ transitionDelay: "0.4s" }}
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
              >
                View Projects
                <ChevronDown size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium text-sm hover:bg-secondary transition-colors"
              >
                <Mail size={16} />
                Contact
              </a>
            </div>
          </div>

          <div
            className="order-1 md:order-2 fade-up"
            style={{ transitionDelay: "0.2s" }}
          >
            <div className="relative">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden ring-4 ring-primary/20 ring-offset-4 ring-offset-background shadow-xl">
                <img
                  src={avatar}
                  alt="Jan Skibinski profile photo"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full bg-primary/10 backdrop-blur-sm flex items-center justify-center">
                <span className="text-lg">🤓</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-primary hover:opacity-70 transition-opacity"
      >
        <span className="text-xs font-mono tracking-widest uppercase">
          scroll
        </span>
        <ChevronDown size={20} className="animate-bounce" />
      </a>
    </section>
  );
}
