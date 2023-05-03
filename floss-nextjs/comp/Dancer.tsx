import styles from '@/styles/Party.module.css';

export function Dancer(props: {
  frames: string[];
  size: number;
  tick: number;
  offset: number;
  moreClassNames: string[]
}) {
  const localTick = props.tick + props.offset;
  const thisFrame = props.frames[localTick % props.frames.length];

  return (
    <div className={[
      styles.dancer,
      ...props.moreClassNames,
    ].join(' ')} style={{
      width: props.size + 'px',
      height: props.size + 'px',
    }}>
      <img src={thisFrame} />
    </div>
  )
}
