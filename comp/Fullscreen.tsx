import styles from '@/styles/Fullscreen.module.css';
import rainbowStyles from '@/styles/Rainbow.module.css';
import { Settings } from '@/types';
import { Party } from './Party';
import { useElementRef } from '@/hooks/useElementRef';

export function Fullscreen(props: {
  settings: Settings;
}) {
  const { element, ref } = useElementRef();
  return (
    <div ref={ref} className={[styles.fullscreen, rainbowStyles.rainbow].join(' ')}>
      {element && <Party element={element} settings={props.settings} />}
    </div>
  )
}
