// import Link from "next/link";
import gamesData from "../games.json";
import GameTabs from "./GameTabs";

interface PageProps {
  params: { name: string };
}

export default async function Page({ params }: PageProps) {
  const { name } = await params;
  // @ts-ignore
  const data = gamesData[name];

  return (
    <main className="flex-1 flex flex-col gap-1 px w-full">
      <div className="px-2 flex justify-center">
        <div className="font-medium text-xl mt-2">{name}</div>
      </div>
      <GameTabs dictionaryData={data.dictionary} />
    </main>
  );
}
