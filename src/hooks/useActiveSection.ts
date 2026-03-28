import { useState, useEffect } from "react";

export function useActiveSection(sectionIds: string[]) {
  const [activeId, setActiveId] = useState(sectionIds[0]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100; // offset np. wysokość navbar

      let foundId = sectionIds[0];

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;

        if (scrollPos >= top && scrollPos < bottom) {
          foundId = id;
          break; // przerwij po znalezieniu sekcji, która obejmuje scroll
        }
      }

      setActiveId(foundId);
    };

    handleScroll(); // ustawienie domyślne przy starcie
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds]);

  return activeId;
}
