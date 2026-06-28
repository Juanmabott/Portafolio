import { useState } from 'react';
import './styles/App.css';

import Background from './components/effects/Background';
import Header from './components/layout/Header';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import SideDrawer from './components/ui/SideDrawer';
import SkillsList from './components/ui/SkillsList';
import Notification from './components/ui/Notification';

function App() {
  const [isSkillsOpen, setIsSkillsOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const copyToClipboard = async (email: string) => {
    try {
      await navigator.clipboard.writeText(email);
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <>
      <Background />

      <div className="page">
        {/* Conocimientos: panel desplegable a la izquierda */}
        <SideDrawer
          title="Conocimientos"
          side="left"
          open={isSkillsOpen}
          onClose={() => setIsSkillsOpen(false)}
        >
          <SkillsList />
        </SideDrawer>

        {/* Panel principal */}
        <main className="portfolio">
          <div className="portfolio-inner">
            <Header onCopyEmail={copyToClipboard} />
            <About />
            <Projects />
            <Contact />
          </div>

          {/* Marcapáginas de Conocimientos (a la izquierda, visible al estar cerrado) */}
          {!isSkillsOpen && (
            <div className="bookmarks left">
              <button
                className="bookmark-tab"
                onClick={() => setIsSkillsOpen(true)}
                aria-label="Abrir conocimientos"
                aria-expanded={isSkillsOpen}
              >
                Conocimientos
              </button>
            </div>
          )}
        </main>
      </div>

      <Notification show={showNotification} message="¡Email copiado al portapapeles!" />
    </>
  );
}

export default App;
