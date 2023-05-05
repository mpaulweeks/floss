import { Settings } from "@/types";
import styles from '@/styles/Party.module.css';
import { Dancer } from "./Dancer";
import { range } from "@/util";
import rainbowStyles from '@/styles/Rainbow.module.css';

export function GenericGrid(props: {
  settings: Settings;
  tick: number;
  size: number;
  rows: number;
  cols: number;
  className: string;
  getOffset(args: { ri: number, ci: number, }): number;
  isReverse(args: { ri: number, ci: number, }): boolean;
}) {
  const key = [props.rows, props.cols].join('x');
  return (
    <section className={[styles.party, rainbowStyles.rainbow, props.className].join(' ')}>
      {range(props.rows).map((r, ri) => (
        <div key={`grid-${key}-row-${ri}`}>
          {range(props.cols).map((c, ci) => (
            <Dancer
              key={`grid-${key}-row-${ri}-col-${ci}`}
              settings={props.settings}
              size={props.size}
              tick={props.tick}
              offset={props.getOffset({ ri, ci })}
              moreClassNames={props.isReverse({ ri, ci }) ? [styles.reverse] : []}
            />
          ))}
        </div>
      ))}
    </section>
  );
}
