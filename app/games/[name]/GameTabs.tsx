import { Tabs, Box } from "@radix-ui/themes";
import GameStage from "./GameStage";

interface GameTabsProps {
  dictionaryData: any;
}

const GameTabs = ({ dictionaryData }: GameTabsProps) => {
  const gameStages = Object.keys(dictionaryData);

  return (
    <Tabs.Root defaultValue={gameStages[0]}>
      <Tabs.List wrap="wrap" justify="center">
        {gameStages.map((gameStage) => (
          <Tabs.Trigger value={gameStage} key={gameStage}>
            {gameStage}
          </Tabs.Trigger>
        ))}
      </Tabs.List>

      <Box pt="3">
        {gameStages.map((gameStage) => (
          <Tabs.Content value={gameStage} key={`${gameStage}`}>
            <GameStage
              gameStage={gameStage}
              gameStageData={dictionaryData[gameStage]}
            />
          </Tabs.Content>
        ))}
      </Box>
    </Tabs.Root>
  );
};

export default GameTabs;
