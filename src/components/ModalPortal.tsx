import React from 'react';
import ReactDOM from 'react-dom';

interface ModalPortalProps {
  children: React.ReactNode;
}

const ModalPortal: React.FC<ModalPortalProps> = ({ children }) => {
  return ReactDOM.createPortal(
    children,
    document.body
  );
};

export default ModalPortal;
