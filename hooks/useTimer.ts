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

    if (props.settings.danceSpeed > 0) {
      const timeout = Math.floor(1000 / props.settings.danceSpeed);
      timerRef.current = setInterval(() => setTick(t => t + 1), timeout);
    }
  }, [props.settings.danceSpeed]);

  return { tick };
}
