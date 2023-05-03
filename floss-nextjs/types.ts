import { range } from "./util";

export type Rect = {
  width: number;
  height: number;
}

export enum AnimationType {
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
  speed: number; // 1 - 10
  count: number; // 1 - 10
  animation: AnimationType;
  dance: AnimationDance;
}
export const defaultSettings = (): Settings => ({
  speed: 3,
  count: 3,
  animation: AnimationType.Twirl,
  dance: AnimationDance.Floss,
});
