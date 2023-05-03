import { AnimationType, Rect, Settings, defaultSettings } from "@/types";
import { useEffect, useState } from "react";
import { Overlay } from "./Overlay";
import { HorizontalGrid } from "./HorizontalGrid";
import { range } from "@/util";
import { useTimer } from "../hooks/useTimer";
import { VerticalGrid } from "./VerticalGrid";
import { TwirlGrid } from "./TwirlGrid";

export function Party() {
  const [settings, setSettings] = useState<Settings>(defaultSettings());
  const [rect, setRect] = useState<Rect>({ width: 800, height: 600, });
  const { tick } = useTimer({ settings, });

  // on load
  useEffect(() => {
    // rect
    setRect(document.body.getBoundingClientRect());
    window.addEventListener('resize', () => {
      setRect(document.body.getBoundingClientRect());
    });
  }, []);

  // todo
  const frames = range(6).map(n => `/frames/a${n}.png`);

  const gridProps = { frames, settings, rect, tick }

  return (
    <>
      {settings.animation === AnimationType.Row && <HorizontalGrid {...gridProps} />}
      {settings.animation === AnimationType.Column && <VerticalGrid {...gridProps} />}
      {settings.animation === AnimationType.Twirl && <TwirlGrid {...gridProps} />}
      <Overlay settings={settings} setSettings={setSettings} />
    </>
  )
}
