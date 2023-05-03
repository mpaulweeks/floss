export type Rect = {
  width: number;
  height: number;
}

export enum AnimationType {
  Row = 1,
  Column = 2,
  Twirl = 3,
}

export type Settings = {
  speed: number; // 1 - 10
  count: number; // 1 - 10
  animation: AnimationType;
}
export const defaultSettings = (): Settings => ({
  speed: 3,
  count: 3,
  animation: AnimationType.Twirl,
});
