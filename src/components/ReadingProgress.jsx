import { useEffect, useRef } from 'react';

export default function ReadingProgress() {
  const barRef = useRef(null);

  useEffect(() => {
    const el = document.scrollingElement || document.documentElement;
    let ticking = false;

    const update = () => {
      const max = Math.max(1, el.scrollHeight - el.clientHeight);
      const p = Math.min(1, Math.max(0, el.scrollTop / max));
      if (barRef.current) {
        // Use transform for GPU-accelerated, layout-free updates
        barRef.current.style.transform = `scaleX(${p})`;
      }
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          update();
          ticking = false;
        });
      }
    };

    const onResize = () => {
      // Recompute immediately on resize (within rAF for consistency)
      requestAnimationFrame(update);
    };

    // Initial paint
    requestAnimationFrame(update);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div
      ref={barRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: 3,
        width: '100%',
        background: '#bb2988',
        zIndex: 60,
        transform: 'scaleX(0)',
        transformOrigin: 'left center',
        willChange: 'transform',
        pointerEvents: 'none',
      }}
    />
  );
}
