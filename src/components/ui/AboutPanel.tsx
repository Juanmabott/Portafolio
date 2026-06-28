import React, { useEffect, useState } from 'react';
import ButtonGlassVertical from './ButtonGlassVertical';
import ModalPortal from './ModalPortal';
import './AboutPanel.css';

interface AboutPanelProps {
  closePanel: () => void;
}

const TECHS = ['React', 'TypeScript', 'JavaScript', 'Node.js', 'Tailwind', 'Git'];

const AboutPanel: React.FC<AboutPanelProps> = ({ closePanel }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(closePanel, 300); // esperar la animación
  };

  return (
    <ModalPortal>
      {/* Fondo */}
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
          <ButtonGlassVertical onClick={handleClose} label="×" />
        </div>

        <h2>Sobre Mí</h2>

        <div className="about-content">
          <p>
            Soy un desarrollador full stack enfocado en construir aplicaciones web
            modernas, rápidas y cuidadas en el detalle. Me gusta acompañar una idea
            desde el diseño hasta el deploy.
          </p>
          <p>
            Trabajo principalmente con JavaScript y TypeScript, React y Node, y
            disfruto aprendiendo herramientas nuevas en cada proyecto.
          </p>

          <div className="about-tags">
            {TECHS.map((tech) => (
              <span key={tech} className="about-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mobile-message">
          <p>Para una mejor experiencia, visita esta página en una resolución mayor.</p>
        </div>
      </div>
    </ModalPortal>
  );
};

export default AboutPanel;
