import { Settings, SettingsRowData } from "@/types";
import { Dispatch, SetStateAction } from "react";

export function SettingsRow(props: {
  settings: Settings;
  setSettings: Dispatch<SetStateAction<Settings>>;
  data: SettingsRowData;
}) {
  return (
    <div>
      {props.data.label}
      {props.data.opts.map((opt, oi) => (
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
  );
}
