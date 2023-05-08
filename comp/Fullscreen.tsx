import styles from '@/styles/Fullscreen.module.css';
import rainbowStyles from '@/styles/Rainbow.module.css';
import { Settings } from '@/types';
import { Party } from './party/Party';
import { useElementRef } from '@/hooks/useElementRef';

export function Fullscreen(props: {
  settings: Settings;
  onClickRainbow(): void;
}) {
  const { element, ref } = useElementRef();
  return (
    <div
      ref={ref}
      className={[styles.fullscreen, rainbowStyles.rainbow].join(' ')}
      onClick={props.onClickRainbow}
    >
      {element && <Party element={element} settings={props.settings} />}
    </div>
  )
}
