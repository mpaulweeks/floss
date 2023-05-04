import { range } from "./util";

export type Rect = {
  width: number;
  height: number;
}

export enum AnimationLayout {
  Row = 1,
  Column = 2,
  Twirl = 3,
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
  count: 3,
  danceSpeed: 3,
  moveSpeed: 3,
  layout: AnimationLayout.Row,
  dance: AnimationDance.Floss,
});
