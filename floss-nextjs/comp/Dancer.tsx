export function Dancer(props: {
  frames: string[];
  size: number;
  tick: number;
  offset: number;
}) {
  const localTick = props.tick + props.offset;
  const thisFrame = props.frames[localTick % props.frames.length];

  return (
    <img src={thisFrame} style={{
      width: props.size + 'px',
      height: props.size + 'px',
    }} />
  )
}
