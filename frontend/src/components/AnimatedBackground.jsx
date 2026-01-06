import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const listRef = useRef(null);

  useEffect(() => {
    const sensitivity = 20;

    const handleMouseMove = (e) => {
      if (!listRef.current) return;

      const x = (e.clientX / window.innerWidth - 0.5) * sensitivity * -1;
      const y = (e.clientY / window.innerHeight - 0.5) * sensitivity * -1;

      listRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 bg-[#0d111c] overflow-hidden">
      <ul
  ref={listRef}
  className="relative w-full h-full list-none p-0 m-0"
>

        {Array.from({ length: 20 }).map((_, i) => (
          <li
            key={i}
            className="absolute block bg-purple-500/20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${10 + Math.random() * 120}px`,
              height: `${10 + Math.random() * 120}px`,
              animationDuration: `${10 + Math.random() * 40}s`,
              animationDelay: `${Math.random() * 10}s`,
              bottom: "-200px",
            }}
          />
        ))}
      </ul>
    </div>
  );
}
