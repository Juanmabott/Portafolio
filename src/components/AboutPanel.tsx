import React, { useEffect, useState } from 'react';
import ButtonGlassVertical from './ButtonGlassVertical';
import './AboutPanel.css';

interface AboutPanelProps {
  closePanel: () => void;
}

const AboutPanel: React.FC<AboutPanelProps> = ({ closePanel }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <div className={`about-panel ${isOpen ? 'open' : ''}`}>
      <div className="close-button">
        <ButtonGlassVertical onClick={() => {
          setIsOpen(false);
          setTimeout(closePanel, 300); // Wait for the animation to finish
        }} label="×" />
      </div>
      
      <h2>Sobre Mí</h2>
      <div className="about-content">
        <p>Soy un desarrollador apasionado por crear soluciones web innovadoras y efectivas. Mi experiencia abarca desde el diseño hasta la implementación de aplicaciones web completas.</p>
        <p>Me especializo en tecnologías front-end como React, TypeScript y CSS avanzado, con conocimientos sólidos en herramientas modernas de desarrollo web.</p>
      </div>
      
      <div className="mobile-message">
        <p>Para una mejor experiencia, visita esta página en una resolución mayor.</p>
      </div>
    </div>
  );
};

export default AboutPanel;
