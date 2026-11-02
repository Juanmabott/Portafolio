import { useEffect, useRef, type ReactNode, type RefObject } from "react";
import { CloseIcon } from "./icons";
import "./SideDrawer.css";

interface SideDrawerProps {
  id: string;
  title: string;
  closeLabel: string;
  open: boolean;
  onClose: () => void;
  /** Elemento al que vuelve el foco al cerrar (el botón que lo abrió). */
  returnFocusRef?: RefObject<HTMLElement | null>;
  children: ReactNode;
  side?: "left" | "right";
}

/**
 * Panel lateral que se expande por fuera del panel principal (en mobile, overlay).
 * Cerrado queda `inert`: no se puede enfocar ni leer. Esc lo cierra.
 */
const SideDrawer = ({
  id,
  title,
  closeLabel,
  open,
  onClose,
  returnFocusRef,
  children,
  side = "right",
}: SideDrawerProps) => {
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = `${id}-title`;

  useEffect(() => {
    if (!open) return;

    closeRef.current?.focus({ preventScroll: true });

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);

    const returnTo = returnFocusRef;
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      returnTo?.current?.focus({ preventScroll: true });
    };
  }, [open, onClose, returnFocusRef]);

  return (
    <>
      <div className={`drawer-backdrop ${open ? "open" : ""}`} onClick={onClose} aria-hidden="true" />
      <aside
        id={id}
        className={`side-drawer side-${side} ${open ? "open" : ""}`}
        aria-labelledby={titleId}
        inert={!open}
      >
        <div className="drawer-fill">
          <div className="drawer-head">
            <h2 id={titleId}>{title}</h2>
            <button
              ref={closeRef}
              type="button"
              className="drawer-close"
              onClick={onClose}
              aria-label={closeLabel}
            >
              <CloseIcon />
            </button>
          </div>
          <div className="drawer-body">{children}</div>
        </div>
      </aside>
    </>
  );
};

export default SideDrawer;
