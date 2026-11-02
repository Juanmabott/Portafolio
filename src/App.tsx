import { useCallback, useEffect, useRef, useState } from "react";
import "./styles/App.css";

import Background from "./components/effects/Background";
import Nav from "./components/layout/Nav";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import SideDrawer from "./components/ui/SideDrawer";
import SkillsList from "./components/ui/SkillsList";
import Notification from "./components/ui/Notification";
import { LayersIcon } from "./components/ui/icons";
import { profile } from "./data/profile";
import { useLang } from "./i18n/context";

const SKILLS_DRAWER_ID = "skills-drawer";

function App() {
  const { t } = useLang();
  const [isSkillsOpen, setIsSkillsOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const notificationTimer = useRef<number | undefined>(undefined);
  const skillsOpener = useRef<HTMLElement | null>(null);

  const openSkills = useCallback(() => {
    // Recordamos quién lo abrió para devolverle el foco al cerrar.
    skillsOpener.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    setIsSkillsOpen(true);
  }, []);
  const closeSkills = useCallback(() => setIsSkillsOpen(false), []);

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setShowNotification(true);
      window.clearTimeout(notificationTimer.current);
      notificationTimer.current = window.setTimeout(() => setShowNotification(false), 2200);
    } catch {
      // Sin acceso al portapapeles: abrimos el cliente de correo.
      window.location.href = `mailto:${profile.email}`;
    }
  }, []);

  useEffect(() => () => window.clearTimeout(notificationTimer.current), []);

  return (
    <>
      <Background />

      <div className="page">
        {/* Conocimientos: panel desplegable a la izquierda */}
        <SideDrawer
          id={SKILLS_DRAWER_ID}
          title={t.sections.skills}
          closeLabel={t.drawer.close}
          side="left"
          open={isSkillsOpen}
          onClose={closeSkills}
          returnFocusRef={skillsOpener}
        >
          <SkillsList />
        </SideDrawer>

        {/* Panel principal */}
        <main className="portfolio" id="top">
          <div className="portfolio-inner">
            <Nav skillsOpen={isSkillsOpen} skillsControls={SKILLS_DRAWER_ID} onOpenSkills={openSkills} />
            <Header
              skillsOpen={isSkillsOpen}
              skillsControls={SKILLS_DRAWER_ID}
              onOpenSkills={openSkills}
              onCopyEmail={copyEmail}
            />
            <About />
            <Experience />
            <Projects />
            <Contact onCopyEmail={copyEmail} />
          </div>

          <Footer />

          {/* Marcapáginas de Conocimientos (desktop). Queda montado para poder devolverle el foco. */}
          <div className={`bookmarks left ${isSkillsOpen ? "is-hidden" : ""}`} inert={isSkillsOpen}>
            <button
              type="button"
              className="bookmark-tab"
              onClick={openSkills}
              aria-controls={SKILLS_DRAWER_ID}
              aria-expanded={isSkillsOpen}
            >
              <LayersIcon />
              {t.nav.skills}
            </button>
          </div>
        </main>
      </div>

      <Notification show={showNotification} message={t.links.emailCopied} />
    </>
  );
}

export default App;
