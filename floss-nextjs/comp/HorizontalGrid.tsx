import { Rect, Settings } from "@/types";
import styles from '@/styles/Party.module.css';
import { Dancer } from "./Dancer";
import { range } from "@/util";

export function HorizontalGrid(props: {
  frames: string[];
  settings: Settings;
  rect: Rect;
  tick: number;
}) {
  const rows = props.settings.count;
  const size = Math.floor(props.rect.height / props.settings.count);
  const cols = Math.floor(props.rect.width / size);
  return (
    <section className={styles.party}>
      {range(rows).map((r, ri) => (
        <div key={`row-${ri}`}>
          {range(cols).map((c, ci) => (
            <Dancer
              key={`row-${ri}-col-${ci}`}
              frames={props.frames}
              size={size}
              tick={props.tick}
              offset={ri + ci}
            />
          ))}
        </div>
      ))}
    </section>
  );
}
