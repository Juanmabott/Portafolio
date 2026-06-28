// FireAscii.tsx — animación de fuego ASCII. SSR-safe: no usa `window` en el render.
import { useEffect, useRef, useState } from 'react';

const CHARS = ' .:-=+*#%@';

// El tamaño de fuente/espaciado se deriva del ancho de la grilla para evitar
// leer `window` durante el render (lo que rompería el pre-render en Node).
function sizeFor(width: number) {
  if (width >= 40) return { font: 8, padding: 10, marginRight: 10 };
  if (width >= 30) return { font: 7, padding: 10, marginRight: 10 };
  if (width >= 20) return { font: 6, padding: 5, marginRight: 5 };
  return { font: 5, padding: 5, marginRight: 5 };
}

const FireAscii = () => {
  const canvasRef = useRef<HTMLPreElement>(null);
  const firePixelsRef = useRef<number[]>([]);
  // El valor inicial coincide entre servidor y cliente para evitar mismatch de hidratación.
  const [dimensions, setDimensions] = useState({ width: 40, height: 30 });

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
    const { width, height } = dimensions;

    const updateFire = () => {
      const firePixels = firePixelsRef.current;

      for (let x = 0; x < width; x++) {
        firePixels[(height - 1) * width + x] = Math.floor(Math.random() * CHARS.length);
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
      const firePixels = firePixelsRef.current;
      let output = '';
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const index = firePixels[y * width + x];
          output += CHARS[index] || ' ';
        }
        output += '\n';
      }
      canvasRef.current.textContent = output;
    };

    const interval = setInterval(() => {
      updateFire();
      renderFire();
    }, 50);

    return () => clearInterval(interval);
  }, [dimensions]);

  const { font, padding, marginRight } = sizeFor(dimensions.width);

  return (
    <pre
      ref={canvasRef}
      className="fire-ascii"
      style={{
        fontFamily: 'monospace',
        fontSize: `${font}px`,
        lineHeight: `${font}px`,
        color: 'white',
        background: '#0d5e9b',
        padding: `${padding}px`,
        borderRadius: '10px',
        userSelect: 'none',
        margin: `0 ${marginRight}px 0 0`,
        minWidth: 'fit-content',
        display: 'block',
      }}
    />
  );
};

export default FireAscii;
