import { useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useActiveSection } from "@/hooks/useActiveSection";

const NAV_ITEMS = [
  { id: "hero", label: "" },
  { id: "about", label: "About" },
  { id: "tech", label: "Tech Stack" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const SECTION_IDS = NAV_ITEMS.map((n) => n.id);

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

export default function Navbar({ isDark, onToggleTheme }: NavbarProps) {
  const active = useActiveSection(SECTION_IDS);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#hero"
          className="text-lg font-semibold tracking-tight text-foreground"
        >
          <span className="text-gradient">JS</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`text-sm font-medium transition-colors ${
                active === item.id
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-lg bg-secondary text-secondary-foreground"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-lg bg-secondary text-secondary-foreground"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border px-6 py-4 space-y-3">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setMenuOpen(false)}
              className={`block text-sm font-medium ${
                active === item.id ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
