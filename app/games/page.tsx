import Link from "next/link";

export default async function Index() {
  return (
    <>
      <main className="flex-1 flex flex-col gap-6 px-4">
        <h2 className="font-medium text-xl mb-4">Games</h2>
        <Link href="/games/Catan">Catan</Link>
        <Link href="/games/Bohnanza">Bohnanza</Link>
      </main>
    </>
  );
}
