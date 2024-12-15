import Link from "next/link";
import gamesData from "./games/games.json";
import GameCard from "@/components/game-card";

export default async function Index() {
  const data = await gamesData;
  const gameNames = Object.keys(data);
  return (
    <>
      <main className="flex-1 flex flex-col gap-6 px-4">
        <h2 className="font-medium text-xl mt-4 text-center">Games</h2>
        {gameNames.map((gameName: any) => (
          // @ts-ignore
          <GameCard
            key={gameName}
            title={gameName}
            // @ts-ignore
            description={data[gameName].description}
            // @ts-ignore
            image={data[gameName].image}
          />
        ))}
      </main>
    </>
  );
}
