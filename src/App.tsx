import './App.css';
import Skills from './components/Skills';
import Carrusel from './components/Carrusel';
import { useState } from 'react';
import ButtonGlassVertical from './components/ButtonGlassVertical';
import AboutPanel from './components/AboutPanel';
import ProfileImage from './components/ProfileImage';
import Background from './components/Background';
import FireAscii from './components/FireAscii';

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
          <FireAscii />
          <div className="portfolio" style={{ zIndex: 10, overflow: 'hidden' }}>
            <header className="header max-w-screen-2xl mx-auto px-5 py-6">
              <ButtonGlassVertical onClick={toggleAboutPanel} label="Sobre Mí" />
              <ProfileImage />
              <div className="header-text">
                <h1>Juan Manuel</h1>
                <p>Desarrollador</p>
                <div className="contact-links">
                  <a href="mailto:Bottaro.juanmanuel@hotmail.com" className="contact-link email">
                    📧 Bottaro.juanmanuel@hotmail.com
                  </a>
                    <a href="https://www.linkedin.com/in/juan-manuel-bottaro" target="_blank" rel="noopener noreferrer" className="contact-link linkedin">
                    <img src="https://static.vecteezy.com/system/resources/previews/023/986/970/non_2x/linkedin-logo-linkedin-logo-transparent-linkedin-icon-transparent-free-free-png.png" alt="LinkedIn" width="20" height="20" style={{marginRight: '8px'}} />
                    LinkedIn
                    </a>
                    <a href="https://github.com/Juanmabott" target="_blank" rel="noopener noreferrer" className="contact-link github">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg" alt="GitHub" width="20" height="20" style={{marginRight: '8px'}} />
                    GitHub
                    </a>
                </div>
              </div>
            </header>

            <section className="projects">
              <h2>Mis Proyectos</h2>
              <Carrusel />
            </section>

            <Skills />

          </div>
          {isAboutPanelOpen && (
            <AboutPanel closePanel={toggleAboutPanel} />
          )}
        </div>
      </div>
    </>
  );
}

export default App;