import PlayAudioButton from "./PlayAudioButton";
import { Text } from "@radix-ui/themes";
import getSynthesis from "./getSynthesis";
import { useEffect } from "react";
import type { Dispatch, SetStateAction } from "react";

// import { useEffect, useState } from "react";
// import getSynthesis from "@/app/actions/phrases/getSynthesis";
interface PhraseProps {
  phrase: any;
}
const Phrase = ({ phrase }: PhraseProps) => {
  // useEffect(() => {
  //   const updateSynthesis = async () => {
  //     await getSynthesis(String(phrase.irish));
  //   };

  // console.log("phrase.p_audio_data:", phrase.p_audio_data);
  // if (phrase.p_audio_data === null) {
  //   void updateSynthesis();
  // }
  // }, []);

  return (
    <div className="rounded-xl bg-white p-2 mb-2 shadow-lg w-full">
      <div className="w-full justify-center flex ">
        <div className="grow">
          <Text size="2">{phrase.irish}</Text>
          <Text size="2">{phrase.english}</Text>
        </div>
        <div className="flex items-center flex-row">
          <PlayAudioButton
            src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}${process.env.NEXT_PUBLIC_AUDIO_STORAGE_PATH}${phrase.irish.replace(/ /g, "_")}.mp3`}
          />
        </div>
      </div>
    </div>
  );
};

export default Phrase;
