import { Rect, Settings } from "@/types";
import styles from '@/styles/Party.module.css';
import { Dancer } from "./Dancer";
import { range } from "@/util";

export function VerticalGrid(props: {
  frames: string[];
  settings: Settings;
  rect: Rect;
  tick: number;
}) {
  const cols = props.settings.count;
  const size = Math.floor(props.rect.width / props.settings.count);
  const rows = Math.floor(props.rect.height / size) + 2;
  return (
    <section className={styles.party}>
      {range(rows).map((r, ri) => (
        <div key={`hori-${rows}-row-${ri}`} className={[
          styles.vertical,
        ].join(' ')}>
          {range(cols).map((c, ci) => (
            <Dancer
              key={`hori-${rows}-row-${ri}-col-${ci}`}
              frames={props.frames}
              size={size}
              tick={props.tick}
              offset={ci}
              moreClassNames={ci % 2 === 0 ? [] : [styles.reverse]}
            />
          ))}
        </div>
      ))}
    </section>
  );
}
