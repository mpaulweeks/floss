import { AUDIO } from "@/lib/audio";
import { AudioSrc } from "@/types";
import { useCallback, useEffect, useState } from "react";

export function useAudio() {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    AUDIO.init();
  }, []);

  useEffect(() => {
    const unsub = AUDIO.sub({ setIsPlaying });
    return unsub;
  }, [setIsPlaying]);

  const play = useCallback((src: AudioSrc) => {
    AUDIO.play(src);
  }, []);
  const stop = useCallback(() => {
    AUDIO.stop();
  }, []);

  return { isPlaying, play, stop, };
}
