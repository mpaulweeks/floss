import styles from '@/styles/Party.module.css';
import rainbowStyles from '@/styles/Rainbow.module.css';
import { Settings } from '@/types';
import { Party } from './Party';
import { useEffect, useRef, useState } from 'react';

export function Fullscreen(props: {
  settings: Settings;
}) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [element, setElement] = useState<HTMLElement>();

  useEffect(() => {
    if (elementRef.current) {
      setElement(elementRef.current);
    }
  }, [setElement]);

  return (
    <div ref={elementRef} className={[styles.fullscreen, rainbowStyles.rainbow].join(' ')}>
      {element && <Party element={element} settings={props.settings} />}
    </div>
  )
}
