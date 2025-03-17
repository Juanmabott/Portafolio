import './App.css';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Carrusel from './components/Carrusel';
import { useState } from 'react';
import ButtonGlassVertical from './components/ButtonGlassVertical';
import AboutPanel from './components/AboutPanel';
import ProfileImage from './components/ProfileImage';
import Background from './components/Background';
import ModalPortal from './components/ModalPortal';

function App() {
  const [isAboutPanelOpen, setIsAboutPanelOpen] = useState(false);

  const toggleAboutPanel = () => {
    setIsAboutPanelOpen(!isAboutPanelOpen);
  };

  return (
    <>
      <Background />
      <div className="content-container">
        <div className="main-container">
          <div className="portfolio" style={{ zIndex: 10, overflow: 'hidden' }}>
            <header className="header max-w-screen-2xl mx-auto px-5 py-6">
              <ProfileImage />
              <div className="header-text">
                <h1>Juan Manuel</h1>
                <p>Desarrollador</p>
              </div>
              <ButtonGlassVertical onClick={toggleAboutPanel} label="Sobre Mí" />
            </header>

            <section className="projects">
              <h2>Mis Proyectos</h2>
              <Carrusel />
            </section>

            <Skills />

            <Contact />
          </div>
          {isAboutPanelOpen && (
            <ModalPortal>
              <AboutPanel closePanel={toggleAboutPanel} />
            </ModalPortal>
          )}
        </div>
      </div>
    </>
  );
}

export default App;