import { useAudio } from "@/hooks/useAudio";
import { AudioSrc } from "@/types";
import styles from '@/styles/Party.module.css';
import hoverStyles from '@/styles/Hover.module.css';

export function AudioOverlay() {
  const audioSrc = AudioSrc.Vengaboys;
  const { isPlaying, play, stop, } = useAudio();

  const onClick = () => isPlaying
    ? stop()
    : play(audioSrc);

  return (
    <aside className={[styles.audio, hoverStyles.hover].join(' ')}>
      <button onClick={onClick}>
        {isPlaying ? 'ON' : 'OFF'}
      </button>
    </aside>
  );
}
