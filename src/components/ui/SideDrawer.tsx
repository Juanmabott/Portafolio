import type { ReactNode } from "react";
import "./SideDrawer.css";

interface SideDrawerProps {
  title: string;
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  side?: "left" | "right";
}

/** Panel lateral genérico que se expande por fuera del panel principal. */
const SideDrawer = ({ title, open, onClose, children, side = "right" }: SideDrawerProps) => {
  return (
    <aside className={`side-drawer side-${side} ${open ? "open" : ""}`} aria-hidden={!open}>
      <div className="drawer-fill">
        <div className="drawer-head">
          <h2>{title}</h2>
          <button className="drawer-close" onClick={onClose} aria-label={`Cerrar ${title}`}>
            <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
              <path
                d="M1 1l12 12M13 1L1 13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
        <div className="drawer-body">{children}</div>
      </div>
    </aside>
  );
};

export default SideDrawer;
