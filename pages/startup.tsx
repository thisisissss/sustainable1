// pages/startup.tsx
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

export default function Startup() {
  return (
    <div>
      <header className="flex flex-col sm:flex-row justify-between items-center bg-white py-4 px-4 sm:px-8">
        <div className="flex justify-between items-center w-full sm:w-auto mb-4 sm:mb-0">
          <Link href="/">
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src="/logo-gg.svg"
              alt="sgg logo"
              width={250}
              height={50}
              priority
            />
          </Link>{" "}
        </div>
        <nav>
          <ul className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <li>
              <Link href="#about">
                <div className="text-gray-600 hover:text-green-500">About</div>
              </Link>
            </li>
            <li>
              <Link href="#portfolio">
                <div className="text-gray-600 hover:text-green-500">
                  Portfolio
                </div>
              </Link>
            </li>
            <li>
              <Link href="#testimonials">
                <div className="text-gray-600 hover:text-green-500">
                  Testimonials
                </div>
              </Link>
            </li>
          </ul>
        </nav>
        <button className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
          Submit Your Request
        </button>
      </header>
      <section className="wave-bg text-white">
        <Image
          src="https://i.imgur.com/cSiE2hx.jpg"
          layout="fill"
          objectFit="cover"
          quality={100}
          alt="Background"
          className="z-0"
        />
        <div className="wave-shape"></div>
        <div className="relative z-10 px-4">
          <h1 className="text-5xl font-bold">Invest in Thai Trout Farming.</h1>
          <p className="text-md sm:text-xl mt-4">
            {" "}
            Explore a lucrative opportunity to support natural farming and
            premium-quality trout production in Thailand.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-10 sm:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-lg sm:text-xl text-green-600 font-montserrat">
              ABOUT TROUT RAISING
            </h2>
            <h2 className="text-xl sm:text-2xl text-black mt-4 mb-4 font-bold px-10 sm:px-40 text-center font-sans">
              Nurturing Nature&apos;s Finest, Crafting Aquatic Excellence.
            </h2>
            <hr className="border-0 bg-green-500 h-1 w-24 mx-auto my-4" />
            <p className="text-sm sm:text-md mt-4 px-8 sm:px-40 text-center text-gray-600">
              At the heart of Thailand&lsquo;s lush landscapes lies a burgeoning
              opportunity for sustainable trout farming. Our approach to trout
              raising marries traditional knowledge with modern aquaculture
              techniques to create a synergy that not only yields high-quality
              trout but also honors and preserves the natural environment.
            </p>
          </div>

          <div className="relative flex flex-row flex-nowrap -m-4 justify-center">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Image
                src="/leaves.png" // Replace with your image path
                alt="Leaf icon"
                width={80} // Set the width as needed
                height={80} // Set the height as needed
                className="mb-4" // Adjust margin as needed
              />
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="shadow-lg rounded-lg p-6 border-t-4 border-green-500">
                <h3 className="text-xl text-green-600 font-montserrat text-center mb-3">
                  WE ARE LOOKING FOR
                </h3>
                <ul className="list-disc text-sm text-gray pl-5 space-y-2">
                  <li>Sustainable practices</li>
                  <li>
                    Mimicking natural trout habitats to reduce energy usage.
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="shadow-lg rounded-lg p-6 border-t-4 border-green-500">
                <h3 className="text-xl text-green-600 font-montserrat text-center mb-3">
                  OUR APPROACH
                </h3>
                <ul className="list-disc text-sm text-gray pl-5 space-y-2">
                  <li>
                    Feeding trout with locally-sourced, non-GMO ingredients.
                  </li>
                  <li>
                    Supporting local agriculture for a distinctive flavor
                    profile.
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="shadow-lg rounded-lg p-6 border-t-4 border-green-500">
                <h3 className="text-xl text-green-600 font-montserrat text-center mb-3">
                  OUR FIRST SUCCESSFUL BUSINESS
                </h3>
                <ul className="list-disc text-sm text-gray pl-5 space-y-2">
                  <li>
                    Designing ponds to emulate natural trout environments.
                  </li>
                  <li>
                    Creating conditions that promote healthy growth and lower
                    stress.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="bg-white py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center m-8">Portfolio</h2>
          <div className="grid grid-cols-3 gap-4">
            {/* Image 1 */}
            <div>
              <Image
                src="https://i.imgur.com/e8NKWw8.jpg?1"
                alt="Description"
                width={50} // Set the width as needed
                height={50} // Set the height as needed
                layout="responsive"
              />
            </div>
            {/* Image 2 */}
            <div>
              <Image
                src="https://i.imgur.com/f1o3hld.jpg?2"
                alt="Description"
                width={100}
                height={100}
                layout="responsive"
              />
            </div>
            {/* Image 3 */}
            <div>
              <Image
                src="https://i.imgur.com/JRiIdby.jpg"
                alt="Description"
                width={100}
                height={100}
                layout="responsive"
              />
            </div>
            {/* Image 4 */}
            <div>
              <Image
                src="https://i.imgur.com/wMjeObC.jpg"
                alt="Description"
                width={100}
                height={100}
                layout="responsive"
              />
            </div>
            {/* Image 5 */}
            <div>
              <Image
                src="https://i.imgur.com/Slyharb.jpg"
                alt="Description"
                width={100}
                height={100}
                layout="responsive"
              />
            </div>
            {/* Image 6 */}
            <div>
              <Image
                src="https://i.imgur.com/hCu3O3U.jpg"
                alt="Description"
                width={100}
                height={100}
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
            Main Feature: Aquaponic System
          </h2>
          <hr className="border-0 bg-green-500 h-1 w-24 mx-auto my-4" />

          <div className="text-center mb-8 sm:mb-12 sm:mt-8 px-4 sm:px-10 md:px-20 lg:px-40">
            <p className="text-lg sm:text-xl mb-4 sm:mb-6">
              We&apos;re pioneering the integration of aquaponics with trout
              farming to enhance water quality and create a sustainable
              ecosystem.
            </p>
            <p className="text-xl mb-6">
              Our innovative approach includes the use of advanced sensors to
              continuously monitor water conditions, ensuring the health and
              growth of our trout are always optimal.
            </p>
            <p className="text-xl mb-6">
              With a commitment to sustainability, we&apos;re developing an
              automated system designed to maintain balance and reduce manual
              intervention, further solidifying our position at the forefront of
              aquaculture technology.
            </p>
            <p className="text-xl">
              Leveraging our extensive experience in fish nutrition, we plan to
              produce high-quality, nutrient-rich fish food in-house, tailored
              specifically to the needs of our trout.
            </p>
            <hr className="border-0 bg-green-500 h-1 w-24 mx-auto my-4" />

            <div className="text-center text-xl mb-12 mt-8 px-4 sm:px-8 md:px-20 lg:px-40">
              <ul className="list-none">
                <li className="mb-4">
                  <span className="text-green-500 mr-2">✔</span>
                  Monitoring the system - Utilizing advanced sensors to
                  continuously monitor water conditions, ensuring optimal health
                  and growth for our trout.
                </li>
                <li className="mb-4">
                  <span className="text-green-500 mr-2">✔</span>
                  Automated balance - Developing an automated system to maintain
                  environmental balance, reducing the need for manual
                  intervention.
                </li>
                <li className="mb-4">
                  <span className="text-green-500 mr-2">✔</span>
                  In-house nutrition - Crafting high-quality, nutrient-rich fish
                  food using our extensive experience in fish nutrition,
                  tailored specifically for trout.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CSR Section */}
      <section className="py-20 bg-green-500 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center">
            Corporate Social Responsibility
          </h2>
          {/* ... */}
        </div>
      </section>
      {/* Footer here */}
    </div>
  );
}
