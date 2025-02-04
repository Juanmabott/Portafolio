import React from 'react';
import './ButtonGlassVertical.css';

interface ButtonGlassVerticalProps {
  onClick: () => void;
  label: string;
}

const ButtonGlassVertical: React.FC<ButtonGlassVerticalProps> = ({ onClick, label }) => {
  return (
    <button 
      onClick={onClick} 
      className="btn-glass-vertical btn-glass-vertical-rotated"
    >
      {label}
    </button>
  );
};

export default ButtonGlassVertical;
