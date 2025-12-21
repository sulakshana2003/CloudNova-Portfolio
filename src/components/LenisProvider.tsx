import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

type Props = { children: React.ReactNode };

export default function LenisProvider({ children }: Props) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.05,       // keep around 0.9–1.2 to avoid “lag”
      smoothWheel: true,
      touchMultiplier: 1,  // better for mobile (prevents weird delay)
      wheelMultiplier: 1,
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
