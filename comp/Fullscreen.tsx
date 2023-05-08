import styles from '@/styles/Fullscreen.module.css';
import rainbowStyles from '@/styles/Rainbow.module.css';
import { Settings } from '@/types';
import { Party } from './party/Party';
import { useElementRef } from '@/hooks/useElementRef';
import { Dispatch, SetStateAction } from 'react';

export function Fullscreen(props: {
  settings: Settings;
  setShowOverlay: Dispatch<SetStateAction<boolean>>;
}) {
  const { element, ref } = useElementRef();
  return (
    <div
      ref={ref}
      className={[styles.fullscreen, rainbowStyles.rainbow].join(' ')}
      onClick={() => props.setShowOverlay(b => !b)}
    >
      {element && <Party element={element} settings={props.settings} />}
    </div>
  )
}
