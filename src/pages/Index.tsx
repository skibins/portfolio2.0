import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import TechStack from "@/components/portfolio/TechStack";
import Projects from "@/components/portfolio/Projects";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";
import { useDarkMode } from "@/hooks/useDarkMode";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Index = () => {
  const { isDark, toggle } = useDarkMode();
  useScrollAnimation();

  return (
    <div className="min-h-screen">
      <Navbar isDark={isDark} onToggleTheme={toggle} />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
