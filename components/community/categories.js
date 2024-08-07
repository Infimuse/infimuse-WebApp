"use client";

import React, { useState, useRef } from 'react';
import { FaFootballBall, FaBasketballBall, FaSwimmer, FaHiking, FaCampground, FaBook, FaPaintBrush, FaRobot, FaLaptopCode, FaMusic, FaDumbbell, FaTheaterMasks, FaCamera, FaLeaf, FaTshirt, FaArrowRight } from 'react-icons/fa';
import { GiCookingPot, GiStairsGoal, GiMountainClimbing, GiChemicalDrop } from 'react-icons/gi';
import { MdPsychology, MdHealthAndSafety, MdBiotech } from 'react-icons/md';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const categories = [
  { name: 'Sports', icon: <FaFootballBall className="text-green-500" />, subcategories: ['Football', 'Basketball', 'Tennis', 'Swimming'] },
  
  { name: 'Life Skills', icon: <GiCookingPot className="text-orange-500" />, subcategories: ['Cooking', 'Financial Literacy', 'Time Management'] },
  { name: 'Adventure', icon: <FaHiking className="text-brown-500" />, subcategories: ['Hiking', 'Camping', 'Rock Climbing'] },
  { name: 'Educational', icon: <FaBook className="text-blue-500" />, subcategories: ['Math', 'Science', 'History', 'Languages'] },
  { name: 'Therapy', icon: <MdPsychology className="text-purple-500" />, subcategories: ['Physical Therapy', 'Occupational Therapy', 'Mental Health'] },
  { name: 'Art', icon: <FaPaintBrush className="text-pink-500" />, subcategories: ['Drawing', 'Painting', 'Sculpture'] },
  { name: 'Technology', icon: <FaLaptopCode className="text-gray-500" />, subcategories: ['Coding', 'Robotics', 'AI'] },
  { name: 'Crafts', icon: <GiStairsGoal className="text-teal-700" />, subcategories: ['Knitting', 'Sewing', 'Woodworking'] },
  { name: 'Art', icon: <FaPaintBrush className="text-pink-500" />, subcategories: ['Drawing', 'Painting', 'Sculpture'] },

];



const SubNavbar = () => {
  const [selectedCategories, setSelectedCategories] = useState(new Set());
  const [activeSubcategories, setActiveSubcategories] = useState(new Set());
  const containerRef = useRef(null);

  const handleCategoryClick = (category) => {
    const newSelection = new Set(selectedCategories);
    if (newSelection.has(category)) {
      newSelection.delete(category);
    } else {
      newSelection.add(category);
    }
    setSelectedCategories(newSelection);
  };

  const handleSubcategoryClick = (subcategory) => {
    const newActiveSubcategories = new Set(activeSubcategories);
    if (newActiveSubcategories.has(subcategory)) {
      newActiveSubcategories.delete(subcategory);
    } else {
      newActiveSubcategories.add(subcategory);
    }
    setActiveSubcategories(newActiveSubcategories);
  };

  const scrollLeft = () => {
    containerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
  };
  
  const scrollRight = () => {
    containerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
  };

  const selectedSubcategories = Array.from(selectedCategories).flatMap(cat => categories.find(c => c.name === cat)?.subcategories || []);

  return (
    <div className="bg-white py-4 sticky">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 p-4">
        <div className="relative flex space-x-8 overflow-x-auto hide-scroll-bar p-2" ref={containerRef}>
          {categories.map((category, index) => (
            <div
              key={index}
              className={`relative flex flex-col items-center cursor-pointer transition duration-150 ease-in-out ${selectedCategories.has(category.name) ? 'text-[#BB2460]' : 'text-gray-800'}`}
              onClick={() => handleCategoryClick(category.name)}
            >
              <span className="text-2xl mb-2">{category.icon}</span>
              <span className="text-sm font-medium">{category.name}</span>
            </div>
          ))}
        </div>
        <div className="absolute left-2 top-1/2 transform -translate-y-1/2 flex justify-center items-center bg-white" onClick={scrollLeft}>
          <IoIosArrowBack className="text-gray-800 text-2xl cursor-pointer" />
        </div>
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex justify-center items-center bg-white" onClick={scrollRight}>
          <IoIosArrowForward className="text-gray-800 text-2xl cursor-pointer" />
        </div>
        {selectedSubcategories.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4 ">Subcategories</h2>
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedSubcategories.map(subcategory => (
                <span
                  key={subcategory}
                  onClick={() => handleSubcategoryClick(subcategory)}
                  className={`px-4 py-2 rounded-full cursor-pointer text-sm sm:text-base ${activeSubcategories.has(subcategory) ? 'bg-[#BB2460] text-white' : 'bg-gray-100'}`}
                >
                  {subcategory}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SubNavbar;