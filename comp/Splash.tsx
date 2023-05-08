import styles from '@/styles/Splash.module.css';
import { WelcomePreview } from './WelcomePreview';
import { Settings } from '@/types';
import rainbowStyles from '@/styles/Rainbow.module.css';
import { Dispatch, SetStateAction } from 'react';

export function Splash(props: {
  settings: Settings;
  setShowOverlay: Dispatch<SetStateAction<boolean>>;
  onConfirm(): void;
}) {
  return (
    <div className={[styles.welcome, rainbowStyles.rainbow].join(' ')} onClick={() => props.setShowOverlay(false)}>
      <main className={styles.instructions}>
        <div onClick={e => { e.stopPropagation(); props.setShowOverlay(b => !b); }}>
          <WelcomePreview settings={props.settings} />
        </div>
        <div className="desktop">
          click the man for options
        </div>
        <div className="mobile">
          tap the man for options
        </div>
        <div>
          <button className={rainbowStyles.hoverbow} onClick={props.onConfirm}>
            PARTY TIME
          </button>
        </div>
        <div style={{ fontStyle: 'italic', }}>
          <div>
            {' a silly thing made by '}
            <a href="https://twitter.com/mpaulweeks">@mpaulweeks</a>
          </div>
          <div>
            {' with artwork by '}
            <a href="http://instagram.com/amyjxu">@amyjxu</a>
          </div>
        </div>
      </main>
    </div>
  );
}
