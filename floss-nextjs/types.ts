import { range } from "./util";

export type Rect = {
  width: number;
  height: number;
}

export enum AnimationLayout {
  Still = 1,
  Row,
  Column,
  Twirl,
}

export enum AnimationDance {
  Floss = 1,
  Shuffle,
}
export const AnimationFrames = {
  [AnimationDance.Floss]: range(6).map(n => `/frames/a${n}.png`),
  [AnimationDance.Shuffle]: range(2).map(n => `/frames/s${n}.png`),
}

export type Settings = {
  count: number; // 1 - 10
  danceSpeed: number; // 1 - 10
  moveSpeed: number; // 1 - 10
  layout: AnimationLayout;
  dance: AnimationDance;
}
export const defaultSettings = (): Settings => ({
  count: 1,
  danceSpeed: 3,
  moveSpeed: 3,
  layout: AnimationLayout.Still,
  dance: AnimationDance.Floss,
});

export enum AudioSrc {
  Vengaboys = 'party.mp3',
};

export type SettingsOption = {
  label: JSX.Element | string;
  onClick: (s: Settings) => Partial<Settings>;
}
export type SettingsRowData = {
  label?: JSX.Element | string;
  opts: SettingsOption[][];
}
