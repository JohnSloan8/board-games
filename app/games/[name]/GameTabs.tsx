import { Flex, Tabs, Box } from "@radix-ui/themes";
import GameStage from "./GameStage";

interface GameTabsProps {
  dictionaryData: any;
}

const GameTabs = ({ dictionaryData }: GameTabsProps) => {
  const gameStages = Object.keys(dictionaryData);

  return (
    <Flex direction="column" gap="4" pb="2">
      <Tabs.Root defaultValue={gameStages[0]}>
        <Tabs.List>
          {gameStages.map((gameStage) => (
            <Tabs.Trigger value={gameStage} key={gameStage}>
              {gameStage}
            </Tabs.Trigger>
          ))}
        </Tabs.List>

        <Box pt="3">
          {gameStages.map((gameStage) => (
            <Tabs.Content value={gameStage} key={`${gameStage}-1`}>
              <GameStage
                gameStage={gameStage}
                gameStageData={dictionaryData[gameStage]}
              />
            </Tabs.Content>
          ))}
          {/* <Tabs.Content value="plant">
            <Text size="2">Make changes to your account.</Text>
          </Tabs.Content>

          <Tabs.Content value="documents">
            <Text size="2">Access and update your documents.</Text>
          </Tabs.Content>

          <Tabs.Content value="settings">
            <Text size="2">
              Edit your profile or update contact information.
            </Text>
          </Tabs.Content> */}
        </Box>
      </Tabs.Root>
    </Flex>
  );
};

export default GameTabs;
