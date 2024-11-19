import { Text } from "@radix-ui/themes";
import Phrases from "./Phrases";

interface gameStageProps {
  gameStage: string;
  gameStageData: any;
}

const GameStage = ({ gameStage, gameStageData }: gameStageProps) => {
  const phraseTypes = Object.keys(gameStageData);
  return (
    <>
      {phraseTypes.map((phraseType) => (
        <div key={phraseType}>
          <Text size="2">{phraseType}</Text>
          <Phrases phrases={gameStageData[phraseType]} />
        </div>
      ))}
    </>
  );
};

export default GameStage;
