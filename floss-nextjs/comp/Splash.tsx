import styles from '@/styles/Splash.module.css';
import { WelcomePreview } from './WelcomePreview';
import { Settings } from '@/types';

export function Splash(props: {
  settings: Settings;
  onConfirm(): void;
}) {
  return (
    <div className={styles.welcome}>
      <main className={styles.instructions}>
        <div>
          <WelcomePreview settings={props.settings} />
        </div>
        <div>
          hover your mouse in the bottom right corner for options
        </div>
        <div>
          play music?
          <label id="toggleMusic" className={styles.switch}>
            <input id="musicCheckbox" type="checkbox" />
            <span className={[styles.slider, styles.round].join(' ')}></span>
          </label>
        </div>
        <div>
          <button onClick={props.onConfirm}>
            LET THE PARTY BEGIN
          </button>
        </div>
        <div>
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
