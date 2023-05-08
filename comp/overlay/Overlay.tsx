import { AudioSrc, Settings } from "@/types";
import { Dispatch, SetStateAction, useState } from "react";
import styles from '@/styles/Overlay.module.css';
import { useAudio } from "@/hooks/useAudio";
import { SettingsRow } from "./SettingsRow";
import { OverlaySettingsRows } from "./OverlayData";

export function Overlay(props: {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  settings: Settings;
  setSettings: Dispatch<SetStateAction<Settings>>;
}) {
  const { isPlaying, play, stop, } = useAudio();

  const audioSrc = AudioSrc.Vengaboys;
  const onAudioClick = () => isPlaying
    ? stop()
    : play(audioSrc);
  const rows = OverlaySettingsRows(props.settings);

  const classNames = [
    styles.overlay,
    (props.visible ? styles.visible : styles.hidden),
  ].join(' ');

  return (
    <aside className={classNames}>
      <section className={styles.row}>
        <div className={styles.rowLabel}>
          music
        </div>
        <div className={styles.rowButtons}>
          <button onClick={onAudioClick}>
            {isPlaying ? 'ON' : 'OFF'}
          </button>
        </div>
      </section>
      {rows.map((row, ri) => (
        <div key={ri}>
          <div className={styles.gap}></div>
          <SettingsRow
            key={ri}
            {...props}
            data={row}
          />
        </div>
      ))}
    </aside>
  );
}
