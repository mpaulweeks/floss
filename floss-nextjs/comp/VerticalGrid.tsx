import { Rect, Settings } from "@/types";
import styles from '@/styles/Party.module.css';
import { GenericGrid } from "./GenericGrid";

export function VerticalGrid(props: {
  settings: Settings;
  rect: Rect;
  tick: number;
}) {
  const cols = props.settings.count;
  const size = Math.floor(props.rect.width / props.settings.count);
  const rows = Math.floor(props.rect.height / size) + 2;
  return (
    <GenericGrid
      {...props}
      size={size}
      rows={rows}
      cols={cols}
      className={styles.vertical}
      getOffset={args => args.ci}
      isReverse={args => args.ci % 2 === 0}
    />
  );
}
