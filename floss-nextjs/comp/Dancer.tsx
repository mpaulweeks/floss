import styles from '@/styles/Party.module.css';
import { Settings } from '@/types';

export function Dancer(props: {
  frames: string[];
  settings: Settings;
  size: number;
  tick: number;
  offset: number;
  moreClassNames: string[]
}) {
  const localTick = props.tick + props.offset;
  const thisFrame = props.frames[localTick % props.frames.length];

  const moveSpeed = 5 / props.settings.moveSpeed;

  return (
    <div className={[
      styles.dancer,
      ...props.moreClassNames,
    ].join(' ')} style={{
      width: props.size + 'px',
      height: props.size + 'px',
    }}>
      <img
        src={thisFrame}
        style={{
          animationDuration: `${moveSpeed}s`,
        }}
      />
    </div>
  )
}
