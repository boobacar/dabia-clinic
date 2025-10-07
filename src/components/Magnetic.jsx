import React, { useEffect, useRef } from 'react';

export default function Magnetic({ children, strength = 10, className = '' }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = (e.clientX - cx) / r.width;
      const dy = (e.clientY - cy) / r.height;
      el.style.transform = `translate(${dx * strength}px, ${dy * strength}px)`;
    };
    const reset = () => { el.style.transform = 'translate(0,0)'; };
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', reset);
    return () => { el.removeEventListener('mousemove', onMove); el.removeEventListener('mouseleave', reset); };
  }, [strength]);
  return <span ref={ref} className={`inline-block ${className}`}>{children}</span>;
}

