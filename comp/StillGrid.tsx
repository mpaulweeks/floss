import { Rect, Settings } from "@/types";
import { GenericGrid } from "./GenericGrid";

export function StillGrid(props: {
  settings: Settings;
  rect: Rect;
  tick: number;
}) {
  const smaller = Math.min(props.rect.width, props.rect.height);
  const size = Math.floor(smaller / props.settings.count);
  const rows = Math.floor(props.rect.height / size);
  const cols = Math.floor(props.rect.width / size);
  return (
    <GenericGrid
      {...props}
      size={size}
      rows={rows}
      cols={cols}
      className={''}
      getOffset={args => (args.ri + args.ci)}
      isReverse={() => false}
    />
  );
}
