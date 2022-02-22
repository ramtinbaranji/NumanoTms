import { useLayoutEffect, useState } from "react";

export function useWindowSize(size: number): boolean {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < size);

  useLayoutEffect(() => {
    function updateSize(): void {
      setIsMobile(window.innerWidth < size);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return isMobile;
}
