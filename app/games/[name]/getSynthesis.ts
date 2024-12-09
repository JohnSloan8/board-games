"use server";
import { createClient } from "@/utils/supabase/server";

import { getSynthesisAudio, base64ToMp3 } from "./utils";

const getSynthesis = async (text: string, url: string) => {
  const supabase = await createClient();

  const audioData: string = await getSynthesisAudio(text);
  const mp3Blob = base64ToMp3(audioData);

  console.log("getting synthesis");

  const { data, error } = await supabase.storage
    .from("audio")
    .upload(`${url}.mp3`, mp3Blob, {
      contentType: "audio/mpeg",
    });

  error !== null && console.log("error:", error);

  return false;
};

export default getSynthesis;
