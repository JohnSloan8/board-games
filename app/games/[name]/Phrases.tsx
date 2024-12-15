import { Flex, Text } from "@radix-ui/themes";
import Phrase from "./Phrase";
import { v4 as uuidv4 } from "uuid";

interface PhrasesProps {
  phrases: any;
  phraseType: string;
}

const Phrases = ({ phrases, phraseType }: PhrasesProps) => {
  console.log("phraseType:", phraseType);

  return (
    <Flex direction="column" gap="3">
      {phraseType === "Q&A"
        ? phrases.map((phrase: any) => (
            <Flex direction="column" gap="1" key={uuidv4()}>
              {phrase.questions.map((phrase: any) => (
                <div key={uuidv4()} className="bg-blue-200 rounded-xl">
                  <Phrase phrase={phrase} />
                </div>
              ))}
              {phrase.answers.map((phrase: any) => (
                <div key={uuidv4()} className="bg-amber-200 rounded-xl">
                  <Phrase phrase={phrase} />
                </div>
              ))}
            </Flex>
          ))
        : phrases.map((phrase: any) => (
            <div key={uuidv4()}>
              <Phrase phrase={phrase} />
            </div>
          ))}
    </Flex>
  );
};

export default Phrases;
