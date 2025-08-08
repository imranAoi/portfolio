import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { runMatter } from '../matter';

const MatterBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const matterInstance = runMatter(canvas);

    return () => {
      matterInstance.stop();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return createPortal(
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0"
    />,
    document.body
  );
};

export default MatterBackground;
