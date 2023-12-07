import React from "react";
import { useRouter } from "next/router"; // Import useRouter from next/router

interface CardProps {
  imageUrl: string;
  description: string;
}

const CheeseComponent: React.FC = () => {
  const router = useRouter(); // Get the router object

  // Function to handle the back navigation
  const handleBackClick = () => {
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <div className="container mx-auto p-4">
        <button
          onClick={handleBackClick}
          className="text-blue-600 hover:text-blue-700 transition duration-300 ease-in-out"
          aria-label="Back to home"
        >
          &#8592; Back
        </button>
        <h1 className="text-4xl font-semibold text-center my-12">
          Unpasteurized Cheese
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card Components Here */}
          <Card
            imageUrl="https://i.imgur.com/Opr5HW2.png"
            description="Chevre in ashes"
          />
          <Card
            imageUrl="https://i.imgur.com/ak7uKJB.png"
            description="Classic Creamy Chevre"
          />
          <Card
            imageUrl="https://i.imgur.com/6ZAEXyg.png"
            description="Raw Goat Cheese - Brie"
          />
          <Card
            imageUrl="https://i.imgur.com/yqNzunT.png"
            description="Chevre in Black"
          />
        </div>

        {/* Additional Content */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-semibold">
            Discover the Art of Natural Cheesemaking
          </h2>
          <p className="mt-4 mb-4">
            Welcome to our world of artisanal cheese, where every batch tells a
            story of purity and care. At the heart of our cheesemaking
            philosophy lies a deep respect for the natural properties of milk.
            We believe in preserving its integrity, ensuring that every cheese
            we produce is a testament to quality and natural goodness.
          </p>
          <h2 className="text-2xl font-semibold">
            Gentle Handling of Milk: The Foundation of Our Cheese
          </h2>
          <p className="mt-4 mb-4">
            Our journey begins with the gentle handling of milk, a crucial
            ingredient that defines the soul of our cheese. We maintain a strict
            temperature control, never heating the milk above 32°C. This
            delicate approach preserves the milk natural enzymes and beneficial
            bacteria, which are essential for developing the rich, complex
            flavors in our cheese. By keeping the milk raw, we allow its true
            character to shine through, resulting in cheeses that are not just
            food, but an experience.
          </p>
          <h2 className="text-2xl font-semibold">
            Commitment to Natural Ingredients
          </h2>
          <p className="mt-4 mb-4">
            In our pursuit of creating the finest cheeses, we steer clear of any
            harmful chemicals. You will not find artificial citric acid, calcium
            chloride, or rennets laced with a full spectrum of chemicals in our
            cheeses. We believe that great cheese is made from simple, natural
            ingredients, and this belief is reflected in every slice.
          </p>
          <h2 className="text-2xl font-semibold">
            Raw, Pure, and Full of Flavor
          </h2>
          <p className="mt-4 mb-4">
            Our cheeses are more than just a treat for the palate; they are a
            promise of purity. By keeping our cheeses raw, we ensure that they
            retain the full-bodied, authentic flavors that only nature can
            provide. Each cheese is a celebration of the natural, unadulterated
            taste of dairy, crafted with care and passion.
          </p>
          <p className="mt-4 mb-4">
            Join us on a journey of taste, tradition, and natural goodness.
            Experience the difference with our artisanal cheeses, where every
            bite tells a story of quality, purity, and a gentle touch.
          </p>
        </div>
      </div>
    </div>
  );
};

const Card: React.FC<CardProps> = ({ imageUrl, description }) => (
  <div className="rounded-lg overflow-hidden shadow-lg bg-white">
    <img src={imageUrl} alt="Cheese" className="w-full h-64 object-cover" />
    <div className="p-4">
      <p className="text-gray-700 text-sm">{description}</p>
    </div>
  </div>
);

export default CheeseComponent;
