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
      <h2>Sobre Mí</h2>
      <p>Soy un desarrollador apasionado por crear soluciones web innovadoras y efectivas.</p>
      <div className="close-button">
        <ButtonGlassVertical onClick={() => {
          setIsOpen(false);
          setTimeout(closePanel, 300); // Wait for the animation to finish
        }} label="Cerrar"/>
      </div>
    </div>
  );
};

export default AboutPanel;
