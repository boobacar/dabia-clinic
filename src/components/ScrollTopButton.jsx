import React, { useEffect, useState } from 'react';

export default function ScrollTopButton() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  if (!show) return null;
  return (
    <button
      aria-label="Remonter en haut"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-5 right-5 z-40 cta-surface text-white shadow-lg w-10 h-10 flex items-center justify-center hover:scale-105 transition-transform"
    >
      ↑
    </button>
  );
}
