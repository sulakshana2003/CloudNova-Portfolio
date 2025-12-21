import { useEffect, useRef, useState } from "react";

export function useThreadsVisibility(hideAfter: number, fadeMs: number) {
  const [showThreads, setShowThreads] = useState(true);
  const [renderThreads, setRenderThreads] = useState(true);

  const hideTimer = useRef<number | null>(null);
  const isVisibleRef = useRef<boolean>(true);

  useEffect(() => {
    const onScroll = () => {
      const shouldBeVisible = window.scrollY < hideAfter;
      if (shouldBeVisible === isVisibleRef.current) return;
      isVisibleRef.current = shouldBeVisible;

      if (shouldBeVisible) {
        if (hideTimer.current) {
          window.clearTimeout(hideTimer.current);
          hideTimer.current = null;
        }
        setRenderThreads(true);
        requestAnimationFrame(() => setShowThreads(true));
      } else {
        setShowThreads(false);
        hideTimer.current = window.setTimeout(() => {
          setRenderThreads(false);
        }, fadeMs);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (hideTimer.current) window.clearTimeout(hideTimer.current);
    };
  }, [hideAfter, fadeMs]);

  return { showThreads, renderThreads };
}
