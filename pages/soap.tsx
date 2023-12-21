// pages/index.js
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function Soap() {
  const router = useRouter();

  const [isPopupOpen, setPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });

  const handleBackClick = () => {
    router.push("/"); // Or router.back() to go back in history
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted", formData); // Check if this logs when you click the button

    const data = {
        name: formData.name,
        phone: formData.phone,
        pageIdentifier: "SoapPage", // or any other identifier you wish to use
      };
        // Send a POST request to the API route
  try {
    const response = await fetch('/api/inquiry', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const responseData = await response.json();
      console.log(responseData.message);
      setPopupOpen(false); // Close the popup after successful submission
    } else {
      // Handle HTTP errors
      console.error("Failed to submit inquiry", response.status);
    }
  } catch (error) {
    console.error("Error submitting form", error);
  }
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
              alt="Soap"
              width={256}
              height={144}
              objectFit="cover"
              layout="responsive"
            />
            <button
              className="inline-flex items-center mt-4 py-2 px-3 text-sm font-medium text-center text-white bg-purple-700 rounded-lg hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={() => setPopupOpen(true)}
            >
              Start Inquiry
            </button>
          </div>
        </div>
      </main>
      <div className="relative text-center m-16 px-10 lg:px-32 justify-around rounded-lg border border-gray-200 shadow-md dark:border-gray-700">
        <Image
          src="https://i.imgur.com/2yz6DIr.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          style={{ opacity: 0.4 }}
        />
        <div className="relative z-10 p-4">
          <p className="mt-12 mb-4 from-stone-50">
            Embrace the gentle touch of nature with Pure Bliss Natural Soap. Our
            commitment to purity begins with a steadfast refusal to use
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
            regulate itself, potentially leading to imbalances in skin moisture
            and health.
          </p>
          <h2 className="text-2xl font-semibold">
            Why Natural Ingredients Matter:
          </h2>
          <p className="mt-4 mb-4">
            In contrast, Pure Bliss Natural Soap features a blend of cocoa
            butter, virgin oils, and NaOH lye. Cocoa butter, renowned for its
            hydrating and nourishing properties, works in harmony with carefully
            selected virgin oils to replenish and rejuvenate your skin. The NaOH
            lye, essential in the soap-making process, undergoes a
            transformation when combined with oils, resulting in a product that
            is absolutely harmless and gentle on the skin.
          </p>
          <h2 className="text-2xl font-semibold">The Magic of Pure Bliss:</h2>
          <p className="mt-4 mb-4">
            This fusion of natural ingredients creates a luxurious lather that
            cleanses effectively while respecting the skin&apos;s natural
            barrier. The absence of artificial fragrances further ensures that
            your skin enjoys the purest form of care, making Pure Bliss Natural
            Soap a genuine celebration of nature&apos;s magic. Experience the
            allure of simplicity and purity with Pure Bliss Natural Soap – where
            every lather is a step closer to nature&apos;s embrace.
          </p>
          <p className="mt-4 mb-12">
            Join us on a journey of taste, tradition, and natural goodness.
            Experience the difference with our artisanal cheeses, where every
            bite tells a story of quality, purity, and a gentle touch.
          </p>
        </div>
      </div>
      {isPopupOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 overflow-y-auto h-full w-full"
          id="my-modal"
        >
          <div className="relative top-20 mx-auto p-10 border w-96 shadow-lg rounded-md bg-white">
            <form className="mt-2" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-2 border rounded mb-3"
                required
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full p-2 border rounded mb-3"
                required
              />
              <input type="hidden" name="pageIdentifier" value="SoapPage" />

              <div className="mt-8 flex justify-center space-x-4">
                <button
                  type="submit"
                  className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
                >
                  Contact request
                </button>
              </div>
            </form>
            <div className="mt-2 flex justify-center space-x-4">
              <button
                className="text-gray-500"
                onClick={() => setPopupOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
