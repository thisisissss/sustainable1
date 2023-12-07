// pages/index.js
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Soap() {
  const router = useRouter();

  const handleBackClick = () => {
    router.push("/"); // Or router.back() to go back in history
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen py-2"
      style={{ paddingTop: "50px" }}
    >
      {" "}
      {/* Added padding to the top */}
      <button
        onClick={handleBackClick} // Attach the navigation function to the onClick event
        className="text-4xl absolute left-0 top-0 ml-4 mt-4"
        aria-label="Back to home"
      >
        &#8592; {/* HTML entity for left arrow */}
      </button>
      <Head>
        <title>Organic Soap</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-4xl font-bold mobile-text-size">
          Pure Bliss Natural Soap: Nourishing Nature&apos;s Touch
        </h1>

        <p className="mt-3 text-2xl pt-5">
          No more vaseline.<br></br> No more petroleum and pore-clogging
          products
        </p>

        <div className="flex items-center justify-around w-full mt-20">
          <div className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <Image
              src="https://i.imgur.com/V9gjKHh.jpg"
              alt="Learn Next.js"
              width={256}
              height={144}
              layout="responsive"
            />

            <a className="inline-flex items-center mt-4 py-2 px-3 text-sm font-medium text-center text-white bg-purple-700 rounded-lg hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Start Inquiry
            </a>
          </div>
        </div>
      </main>
     
          <div className="text-center m-16 px-10 lg:px-32 justify-around bg-white rounded-lg border border-gray-200  shadow-md dark:bg-gray-800 dark:border-gray-700">
            <p className="mt-12 mb-4">
              Embrace the gentle touch of nature with Pure Bliss Natural Soap.
              Our commitment to purity begins with a steadfast refusal to use
              petroleum-derived products like vaseline, ensuring your skin is
              nurtured without compromising its natural balance. Our soap is a
              testament to the power of simplicity, crafted with only the finest
              natural ingredients. Unlike vaseline and other petroleum-based
              products, which can clog pores and disrupt skin&apos;s natural
              function, our natural soap offers a harmonious blend of nurturing
              elements.
            </p>
            <h2 className="text-2xl font-semibold">
              The Science of Petroleum Products and Skin Health:
            </h2>
            <p className="mt-4 mb-4">
              Petroleum-based products, such as vaseline, are known to create a
              barrier on the skin. This barrier can trap dirt and bacteria,
              leading to clogged pores, skin irritation, and potentially
              exacerbating skin conditions. Furthermore, the occlusive nature of
              petroleum can disrupt the skin&apos;s ability to breathe and
              regulate itself, potentially leading to imbalances in skin
              moisture and health.
            </p>
            <h2 className="text-2xl font-semibold">
              Why Natural Ingredients Matter:
            </h2>
            <p className="mt-4 mb-4">
              In contrast, Pure Bliss Natural Soap features a blend of cocoa
              butter, virgin oils, and NaOH lye. Cocoa butter, renowned for its
              hydrating and nourishing properties, works in harmony with
              carefully selected virgin oils to replenish and rejuvenate your
              skin. The NaOH lye, essential in the soap-making process,
              undergoes a transformation when combined with oils, resulting in a
              product that is absolutely harmless and gentle on the skin.
            </p>
            <h2 className="text-2xl font-semibold">The Magic of Pure Bliss:</h2>
            <p className="mt-4 mb-4">
              This fusion of natural ingredients creates a luxurious lather that
              cleanses effectively while respecting the skin&apos;s natural
              barrier. The absence of artificial fragrances further ensures that
              your skin enjoys the purest form of care, making Pure Bliss
              Natural Soap a genuine celebration of nature&apos;s magic.
              Experience the allure of simplicity and purity with Pure Bliss
              Natural Soap – where every lather is a step closer to
              nature&apos;s embrace.
            </p>
            <p className="mt-4 mb-12">
              Join us on a journey of taste, tradition, and natural goodness.
              Experience the difference with our artisanal cheeses, where every
              bite tells a story of quality, purity, and a gentle touch.
            </p>
          </div>
        </div>

  );
}
