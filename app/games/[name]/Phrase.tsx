import PlayAudioButton from "./PlayAudioButton";
import { Avatar, Card, Flex, Inset, Text } from "@radix-ui/themes";

interface PhraseProps {
  phrase: any;
}
const Phrase = ({ phrase }: PhraseProps) => {
  const audioName = `${phrase.english.replace(/ /g, "_")}`;

  return (
    <Card variant="classic">
      <div className="w-full flex">
        {phrase.image !== undefined && (
          // <Avatar
          //   size="3"
          //   src={`/images/${phrase.image}`}
          //   radius="full"
          //   fallback="T"
          //   className="pr-2"
          // />
          <Inset clip="padding-box" side="left" pr="current">
            <img
              src={`/images/${phrase.image}`}
              alt="Bold typography"
              style={{
                display: "block",
                objectFit: "cover",
                width: "44px",
                height: "64px",
                backgroundColor: "var(--gray-5)",
              }}
            />
          </Inset>
        )}
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
      </div>
    </Card>
  );
};

export default Phrase;
