import { Settings } from "@/types";
import { useEffect, useRef, useState } from "react";

export function useTimer(props: {
  settings: Settings;
}) {
  const [tick, setTick] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | undefined>();

  // on load
  useEffect(() => {
    clearInterval(timerRef.current);

    if (props.settings.speed > 0) {
      const timeout = Math.floor(1000 / props.settings.speed);
      timerRef.current = setInterval(() => setTick(t => t + 1), timeout);
    }
  }, [props.settings.speed]);

  return { tick };
}
