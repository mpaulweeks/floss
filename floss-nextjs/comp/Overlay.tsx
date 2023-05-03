import { AnimationType, Settings, defaultSettings } from "@/types";
import { Dispatch, SetStateAction } from "react";
import styles from '@/styles/Party.module.css';
import { useMouse } from "@/hooks/useMouse";

export function Overlay(props: {
  settings: Settings;
  setSettings: Dispatch<SetStateAction<Settings>>;
}) {
  const { isActive } = useMouse({ timeout: 3000, });
  return (
    <section className={styles.overlay} style={{
      opacity: isActive ? 1 : 0,
    }}>
      <div>
        <button onClick={() => props.setSettings(s => ({
          ...s,
          animation: AnimationType.Row
        }))}>
          row
        </button>
        <button onClick={() => props.setSettings(s => ({
          ...s,
          animation: AnimationType.Column
        }))}>
          col
        </button>
      </div>
      <div>
        {props.settings.count}
        <button onClick={() => props.setSettings(s => ({
          ...s,
          count: Math.max(1, s.count - 1),
        }))}>
          fewer
        </button>
        <button onClick={() => props.setSettings(s => ({
          ...s,
          count: defaultSettings().count,
        }))}>
          reset
        </button>
        <button onClick={() => props.setSettings(s => ({
          ...s,
          count: Math.min(10, s.count + 1),
        }))}>
          more
        </button>
      </div>
      <div>
        {props.settings.speed}
        <button onClick={() => props.setSettings(s => ({
          ...s,
          speed: Math.max(0, s.speed - 1),
        }))}>
          slow
        </button>
        <button onClick={() => props.setSettings(s => ({
          ...s,
          speed: defaultSettings().speed,
        }))}>
          reset
        </button>
        <button onClick={() => props.setSettings(s => ({
          ...s,
          speed: Math.min(10, s.speed + 1),
        }))}>
          fast
        </button>
      </div>
    </section>
  )
}
