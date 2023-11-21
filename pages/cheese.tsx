/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useRouter } from 'next/router'; // Import useRouter from next/router


interface CardProps {
  imageUrl: string;
  description: string;
}

const CheeseComponent: React.FC = () => {
  const router = useRouter(); // Get the router object

    // Function to handle the back navigation
    const handleBackClick = () => {
      router.push('/'); 
    };
  
  return (
    <div className="flex flex-col items-center justify-center">
          <button 
        onClick={handleBackClick}
        className="text-4xl absolute left-0 top-0 ml-4 mt-4"
        aria-label="Back to home"
      >
        &#8592; 
      </button>
      <h1 className="text-center font-bold text-2xl my-24">
      Unpasteurized Cheese
      </h1>
      <div className="flex flex-col gap-4">
        {/* First Row */}
        <div className="flex justify-center gap-4">
          <Card 
            imageUrl="https://i.imgur.com/Opr5HW2.png"
            description="Chevre in ashes"
          />
          <Card 
            imageUrl="https://i.imgur.com/ak7uKJB.png"
            description="Classic Creamy Chevre"
          />
        </div>

        {/* Second Row */}
        <div className="flex justify-center gap-4">
          <Card 
            imageUrl="https://i.imgur.com/6ZAEXyg.png"
            description="Raw Goat Cheese - Brie"
          />
          <Card 
            imageUrl="https://i.imgur.com/yqNzunT.png"
            description="Chevre in Black"
          />
        </div>
      </div>
    </div>
  );
};

const Card: React.FC<CardProps> = ({ imageUrl, description }) => (
  <div className="relative w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
    <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
      <img
        src={imageUrl}
        alt="Card Image"
      />
      <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
    </div>
    <div className="p-6">
      <p className="block font-sans text-base font-light leading-relaxed text-gray-700 antialiased">
        {description}
      </p>
      {/* Additional content can be placed here */}
    </div>
  </div>
);

export default CheeseComponent;
