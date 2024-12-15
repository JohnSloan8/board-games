// import Link from "next/link";
import gamesData from "../games.json";
import basicsData from "../basics.json";
import GameTabs from "./GameTabs";

interface PageProps {
  params: Promise<any>;
}

export default async function Page({ params }: PageProps) {
  const { name } = await params;
  // @ts-ignore
  const gameData = await gamesData[name];
  const dictionary = gameData.dictionary;
  const stages = dictionary.stages;
  const items = dictionary.items;
  const basicsList = dictionary.basics;

  const basics: { [key: string]: { [key: string]: any[] } } = basicsData;
  const basicsForThisGame: Record<string, any> = {};
  basicsList.forEach((basic: string) => {
    basicsForThisGame[basic] = basics[basic];
  });

  return (
    <main className="flex-1 flex flex-col gap-1 px w-full">
      <div className="px-2 flex justify-center">
        <div className="font-medium text-xl mt-2">{name}</div>
      </div>
      <GameTabs basics={basics} items={items} stages={stages} />
    </main>
  );
}
