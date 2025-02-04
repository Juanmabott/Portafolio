import './App.css';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Carrusel from './components/Carrusel';
import { useState } from 'react';
import ButtonGlassVertical from './components/ButtonGlassVertical';
import AboutPanel from './components/AboutPanel';

function App() {
  const [isAboutPanelOpen, setIsAboutPanelOpen] = useState(false);

  const toggleAboutPanel = () => {
    setIsAboutPanelOpen(!isAboutPanelOpen);
  };

  return (
    <>
      <div className="background-container">
        <div className="grid-pattern"></div>
        <div className="radial-gradient"></div>
      </div>
      <div className="content-container">
        <div className="main-container">
          <div className="portfolio">
            <header className="header">
              <div className="profile-image">
                <img src="./img/pfp.jpg" alt="Foto de perfil" />
              </div>
              <ButtonGlassVertical onClick={toggleAboutPanel} label="Sobre Mí" />
              <h1>Juan Manuel</h1>
              <p>Desarrollador</p>
            </header>

            <section className="projects">
              <h2>Mis Proyectos</h2>
              <Carrusel />
            </section>

            <Skills />

            <Contact />
          </div>
          <div className="about-panel-container">
            {isAboutPanelOpen && (
              <AboutPanel closePanel={toggleAboutPanel} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;