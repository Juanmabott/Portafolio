// FireAscii.tsx
import { useEffect, useRef, useState } from 'react';

const FireAscii = () => {
  const canvasRef = useRef<HTMLPreElement>(null);
  const firePixelsRef = useRef<number[]>([]);
  const [dimensions, setDimensions] = useState({ width: 40, height: 30 });
  const chars = ' .:-=+*#%@';

  useEffect(() => {
    const updateDimensions = () => {
      const screenWidth = window.innerWidth;
      let width, height;
      
      if (screenWidth >= 1200) {
        width = 40;
        height = 30;
      } else if (screenWidth >= 768) {
        width = 30;
        height = 25;
      } else if (screenWidth >= 500) {
        width = 20;
        height = 20;
      } else {
        width = 15;
        height = 15;
      }
      
      setDimensions({ width, height });
      firePixelsRef.current = new Array(width * height).fill(0);
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      updateFire();
      renderFire();
    }, 50);
    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dimensions]);

  const updateFire = () => {
    const { width, height } = dimensions;
    const firePixels = firePixelsRef.current;
    
    for (let x = 0; x < width; x++) {
      firePixels[(height - 1) * width + x] = Math.floor(Math.random() * chars.length);
    }

    for (let y = 0; y < height - 1; y++) {
      for (let x = 0; x < width; x++) {
        const decay = Math.floor(Math.random() * 3);
        const below = (y + 1) * width + x;
        const newIndex = y * width + ((x - decay + width) % width);
        firePixels[newIndex] = Math.max(firePixels[below] - decay, 0);
      }
    }
  };

  const renderFire = () => {
    if (!canvasRef.current) return;
    const { width, height } = dimensions;
    const firePixels = firePixelsRef.current;
    let output = '';
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const index = firePixels[y * width + x];
        output += chars[index] || ' ';
      }
      output += '\n';
    }
    canvasRef.current.textContent = output;
  };

  return (
    <pre
      ref={canvasRef}
      style={{
        fontFamily: 'monospace',
        fontSize: window.innerWidth >= 1200 ? '8px' : 
                   window.innerWidth >= 768 ? '7px' : 
                   window.innerWidth >= 500 ? '6px' : '5px',
        lineHeight: window.innerWidth >= 1200 ? '8px' : 
                    window.innerWidth >= 768 ? '7px' : 
                    window.innerWidth >= 500 ? '6px' : '5px',
        color: 'white',
        background: '#0d5e9b',
        padding: window.innerWidth >= 768 ? '10px' : '5px',
        borderRadius: '10px',
        userSelect: 'none',
        margin: window.innerWidth >= 768 ? '0 10px 0 0' : '0 5px 0 0',
        minWidth: 'fit-content',
        display: window.innerWidth <= 420 ? 'none' : 'block',
      }}
    />
  );
};

export default FireAscii;
