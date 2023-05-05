import styles from '@/styles/Splash.module.css';
import { WelcomePreview } from './WelcomePreview';
import { Settings } from '@/types';
import { useState } from 'react';
import rainbowStyles from '@/styles/Rainbow.module.css';

export function Splash(props: {
  settings: Settings;
  onConfirm(): void;
}) {
  const [play, setPlay] = useState(false);

  return (
    <div className={[styles.welcome, rainbowStyles.rainbow].join(' ')}>
      <main className={styles.instructions}>
        <div>
          <WelcomePreview settings={props.settings} />
        </div>
        <div>
          hover your mouse in the bottom right corner for options
        </div>
        {/* <div>
          play music?
          <Slider checked={play} onClick={checked => setPlay(checked)} />
        </div> */}
        <div>
          <button className={rainbowStyles.hoverbow} onClick={props.onConfirm}>
            LET THE PARTY BEGIN
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
