"use client";
import { Tabs, Box } from "@radix-ui/themes";
import { useState } from "react";
import GameStage from "./GameStage";

interface GameTabsProps {
  basics: any;
  items: any;
  stages: any;
}

const GameTabs = ({ basics, items, stages }: GameTabsProps) => {
  const basicsNames = Object.keys(basics);
  const itemsNames = Object.keys(items);
  const stagesNames = Object.keys(stages);
  const rowOne = ["basics", "items", "stages"];

  const [currentRowOne, setCurrentRowOne] = useState<string>("basics");
  const [currentBasic, setCurrentBasic] = useState<string>(basicsNames[0]);
  const [currentItem, setCurrentItem] = useState<string>(itemsNames[0]);
  const [currentStage, setCurrentStage] = useState<string>(stagesNames[0]);

  return (
    <Tabs.Root
      value={currentRowOne}
      onValueChange={(value) => setCurrentRowOne(value)}
    >
      <Tabs.List wrap="wrap" justify="center">
        {rowOne.map((rowOneName) => (
          <Tabs.Trigger value={rowOneName} key={rowOneName}>
            {rowOneName}
          </Tabs.Trigger>
        ))}
      </Tabs.List>

      {currentRowOne === "basics" && (
        <Tabs.Root
          value={currentBasic}
          onValueChange={(value) => setCurrentBasic(value)}
        >
          <Tabs.List wrap="wrap" justify="center">
            {basicsNames.map((basicName: any) => (
              <Tabs.Trigger value={basicName} key={basicName}>
                {basicName}
              </Tabs.Trigger>
            ))}
          </Tabs.List>

          <Box pt="3">
            {basicsNames.map((basicName: any) => (
              <Tabs.Content value={basicName} key={`${basicName}`}>
                <GameStage
                  gameStage={basicName}
                  gameStageData={basics[basicName]}
                />
              </Tabs.Content>
            ))}
          </Box>
        </Tabs.Root>
      )}

      {currentRowOne === "items" && (
        <Tabs.Root
          value={currentItem}
          onValueChange={(value) => setCurrentItem(value)}
        >
          <Tabs.List wrap="wrap" justify="center">
            {itemsNames.map((itemName: any) => (
              <Tabs.Trigger value={itemName} key={itemName}>
                {itemName}
              </Tabs.Trigger>
            ))}
          </Tabs.List>

          <Box pt="3">
            {itemsNames.map((itemName: any) => (
              <Tabs.Content value={itemName} key={`${itemName}`}>
                <GameStage
                  gameStage={itemName}
                  gameStageData={items[itemName]}
                />
              </Tabs.Content>
            ))}
          </Box>
        </Tabs.Root>
      )}

      {currentRowOne === "stages" && (
        <Tabs.Root
          value={currentStage}
          onValueChange={(value) => setCurrentStage(value)}
        >
          <Tabs.List wrap="wrap" justify="center">
            {stagesNames.map((stageName: any) => (
              <Tabs.Trigger value={stageName} key={stageName}>
                {stageName}
              </Tabs.Trigger>
            ))}
          </Tabs.List>

          <Box pt="3">
            {stagesNames.map((stageName: any) => (
              <Tabs.Content value={stageName} key={`${stageName}`}>
                <GameStage
                  gameStage={stageName}
                  gameStageData={stages[stageName]}
                />
              </Tabs.Content>
            ))}
          </Box>
        </Tabs.Root>
      )}
    </Tabs.Root>
  );
};

export default GameTabs;
