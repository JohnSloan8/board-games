import { Text } from "@radix-ui/themes";
import Phrases from "./Phrases";
import {
  MessageCircle,
  MessageCircleWarning,
  MessageCircleQuestion,
} from "lucide-react";

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
          {phraseType !== "statements" ? (
            phraseType === "orders" ? (
              <MessageCircleWarning className="mt-2 mb-1" />
            ) : (
              <MessageCircleQuestion className="mt-2 mb-1" />
            )
          ) : null}
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
