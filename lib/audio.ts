import { AudioSrc } from "@/types";

interface AudioSub {
  setIsPlaying: (isPlaying: boolean) => void;
}

export const AUDIO = new (class AudioManager {
  private readonly cache = new Map<AudioSrc, HTMLAudioElement>();
  private current: {
    src: AudioSrc;
    elm: HTMLAudioElement;
  } | undefined;
  private readonly subscribers = new Map<number, AudioSub>();
  private counter = 0;
  get src() { return this.current?.src; }

  init() {
    const audioSrc = window.localStorage.getItem('audio');
    if (audioSrc) {
      this.play(audioSrc as AudioSrc);
    }
  }

  private load(src: AudioSrc) {
    if (src === this.current?.src) { return; }
    const elm = this.cache.get(src) ?? new Audio(src);
    this.cache.set(src, elm);
    this.current = { src, elm, };
  }
  play(src: AudioSrc) {
    this.load(src);
    if (this.current) {
      this.current.elm.play();
      localStorage.setItem('audio', this.current.src);
    }
    this.broadcast();
  }
  stop() {
    this.current?.elm.pause();
    this.current = undefined;
    localStorage.removeItem('audio');
    this.broadcast();
  }

  broadcast() {
    Array.from(this.subscribers.values()).forEach(si => {
      si.setIsPlaying(!!this.current);
    });
  }
  sub(subinfo: AudioSub): () => void {
    const id = this.counter++;
    this.subscribers.set(id, subinfo);
    this.broadcast();
    return () => this.subscribers.delete(id);
  }
})();
