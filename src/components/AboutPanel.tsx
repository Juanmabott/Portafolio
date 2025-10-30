import React, { useEffect, useState } from 'react';
import ButtonGlassVertical from './ButtonGlassVertical';
import ModalPortal from './ModalPortal';
import './AboutPanel.css';

interface AboutPanelProps {
  closePanel: () => void;
}

const AboutPanel: React.FC<AboutPanelProps> = ({ closePanel }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // open with animation
    setIsOpen(true);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(closePanel, 300); // wait for animation
  };

  return (
    <ModalPortal>
      {/* Backdrop */}
      <div
        className={`about-backdrop ${isOpen ? 'open' : ''}`}
        onClick={handleClose}
        aria-hidden={true}
      />

      <div
        className={`about-panel ${isOpen ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="close-button">
          <ButtonGlassVertical
            onClick={handleClose}
            label="×"
          />
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
    </ModalPortal>
  );
};

export default AboutPanel;
