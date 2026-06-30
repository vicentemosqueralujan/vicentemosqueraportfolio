"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (ref.current) {
        ref.current.style.transform = `translate(${e.clientX - 5}px, ${e.clientY - 5}px)`;
        ref.current.style.opacity = "1";
      }
    };
    const hide = () => { if (ref.current) ref.current.style.opacity = "0"; };
    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", hide);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", hide);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[9999] w-2.5 h-2.5 rounded-full opacity-0 transition-opacity duration-200 hidden md:block"
      style={{ backgroundColor: "var(--accent-color)", mixBlendMode: "difference" }}
    />
  );
}
