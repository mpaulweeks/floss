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
        <p>
          hover your mouse in the bottom right corner for options
        </p>
        <p>
          play music?
          <label id="toggleMusic" className={styles.switch}>
            <input id="musicCheckbox" type="checkbox" />
            <span className={[styles.slider, styles.round].join(' ')}></span>
          </label>
        </p>
        <p>
          <button onClick={props.onConfirm}>
            LET THE PARTY BEGIN
          </button>
        </p>
        <p>
          a silly thing made by
          <a href="https://twitter.com/mpaulweeks">@mpaulweeks</a>
          <br/>with artwork by
          <a href="http://instagram.com/amyjxu">@amyjxu</a>
        </p>
      </main>
    </div>
  );
}
