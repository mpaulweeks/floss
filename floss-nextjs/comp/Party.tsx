import { AnimationLayout, Rect, Settings } from "@/types";
import { useEffect, useState } from "react";
import { HorizontalGrid } from "./HorizontalGrid";
import { useTimer } from "@/hooks/useTimer";
import { VerticalGrid } from "./VerticalGrid";
import { TwirlGrid } from "./TwirlGrid";

export function Party(props: {
  element: HTMLElement;
  settings: Settings;
}) {
  const { element, settings } = props;
  const [rect, setRect] = useState<Rect>({ width: 800, height: 600, });
  const { tick } = useTimer({ settings, });

  // on load
  useEffect(() => {
    // rect
    setRect(element.getBoundingClientRect());
    window.addEventListener('resize', () => {
      setRect(element.getBoundingClientRect());
    });
  }, [element]);

  const gridProps = { settings, rect, tick }
  return (
    <>
      {settings.layout === AnimationLayout.Row && <HorizontalGrid {...gridProps} />}
      {settings.layout === AnimationLayout.Column && <VerticalGrid {...gridProps} />}
      {settings.layout === AnimationLayout.Twirl && <TwirlGrid {...gridProps} />}
    </>
  )
}
