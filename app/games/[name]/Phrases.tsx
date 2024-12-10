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
            <Flex direction="column" gap="1" key={phrase.irish}>
              {phrase.questions.map((phrase: any) => (
                <div key={phrase.english}>
                  <Phrase phrase={phrase} />
                </div>
              ))}
              {phrase.answers.map((phrase: any) => (
                <div key={phrase.english}>
                  <Phrase phrase={phrase} />
                </div>
              ))}
            </Flex>
          ))
        : phrases.map((phrase: any) => (
            <div key={phrase.english}>
              <Phrase phrase={phrase} />
            </div>
          ))}
    </Flex>
  );
};

export default Phrases;
