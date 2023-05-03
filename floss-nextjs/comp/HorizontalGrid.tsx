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
  const cols = Math.floor(props.rect.width / size) + 2;
  return (
    <section className={styles.party}>
      {range(rows).map((r, ri) => (
        <div key={`hori-${rows}-row-${ri}`} className={[
          styles.horizontal,
        ].join(' ')}>
          {range(cols).map((c, ci) => (
            <Dancer
              key={`hori-${rows}-row-${ri}-col-${ci}`}
              frames={props.frames}
              size={size}
              tick={props.tick}
              offset={ri}
              moreClassNames={ri % 2 === 0 ? [] : [styles.reverse]}
            />
          ))}
        </div>
      ))}
    </section>
  );
}
