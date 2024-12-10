import { Flex, Text } from "@radix-ui/themes";
import Phrase from "./Phrase";

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
            <Flex direction="column" gap="1" key={crypto.randomUUID()}>
              {phrase.questions.map((phrase: any) => (
                <div key={crypto.randomUUID()}>
                  <Phrase phrase={phrase} phraseType={phraseType} />
                </div>
              ))}
              {phrase.answers.map((phrase: any) => (
                <div key={crypto.randomUUID()}>
                  <Phrase phrase={phrase} phraseType={phraseType} />
                </div>
              ))}
            </Flex>
          ))
        : phrases.map((phrase: any) => (
            <div key={crypto.randomUUID()}>
              <Phrase phrase={phrase} phraseType={phraseType} />
            </div>
          ))}
    </Flex>
  );
};

export default Phrases;
