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
  const [showNotification, setShowNotification] = useState(false);

  const toggleAboutPanel = () => {
    setIsAboutPanelOpen(!isAboutPanelOpen);
  };

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
      <div className="content-container">
        <div className="main-container">
          <FireAscii />
          <div className="portfolio z-10 overflow-hidden ">
            <header className="header max-w-screen-2xl mx-auto px-5 py-6 flex">
              <div className="mr-8">
                <ButtonGlassVertical onClick={toggleAboutPanel} label="Sobre Mí" />
              </div>
              <ProfileImage />
              <div className="header-text">
                <h1 className="text-left">Juan Manuel</h1>
                <p className="mb-2">Desarrollador</p>
                <div className="contact-links flex flex-col items-start">
                  
                  <a href="https://www.linkedin.com/in/juan-manuel-bottaro" target="_blank" rel="noopener noreferrer" className="contact-link linkedin flex items-center">
                    <img src="https://static.vecteezy.com/system/resources/previews/023/986/970/non_2x/linkedin-logo-linkedin-logo-transparent-linkedin-icon-transparent-free-free-png.png" alt="LinkedIn" width="20" height="20" className="mr-2" />
                    LinkedIn
                  </a>
                  <a href="https://github.com/Juanmabott" target="_blank" rel="noopener noreferrer" className="contact-link github flex items-center">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg" alt="GitHub" width="20" height="20" className="mr-2" />
                    GitHub
                  </a>
                  <div className="flex items-center gap-0">
                    <button 
                      onClick={() => copyToClipboard("Bottaro.juanmanuel@hotmail.com")}
                      className="contact-link email cursor-pointer"
                    >
                      📧 Correo
                    </button>
                    <button 
                      onClick={() => copyToClipboard("Bottaro.juanmanuel@hotmail.com")}
                      className="copy-button cursor-pointer p-1 rounded-l-none"
                      title="Copiar email"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                        <path fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 9V6.2c0-1.12 0-1.68.218-2.108c.192-.377.497-.682.874-.874C10.52 3 11.08 3 12.2 3h5.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C21 4.52 21 5.08 21 6.2v5.6c0 1.12 0 1.68-.218 2.108a2.002 2.002 0 0 1-.874.874C19.48 15 18.92 15 17.803 15H15M9 9H6.2c-1.12 0-1.68 0-2.108.218a1.999 1.999 0 0 0-.874.874C3 10.52 3 11.08 3 12.2v5.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h5.607c1.117 0 1.676 0 2.104-.218a2 2 0 0 0 .874-.874c.218-.428.218-.987.218-2.105V15M9 9h2.8c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874c.218.427.218.987.218 2.105V15"/>
                      </svg>
                    </button>
                  </div>
                  
                </div>
                
              </div>
            </header>

            <section className="projects">
              <h2>Mis Proyectos</h2>
              <Carrusel />
            </section>

            <Skills />
            
            <section className="contact">
              <h2>Contacto</h2>
              <div className="contact-container flex flex-col items-center">
                <p className="mb-4 text-center">¿Tienes un proyecto en mente? ¡Hablemos!</p>
                <div className="flex items-center gap-2">
                  <a 
                    href="mailto:Bottaro.juanmanuel@hotmail.com"
                    className="contact-link email-send text-center cursor-pointer"
                  >
                    📧 Enviar correo
                  </a>
                 
                </div>
              </div>
            </section>

          </div>
          {isAboutPanelOpen && (
            <AboutPanel closePanel={toggleAboutPanel} />
          )}
          
          {showNotification && (
            <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-[200] animate-fade-in">
              ¡Email copiado al portapapeles!
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;