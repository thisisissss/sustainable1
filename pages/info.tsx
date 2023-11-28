import React from "react";
import Image from "next/image";
import { FaLine, FaFacebook, FaInstagram } from "react-icons/fa";
import Link from "next/link";

const Info = () => {
  return (
    <div
      style={{
        backgroundColor: "#f0f0f0",
        minHeight: "100vh",
        width: "100%",
        margin: 0,
      }}
    >
      <div
        style={{ padding: "50px", display: "flex", justifyContent: "center" }}
      >
        <Link href="/">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/logo-gg.svg"
            alt="sgg logo"
            width={280}
            height={37}
            priority
          />
        </Link>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "55%",
          }}
        >
          <p style={{ textAlign: "center" }}>
            We not only engage in the innovative production of natural products
            like aquaponics and cheese, but through our research, we empower our
            community to lead a sustainable and enriched quality of life.
          </p>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          padding: "50px",
        }}
      >
        <div style={{ width: "45%" }}>
          <h2 style={{ marginBottom: "10px", fontWeight: "bold" }}>
            The Journey to Natural Living
          </h2>
          <p>
            At Sustainable Green Gold, our journey is about connecting with
            nature. Our aquaponics systems represent the harmony of aquatic life
            and plant cultivation, leading to the greenest greens you have ever
            seen.
          </p>
          <div
            style={{
              height: "200px",
              width: "100%",
              position: "relative",
              marginTop: "20px",
            }}
          >
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src="https://i.imgur.com/84h1dBc.jpg"
              alt="aquaponics"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        </div>
        <div style={{ width: "45%" }}>
          <h2 style={{ marginBottom: "10px", fontWeight: "bold" }}>
            Transforming Communities
          </h2>
          <p>
            Through our cheese-making endeavors, we are not just crafting
            flavors; were curating experiences that foster community and
            culture. Our natural products are a testament to our dedication to
            sustainability.
          </p>
          <div
            style={{
              height: "200px",
              width: "100%",
              position: "relative",
              marginTop: "20px",
            }}
          >
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src="https://i.imgur.com/BfdiEH3.jpg"
              alt="cheese"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        </div>
      </div>
      <div style={{ padding: "50px", textAlign: "center" }}>
        <h2 style={{ marginBottom: "10px", fontWeight: "bold" }}>
          Research and Innovation
        </h2>
        <p>
          Our commitment to research in improving the quality of life is
          unwavering. Join us in our pursuit of excellence and well-being for
          all, sustainably.
        </p>
        <div
          style={{
            height: "200px",
            width: "100%",
            position: "relative",
            marginTop: "20px",
          }}
        >
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="https://i.imgur.com/xX6tYWJ.jpg"
            alt="Research and Innovation"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </div>
      <footer className="dark:bg-gray-900 px-4 py-8">
        <div className="flex justify-center space-x-4">
          <a
            href="https://line.me/ti/p/eZ2GG61uIe"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:text-green-700"
          >
            <FaLine size={34} />
          </a>
          <a
            href="https://www.facebook.com/sofi.godmode"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700"
          >
            <FaFacebook size={34} />
          </a>
          <a
            href="https://www.instagram.com/sustainable_green_gold/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:text-pink-700"
          >
            <FaInstagram size={34} />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Info;
