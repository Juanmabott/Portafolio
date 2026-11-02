import { Renderer, Program, Mesh, Color, Triangle } from "ogl";
import { useEffect, useRef } from "react";

import "./Iridescence.css";

const vertexShader = `
attribute vec2 uv;
attribute vec2 position;

varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position, 0, 1);
}
`;

const fragmentShader = `
precision highp float;

uniform float uTime;
uniform vec3 uColor;
uniform vec3 uResolution;
uniform vec2 uMouse;
uniform float uAmplitude;
uniform float uSpeed;

varying vec2 vUv;

void main() {
  float mr = min(uResolution.x, uResolution.y);
  vec2 uv = (vUv.xy * 2.0 - 1.0) * uResolution.xy / mr;

  // Add a subtle offset based on the mouse position
  uv += (uMouse - vec2(0.5)) * uAmplitude;

  float d = -uTime * 0.5 * uSpeed;
  float a = 0.0;
  for (float i = 0.0; i < 8.0; ++i) {
    a += cos(i - d - a * uv.x);
    d += sin(uv.y * i + a);
  }
  d += uTime * 0.5 * uSpeed;
  vec3 col = vec3(cos(uv * vec2(d, a)) * 0.6 + 0.4, cos(a + d) * 0.5 + 0.5);
  col = cos(col * cos(vec3(d, a, 2.5)) * 0.5 + 0.5) * uColor;
  gl_FragColor = vec4(col, 1.0);
}
`;

type RGB = readonly [number, number, number];

interface IridescenceProps {
  color?: RGB;
  speed?: number;
  amplitude?: number;
  mouseReact?: boolean;
  /**
   * Resolución interna respecto del tamaño en pantalla. El efecto es un degradé suave,
   * así que a 0.5 se ve igual y la GPU procesa 4 veces menos píxeles.
   */
  resolution?: number;
}

const DEFAULT_COLOR: RGB = [0, 0.5, 1];

export default function Iridescence({
  color = DEFAULT_COLOR,
  speed = 1.0,
  amplitude = 0.1,
  mouseReact = true,
  resolution = 0.5,
}: IridescenceProps) {
  const ctnDom = useRef<HTMLDivElement>(null);
  // Dependencias primitivas: un array nuevo con los mismos valores no reinicia WebGL.
  const [r, g, b] = color;

  useEffect(() => {
    const ctn = ctnDom.current;
    if (!ctn) return;

    let renderer: Renderer;
    try {
      renderer = new Renderer({ dpr: resolution });
    } catch {
      // Sin WebGL: queda el degradé CSS de fondo.
      return;
    }
    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 1);

    const geometry = new Triangle(gl);
    const program = new Program(gl, {
      vertex: vertexShader,
      fragment: fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uColor: { value: new Color(r, g, b) },
        uResolution: {
          value: new Color(gl.canvas.width, gl.canvas.height, gl.canvas.width / gl.canvas.height),
        },
        uMouse: { value: new Float32Array([0.5, 0.5]) },
        uAmplitude: { value: amplitude },
        uSpeed: { value: speed },
      },
    });
    const mesh = new Mesh(gl, { geometry, program });
    const draw = () => renderer.render({ scene: mesh });

    // Con "reducir movimiento" se dibuja un único frame estático.
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resize = () => {
      renderer.setSize(ctn.offsetWidth, ctn.offsetHeight);
      program.uniforms.uResolution.value = new Color(
        gl.canvas.width,
        gl.canvas.height,
        gl.canvas.width / gl.canvas.height
      );
      if (reduceMotion) draw();
    };
    window.addEventListener("resize", resize);
    resize();

    let animateId = 0;
    if (reduceMotion) {
      program.uniforms.uTime.value = 10;
      draw();
    } else {
      const update = (t: number) => {
        animateId = requestAnimationFrame(update);
        program.uniforms.uTime.value = t * 0.001;
        draw();
      };
      animateId = requestAnimationFrame(update);
    }
    ctn.appendChild(gl.canvas);

    // El contenedor queda detrás del contenido, así que el puntero se escucha en window.
    const trackPointer = mouseReact && !reduceMotion;
    const handlePointerMove = (e: PointerEvent) => {
      program.uniforms.uMouse.value[0] = e.clientX / window.innerWidth;
      program.uniforms.uMouse.value[1] = 1.0 - e.clientY / window.innerHeight;
    };
    if (trackPointer) {
      window.addEventListener("pointermove", handlePointerMove, { passive: true });
    }

    return () => {
      cancelAnimationFrame(animateId);
      window.removeEventListener("resize", resize);
      if (trackPointer) {
        window.removeEventListener("pointermove", handlePointerMove);
      }
      ctn.removeChild(gl.canvas);
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, [r, g, b, speed, amplitude, mouseReact, resolution]);

  return <div ref={ctnDom} className="iridescence-container" />;
}
