export type Rect = {
  width: number;
  height: number;
}

export type Settings = {
  speed: number; // 1 - 10
  count: number; // 1 - 10
}
export const defaultSettings = (): Settings => ({
  speed: 3,
  count: 3,
});

export type FlossAnimation = {
  animation: string;
  direction: 'row' | 'column';
}
