import { useEffect } from 'react';

const useParentMouseBridge = () => {
  useEffect(() => {
    if (window.parent === window) return undefined;

    const sendMouseDown = () => {
      window.parent.postMessage({ type: 'mousedown' }, '*');
    };

    const sendMouseUp = () => {
      window.parent.postMessage({ type: 'mouseup' }, '*');
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
