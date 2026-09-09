import { useEffect, useState } from "react";

export function ReadingProgress() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    function onScroll() {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      setWidth(max > 0 ? Math.min(100, (el.scrollTop / max) * 100) : 0);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="no-print pointer-events-none fixed top-0 right-0 left-0 z-40 h-0.5 bg-transparent"
      aria-hidden="true"
    >
      <div className="h-full bg-primary transition-[width] duration-150 ease-out" style={{ width: `${width}%` }} />
    </div>
  );
}
