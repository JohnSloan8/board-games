import { Text } from "@radix-ui/themes";
import Phrases from "./Phrases";

interface gameStageProps {
  gameStage: string;
  gameStageData: any;
}

const GameStage = ({ gameStageData }: gameStageProps) => {
  const phraseTypes = Object.keys(gameStageData);
  return (
    <>
      {phraseTypes.map((phraseType) => (
        <div key={phraseType}>
          <Text size="2">{phraseType}</Text>
          <Phrases
            phrases={gameStageData[phraseType]}
            phraseType={phraseType}
          />
        </div>
      ))}
    </>
  );
};

export default GameStage;
