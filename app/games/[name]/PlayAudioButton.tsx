"use client";

// import { PlayIcon, StopIcon } from "@/icons";
import { PlayIcon, Square } from "lucide-react";

import { useRef, useState } from "react";

interface PlayAudioButtonProps {
  src: string | null;
  size?: number;
}

export default function PlayAudioButton({
  src,
  size = 24,
}: PlayAudioButtonProps) {
  const [audioPlaying, setAudioPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const playAudio = () => {
    if (audioRef.current !== undefined) {
      if (audioRef.current !== null) {
        void audioRef.current.play();
        setAudioPlaying(true);
      } else {
        console.log("audio.current === null");
      }
    } else {
      console.log("audio.current === undefined");
    }
  };

  const stopAudio = () => {
    if (audioRef.current !== undefined) {
      if (audioRef.current !== null) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        setAudioPlaying(false);
      } else {
        console.log("audio.current === null");
      }
    } else {
      console.log("audio.current === undefined");
    }
  };

  return (
    <div>
      {audioPlaying ? (
        <button
          className="w-7 h-7 flex justify-center items-center"
          onClick={stopAudio}
        >
          <Square />
        </button>
      ) : (
        <button
          className="w-7 h-7 flex justify-center items-center"
          onClick={playAudio}
        >
          <PlayIcon />
        </button>
      )}
      <audio src={src !== null ? src : ""} ref={audioRef} onEnded={stopAudio} />
    </div>
  );
}
