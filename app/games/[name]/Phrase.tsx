import PlayAudioButton from "./PlayAudioButton";
import { Text } from "@radix-ui/themes";
import getSynthesis from "./getSynthesisAudio";
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
  console.log("phrase:", phrase);

  const audioName = `${phrase.english.replace(/ /g, "_")}`;
  console.log("audioName:", audioName);

  return (
    <div className="rounded-xl bg-white p-2 mb-2 shadow-lg w-full">
      <div className="w-full flex justify-between">
        <div className="flex flex-col justify">
          <Text size="3">{phrase.irish}</Text>
          <Text size="3" color="gray">
            {phrase.english}
          </Text>
        </div>
        <div className="flex items-center flex-row">
          <PlayAudioButton text={phrase.irish} audioName={audioName} />
        </div>
      </div>
    </div>
  );
};

export default Phrase;
