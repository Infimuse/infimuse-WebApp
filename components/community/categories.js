"use client";

import React, { useState } from 'react';
import { FaFootballBall, FaHiking, FaBook, FaPaintBrush, FaLaptopCode } from 'react-icons/fa';
import { GiCookingPot } from 'react-icons/gi';
import { MdPsychology } from 'react-icons/md';
import { IoIosArrowForward } from "react-icons/io";

const categories = [
  { name: 'Sports', icon: <FaFootballBall className="text-green-500" /> },
  { name: 'Life Skills', icon: <GiCookingPot className="text-orange-500" /> },
  { name: 'Adventure', icon: <FaHiking className="text-brown-500" /> },
  { name: 'Educational', icon: <FaBook className="text-blue-500" /> },
  { name: 'Therapy', icon: <MdPsychology className="text-purple-500" /> },
  { name: 'Art', icon: <FaPaintBrush className="text-pink-500" /> },
  { name: 'Technology', icon: <FaLaptopCode className="text-gray-500" /> },
];

export default function SubNavbar() {
  // const [activeCategory, setActiveCategory] = useState<number | null>(null);

  return (
    <div className="bg-white py-4 sticky">
      <div className="max-w-7xl mx-auto p-2">
        <div className="relative flex space-x-8 overflow-x-auto hide-scroll-bar p-2">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center cursor-pointer hover:text-pink-600 transition duration-150 ease-in-out"
              // onMouseEnter={() => setActiveCategory(index)}
              // onMouseLeave={() => setActiveCategory(null)}
            >
              <span className="text-2xl text-gray-500 mb-1">{category.icon}</span>
              <span className="text-sm font-medium text-gray-700">{category.name}</span>
            </div>
          ))}
        </div>
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex justify-center items-center bg-white">
          <IoIosArrowForward className="text-gray-800 text-2xl animate-dance" />
        </div>
      </div>
    </div>
  );
}
