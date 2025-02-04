import React from 'react';
import ButtonGlassVertical from './ButtonGlassVertical';
import './AboutPanel.css';

interface AboutPanelProps {
  closePanel: () => void;
}

const AboutPanel: React.FC<AboutPanelProps> = ({ closePanel }) => {
  return (
    <div className="about-panel">
      <h2>Sobre Mí</h2>
      <p>Soy un desarrollador apasionado por crear soluciones web innovadoras y efectivas.</p>
      <div className="close-button">
        <ButtonGlassVertical onClick={closePanel} label="Cerrar"/>
      </div>
    </div>
  );
};

export default AboutPanel;
