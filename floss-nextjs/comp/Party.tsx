import { FlossAnimation } from "@/types";
import { useEffect, useState } from "react";
import { Dancer } from "./Dancer";
import styles from '@/styles/Party.module.css'

function range(n: number) {
  const out: number[] = [];
  for (let i = 0; i < n; i++) {
    out.push(i);
  }
  return out;
}

type Rect = {
  width: number;
  height: number;
}

export function Party() {
  const [animation, setAnimation] = useState<FlossAnimation>({
    animation: 'todo',
    direction: 'row',
  });
  const [size, setSize] = useState(100);
  const [rect, setRect] = useState<Rect>({ width: 800, height: 600, });

  useEffect(() => {
    setRect(document.body.getBoundingClientRect());
    window.addEventListener('resize', () => {
      setRect(document.body.getBoundingClientRect());
    });
  }, [setRect]);

  // todo not overflowing correctly
  const rows = Math.ceil(rect.height / size);
  const cols = Math.ceil(rect.width / size);

  // todo
  const frames = range(6).map(n => `/frames/a${n}.png`);

  console.log(rows, cols);

  const Grid = () => animation.direction === 'row' ?
    <section className={styles.party}>
      {range(rows).map((r, ri) => (
          <div key={`row-${ri}`}>
            {range(cols).map((c, ci) => (
              <Dancer
                key={`row-${ri}-col-${ci}`}
                frames={frames}
                size={size}
                ticks={0}
                offset={ri + ci}
              />
            ))}
          </div>
      ))}
    </section> : <h1>todo</h1>;

  return (
    <Grid />
  )
}
