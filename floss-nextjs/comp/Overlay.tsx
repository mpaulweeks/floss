import { AnimationDance, AnimationLayout, AudioSrc, Settings, defaultSettings } from "@/types";
import { Dispatch, SetStateAction } from "react";
import styles from '@/styles/Overlay.module.css';
import hoverStyles from '@/styles/Hover.module.css';
import { useAudio } from "@/hooks/useAudio";

export function Overlay(props: {
  settings: Settings;
  setSettings: Dispatch<SetStateAction<Settings>>;
}) {
  const audioSrc = AudioSrc.Vengaboys;
  const { isPlaying, play, stop, } = useAudio();
  const onAudioClick = () => isPlaying
    ? stop()
    : play(audioSrc);

  return (
    <section className={[styles.overlay, hoverStyles.hover].join(' ')}>
      <div>
        {'audio: '}
        <button onClick={onAudioClick}>
          {isPlaying ? 'ON' : 'OFF'}
      </button>
      </div>
      <div>
        <button onClick={() => props.setSettings(s => ({
          ...s,
          dance: AnimationDance.Floss,
        }))}>
          floss
        </button>
        <button onClick={() => props.setSettings(s => ({
          ...s,
          dance: AnimationDance.Shuffle,
        }))}>
          shuffle
        </button>
      </div>
      <div>
        <button onClick={() => props.setSettings(s => ({
          ...s,
          layout: AnimationLayout.Row
        }))}>
          row
        </button>
        <button onClick={() => props.setSettings(s => ({
          ...s,
          layout: AnimationLayout.Column
        }))}>
          col
        </button>
        <button onClick={() => props.setSettings(s => ({
          ...s,
          layout: AnimationLayout.Twirl
        }))}>
          twirl
        </button>
      </div>
      <div>
        {props.settings.count}
        <button onClick={() => props.setSettings(s => ({
          ...s,
          count: Math.max(1, s.count - 1),
        }))}>
          fewer
        </button>
        <button onClick={() => props.setSettings(s => ({
          ...s,
          count: defaultSettings().count,
        }))}>
          reset
        </button>
        <button onClick={() => props.setSettings(s => ({
          ...s,
          count: Math.min(10, s.count + 1),
        }))}>
          more
        </button>
      </div>
      <div>
        {props.settings.danceSpeed}
        <button onClick={() => props.setSettings(s => ({
          ...s,
          danceSpeed: Math.max(0, s.danceSpeed - 1),
        }))}>
          dance slow
        </button>
        <button onClick={() => props.setSettings(s => ({
          ...s,
          danceSpeed: defaultSettings().danceSpeed,
        }))}>
          reset
        </button>
        <button onClick={() => props.setSettings(s => ({
          ...s,
          danceSpeed: Math.min(10, s.danceSpeed + 1),
        }))}>
          dance fast
        </button>
      </div>
      <div>
        {props.settings.moveSpeed}
        <button onClick={() => props.setSettings(s => ({
          ...s,
          moveSpeed: Math.max(1, s.moveSpeed - 1),
        }))}>
          move slow
        </button>
        <button onClick={() => props.setSettings(s => ({
          ...s,
          moveSpeed: defaultSettings().moveSpeed,
        }))}>
          reset
        </button>
        <button onClick={() => props.setSettings(s => ({
          ...s,
          moveSpeed: Math.min(10, s.moveSpeed + 1),
        }))}>
          move fast
        </button>
      </div>
    </section>
  )
}
