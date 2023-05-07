import { Settings, SettingsRowData } from "@/types";
import { Dispatch, SetStateAction } from "react";
import styles from '@/styles/Overlay.module.css';

export function SettingsRow(props: {
  settings: Settings;
  setSettings: Dispatch<SetStateAction<Settings>>;
  data: SettingsRowData;
}) {
  return (
    <section className={styles.row}>
      <div className={styles.rowLabel}>
        {props.data.label}
      </div>
      {props.data.opts.map((row, ri) => (
        <div
          key={ri}
          className={styles.rowButtons}
        >
          {row.map((opt, oi) => (
            <button
              key={oi}
              onClick={() => props.setSettings(s => ({
                ...s,
                ...opt.onClick(s),
              }))}
            >
              {opt.label}
            </button>
          ))}
        </div>
      ))}
    </section>
  );
}
