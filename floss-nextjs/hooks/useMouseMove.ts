import { useEffect, useRef, useState } from "react";

export function useMouseMove(props: {
  timeout: number;
}) {
  const [isActive, setActive] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | undefined>();

  // on load
  useEffect(() => {
    function onMove() {
      setActive(true);
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setActive(false), props.timeout);
    }
    window.addEventListener('mousemove', onMove);
    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('mousemove', onMove);
    }
  }, [props.timeout, setActive]);

  return { isActive };
}
