"use client";

// import { PlayIcon, StopIcon } from "@/icons";
import { PlayIcon, Square } from "lucide-react";
import Spinner from "@/components/Spinner";
import getSynthesis from "./getSynthesis";
import { useEffect, useRef, useState } from "react";

interface PlayAudioButtonProps {
  text: string;
  audioName: string;
}

export default function PlayAudioButton({
  text,
  audioName,
}: PlayAudioButtonProps) {
  const [firstRender, setFirstRender] = useState(true);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [gettingSynthesis, setGettingSynthesis] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [audioURL, setAudioURL] = useState<string | null>(
    `${process.env.NEXT_PUBLIC_SUPABASE_URL}${process.env.NEXT_PUBLIC_AUDIO_STORAGE_PATH}${audioName}.mp3`
  );

  const playAudio = () => {
    if (audioRef.current !== undefined) {
      if (audioRef.current !== null) {
        try {
          void audioRef.current.play().catch((error) => {
            console.log("gettingSynthesis");
            setGettingSynthesis(true);
            setAudioURL(null);
            getSynthesis(text, audioName).then(() => {
              setGettingSynthesis(false);
              setAudioURL(
                `${process.env.NEXT_PUBLIC_SUPABASE_URL}${process.env.NEXT_PUBLIC_AUDIO_STORAGE_PATH}${audioName}.mp3`
              );
            });
          });
          setAudioPlaying(true);
        } catch {
          console.log("playAudio error");
        }
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

  useEffect(() => {
    if (firstRender) {
      setFirstRender(false); // Skip the first render
      return;
    }
    if (audioRef.current !== undefined) {
      if (audioRef.current !== null) {
        void audioRef.current.play().catch((error) => {
          console.log("error", error);
        });
      }
    }
  }, [audioURL]);

  return (
    <div>
      {gettingSynthesis ? (
        <Spinner />
      ) : audioPlaying ? (
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
      <audio src={audioURL} ref={audioRef} onEnded={stopAudio} />
    </div>
  );
}
