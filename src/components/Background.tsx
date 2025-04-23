import React from 'react';
import './Background.css';
import Iridescence from './Iridescence';

const Background: React.FC = () => {
  return (
    <div className="background-container">
      <Iridescence
        color={[0.1, 0.5, 0.9]} 
        mouseReact={true}
        amplitude={0.15}
        speed={0.8}
      />
      <div className="hexagon-pattern"></div>
      <div className="radial-gradient"></div>
      
    </div>
  );
};

export default Background;
