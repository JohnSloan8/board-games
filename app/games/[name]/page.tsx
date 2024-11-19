import Link from "next/link";
import gamesData from "../games.json";
import GameTabs from "./GameTabs";

interface PageProps {
  params: { name: string };
}

export default async function Page({ params }: PageProps) {
  const { name } = await params;
  const data = gamesData[name];

  return (
    <>
      <main className="flex-1 flex flex-col gap-6 px-4">
        <h2 className="font-medium text-xl mb-4">{name}</h2>
        <h3 className="font-medium text-md mb-4">{data.description}</h3>
        {/* {data.dictionary.map()} */}

        <GameTabs dictionaryData={data.dictionary} />

        <Link href="/games">All Games</Link>
      </main>
    </>
  );
}
