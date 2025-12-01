
import { createRoot } from "react-dom/client";
import Lenis from 'lenis';
import App from "./App.tsx";
import "./index.css";

// Initialize Lenis for smooth scrolling
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  touchMultiplier: 2,
});

// Make Lenis instance globally accessible
(window as any).lenis = lenis;

function raf(time: number) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

createRoot(document.getElementById("root")!).render(<App />);
  