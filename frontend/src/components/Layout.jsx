import AnimatedBackground from "./AnimatedBackground";

export default function Layout({ children }) {
  return (
    <>
      <AnimatedBackground />
      <div className="relative z-10 min-h-screen">
        {children}
      </div>
    </>
  );
}
