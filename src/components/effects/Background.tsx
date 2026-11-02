import { memo } from "react";
import "./Background.css";
import Iridescence from "./Iridescence";

const COLOR = [0.1, 0.5, 0.9] as const;

/** Fondo fijo: shader iridiscente + capas de degradé. No depende del estado de la app. */
const Background = memo(function Background() {
  return (
    <div className="background-container" aria-hidden="true">
      <Iridescence color={COLOR} mouseReact amplitude={0.15} speed={0.8} />
      <div className="radial-gradient" />
    </div>
  );
});

export default Background;
