import { Rect, Settings } from "@/types";
import styles from '@/styles/Party.module.css';
import { Dancer } from "./Dancer";
import { range } from "@/util";

export function GenericGrid(props: {
  frames: string[];
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
    <section className={[styles.party, props.className].join(' ')}>
      {range(props.rows).map((r, ri) => (
        <div key={`grid-${key}-row-${ri}`}>
          {range(props.cols).map((c, ci) => (
            <Dancer
              key={`grid-${key}-row-${ri}-col-${ci}`}
              frames={props.frames}
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
