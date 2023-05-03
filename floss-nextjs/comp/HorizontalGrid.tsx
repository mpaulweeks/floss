import { Rect, Settings } from "@/types";
import styles from '@/styles/Party.module.css';
import { Dancer } from "./Dancer";
import { range } from "@/util";
import { GenericGrid } from "./GenericGrid";

export function HorizontalGrid(props: {
  frames: string[];
  settings: Settings;
  rect: Rect;
  tick: number;
}) {
  const rows = props.settings.count;
  const size = Math.floor(props.rect.height / props.settings.count);
  const cols = Math.floor(props.rect.width / size) + 2;
  return (
    <GenericGrid
      {...props}
      size={size}
      rows={rows}
      cols={cols}
      className={styles.horizontal}
      getOffset={args => args.ri}
      isReverse={args => args.ri % 2 === 0}
    />
  );
}
