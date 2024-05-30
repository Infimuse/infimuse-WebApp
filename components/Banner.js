"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// Image URLs from Pexels
const backgroundImage1 = 'https://images.pexels.com/photos/50725/pexels-photo-50725.jpeg';
const backgroundImage2 = 'https://images.pexels.com/photos/3747105/pexels-photo-3747105.jpeg';
const backgroundImage3 = 'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg';

const banners = [
  {
    image: backgroundImage1,
    title: 'Explore Vibrant Local Communities',
    subtitle: 'Highlighting Local Communities',
    buttonText: 'Communities',
  },
  {
    image: backgroundImage2,
    title: 'Master New Skills & Connect with Like-Minded People',
    subtitle: 'Workshops',
    buttonText: 'Workshops',
  },
  {
    image: backgroundImage3,
    title: 'Practice Makes Perfect. Bundles to Get You the Best.',
    subtitle: 'Packages',
    buttonText: 'Packages',
  },
];

const Banner = () => {
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prevBanner) => (prevBanner + 1) % banners.length);
    }, 10000); // Change every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden mt-8 rounded-xl mb-4">
      <div className="w-full h-40 sm:h-60 md:h-72 lg:h-80 overflow-hidden mx-auto max-w-screen-xl rounded-lg">
        <Image
          src={banners[currentBanner].image}
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 sm:px-10 md:px-20">
          <h1 className="text-lg sm:text-xl md:text-3xl font-bold mb-2 sm:mb-4 transition-all duration-1000">
            {banners[currentBanner].title}
          </h1>
          <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 transition-all duration-1000">
            {banners[currentBanner].subtitle}
          </p>
          <button className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 sm:px-6 rounded shadow-lg hover:shadow-xl transition-all duration-300">
            {banners[currentBanner].buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
