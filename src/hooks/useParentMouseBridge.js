import { useEffect } from 'react';

const parentOrigin = process.env.REACT_APP_PARENT_ORIGIN;

const useParentMouseBridge = () => {
  useEffect(() => {
    if (window.parent === window || !parentOrigin) return undefined;

    const sendMouseDown = () => {
      window.parent.postMessage({ type: 'mousedown' }, parentOrigin);
    };

    const sendMouseUp = () => {
      window.parent.postMessage({ type: 'mouseup' }, parentOrigin);
    };

    document.addEventListener('mousedown', sendMouseDown, true);
    document.addEventListener('mouseup', sendMouseUp, true);

    return () => {
      document.removeEventListener('mousedown', sendMouseDown, true);
      document.removeEventListener('mouseup', sendMouseUp, true);
    };
  }, []);
};

export default useParentMouseBridge;
