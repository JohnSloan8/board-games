import PlayAudioButton from "./PlayAudioButton";
import { Card, Flex, Text } from "@radix-ui/themes";

interface PhraseProps {
  phrase: any;
}
const Phrase = ({ phrase }: PhraseProps) => {
  const audioName = `${phrase.english.replace(/ /g, "_")}`;

  return (
    <Card variant="classic">
      <div className="w-full flex justify-between">
        <div className="flex flex-col justify">
          <Text as="div" size="2" weight="bold">
            {phrase.irish}
          </Text>
          <Text as="div" color="gray" size="2">
            {phrase.english}
          </Text>
        </div>
        <div className="flex items-center flex-row">
          <PlayAudioButton text={phrase.irish} audioName={audioName} />
        </div>
      </div>
    </Card>
  );
};

export default Phrase;
