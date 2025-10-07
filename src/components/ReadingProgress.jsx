import { useEffect, useState } from 'react';

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = Math.max(1, h.scrollHeight - h.clientHeight);
      const p = Math.min(100, Math.max(0, (window.scrollY / max) * 100));
      setProgress(p);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div style={{ position:'fixed', top:0, left:0, height:3, width:`${progress}%`, background:'#bb2988', zIndex:60, transition:'width .15s ease-out' }} />
  );
}

