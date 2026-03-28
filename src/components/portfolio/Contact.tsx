import { Mail, Github, Linkedin } from "lucide-react";

const LINKS = [
  {
    icon: Mail,
    label: "jan.skibins@gmail.com",
    href: "mailto:jan.skibins@gmail.com",
  },
  {
    icon: Github,
    label: "github.com/skibins",
    href: "https://github.com/skibins",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jan-skibinski/",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-cloud-soft">
      <div className="section-container">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="section-title fade-up">Get in Touch</h2>
          <p
            className="section-subtitle mx-auto mb-10 fade-up"
            style={{ transitionDelay: "0.1s" }}
          >
            Interested in working together? Feel free to reach out through any
            of the channels below.
          </p>
          <div
            className="space-y-4 fade-up"
            style={{ transitionDelay: "0.2s" }}
          >
            {LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card px-6 py-4 flex items-center gap-4 hover:border-primary/30 transition-colors"
              >
                <link.icon size={20} className="text-primary flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">
                  {link.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
