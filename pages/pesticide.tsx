// pages/index.js
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Pesticide() {
  const router = useRouter();

  const handleBackClick = () => {
    router.push("/"); // Or router.back() to go back in history
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <button
        onClick={handleBackClick} // Attach the navigation function to the onClick event
        className="text-4xl absolute left-0 top-0 ml-4 mt-4"
        aria-label="Back to home"
      >
        &#8592; 
      </button>
      <Head>
        <title>Start Building with Next.js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold mobile-text-size">
          Organic Pesticides
        </h1>

        <p className="mt-3 text-2xl pt-5">
          Grow Naturally, Protect Organically.
        </p>

        <div className="flex items-center justify-around w-full">
          <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <Image
              src="https://i.imgur.com/xpI4zN9.png" // The domain is now allowed in next.config.js
              alt="pesticide"
              width={256}
              height={144}
              layout="responsive" // This will make the image scale nicely to the parent element
            />

            <a className="inline-flex items-center mt-4 py-2 px-3 text-sm font-medium text-center text-white bg-purple-700 rounded-lg hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Start Inquiry
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
