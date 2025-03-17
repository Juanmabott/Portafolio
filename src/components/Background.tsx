import React from 'react';
import './Background.css';
import Iridescence from './Iridescence';

const Background: React.FC = () => {
  return (
    <div className="background-container">
      
      <Iridescence
        color={[0,0.5, 1]}
        mouseReact={false}
        amplitude={0.1}
        speed={1.0}
      />
    </div>
  );
};

export default Background;
