import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="fixed bottom-0 left-0 right-0 flex justify-between items-center w-full bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:bg-none">
        <Link href="/info">
          <div className="flex w-full justify-center gap-4x p-8 lg:static lg:h-auto lg:bg-none">
            Info
          </div>
        </Link>

        <Link href="/startup">
          <div className="flex place-items-center gap-4x p-8 lg:pointer-events-auto font-bold lg:p-0">

          TroutTech
            
          </div>
        </Link>

        <Link href="/contact">
          <div className="flex place-items-center gap-4x p-8 lg:pointer-events-auto lg:p-0">
            Contact Us
          </div>
        </Link>

      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/logo-gg.svg"
          alt="sgg logo"
          width={280}
          height={37}
          priority
        />
      </div>
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <Link href="/cheese">
          <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <h2 className="mb-3 text-2xl font-semibold">Cheese </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              Find in-depth information about Cheese
            </p>
          </div>
        </Link>
        <Link href="/soap">
          <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <h2 className="mb-3 text-2xl font-semibold">Soap </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              Learn about Soap in an Info!
            </p>
          </div>
        </Link>
        <Link href="/starter">
          <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <h2 className="mb-3 text-2xl font-semibold">Aquaponic Starter </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              Try our starter as organic fertilizer and explore how your plants
              will thrive!
            </p>
          </div>
        </Link>
        <Link href="/pesticide">
          <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <h2 className="mb-3 text-2xl font-semibold">Organic Pesticides </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              Pure Harvest: Safeguard Naturally
            </p>
          </div>
        </Link>
      </div>
    </main>
  );
}
