import { AnimationDance, AnimationLayout, AudioSrc, Settings, SettingsRowData, defaultSettings } from "@/types";
import { Dispatch, SetStateAction } from "react";
import styles from '@/styles/Overlay.module.css';
import { useAudio } from "@/hooks/useAudio";
import { SettingsRow } from "./SettingsRow";
import { OverlaySettingsRows } from "./OverlayData";

export function Overlay(props: {
  settings: Settings;
  setSettings: Dispatch<SetStateAction<Settings>>;
}) {
  const audioSrc = AudioSrc.Vengaboys;
  const { isPlaying, play, stop, } = useAudio();
  const onAudioClick = () => isPlaying
    ? stop()
    : play(audioSrc);
  const rows = OverlaySettingsRows(props.settings);

  return (
    <aside className={styles.overlayOuter}>
      <section className={styles.overlayInner}>
        <div>
          {'audio: '}
          <button onClick={onAudioClick}>
            {isPlaying ? 'ON' : 'OFF'}
          </button>
        </div>
        {rows.map((row, ri) => (
          <SettingsRow
            key={ri}
            {...props}
            data={row}
          />
        ))}
      </section>
    </aside>
  );
}
