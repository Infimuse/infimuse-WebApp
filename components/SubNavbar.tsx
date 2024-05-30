"use client";

import React, { useState } from 'react';
import { FaFootballBall, FaBasketballBall, FaSwimmer, FaHiking, FaCampground, FaBook, FaPaintBrush, FaRobot, FaLaptopCode, FaMusic, FaDumbbell, FaTheaterMasks, FaCamera, FaLeaf, FaTshirt, FaArrowRight } from 'react-icons/fa';
import { GiCookingPot, GiStairsGoal, GiMountainClimbing, GiChemicalDrop } from 'react-icons/gi';
import { MdPsychology, MdHealthAndSafety, MdBiotech } from 'react-icons/md';

const categories = [
  { name: 'Sports', icon: <FaFootballBall />, subcategories: ['Football', 'Basketball', 'Tennis', 'Swimming'] },
  { name: 'Life Skills', icon: <GiCookingPot />, subcategories: ['Cooking', 'Financial Literacy', 'Time Management'] },
  { name: 'Adventure', icon: <FaHiking />, subcategories: ['Hiking', 'Camping', 'Rock Climbing'] },
  { name: 'Educational', icon: <FaBook />, subcategories: ['Math', 'Science', 'History', 'Languages'] },
  { name: 'Therapy', icon: <MdPsychology />, subcategories: ['Physical Therapy', 'Occupational Therapy', 'Mental Health'] },
  { name: 'Art', icon: <FaPaintBrush />, subcategories: ['Drawing', 'Painting', 'Sculpture'] },
  { name: 'Technology', icon: <FaLaptopCode />, subcategories: ['Coding', 'Robotics', 'AI'] },
  { name: 'Science', icon: <GiChemicalDrop />, subcategories: ['Biology', 'Chemistry', 'Physics'] },
  { name: 'Mathematics', icon: <FaBook />, subcategories: ['Algebra', 'Geometry', 'Calculus'] },
  { name: 'Languages', icon: <FaBook />, subcategories: ['English', 'Spanish', 'French', 'German'] },
  { name: 'History', icon: <FaBook />, subcategories: ['Ancient', 'Medieval', 'Modern'] },
  { name: 'Geography', icon: <FaBook />, subcategories: ['Physical', 'Human', 'Environmental'] },
  { name: 'Drama', icon: <FaTheaterMasks />, subcategories: ['Acting', 'Directing', 'Playwriting'] },
  { name: 'Photography', icon: <FaCamera />, subcategories: ['Portrait', 'Landscape', 'Wildlife'] },
  { name: 'Fitness', icon: <FaDumbbell />, subcategories: ['Yoga', 'Pilates', 'Strength Training'] },
  { name: 'Wellness', icon: <MdHealthAndSafety />, subcategories: ['Meditation', 'Nutrition', 'Mental Health'] },
  { name: 'Crafts', icon: <GiStairsGoal />, subcategories: ['Knitting', 'Sewing', 'Woodworking'] },
  { name: 'Gardening', icon: <FaLeaf />, subcategories: ['Vegetable', 'Flower', 'Herb'] },
  { name: 'Fashion', icon: <FaTshirt />, subcategories: ['Design', 'Styling', 'Modeling'] },
  { name: 'Coding', icon: <FaLaptopCode />, subcategories: ['Web Development', 'App Development', 'Data Science'] },
  { name: 'Robotics', icon: <FaRobot />, subcategories: ['Building', 'Programming', 'Controlling'] },
  { name: 'Astronomy', icon: <MdBiotech />, subcategories: ['Stargazing', 'Astrophotography', 'Planetary Science'] },
  { name: 'Music', icon: <FaMusic />, subcategories: ['Instrumental', 'Vocal', 'Theory'] },
];

const SubNavbar = () => {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryClick = (index: number) => {
    setSelectedCategory(categories[index].name);
    setActiveCategory(index);
  };

  return (
    <div className="bg-white py-4 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 p-4">
        <div className="relative flex space-x-8 overflow-x-auto hide-scroll-bar p-2">
          {categories.map((category, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center cursor-pointer hover:text-pink-600 transition duration-150 ease-in-out"
              onMouseEnter={() => setActiveCategory(index)}
              onMouseLeave={() => setActiveCategory(null)}
              onClick={() => handleCategoryClick(index)}
            >
              <span className="text-2xl text-black">{category.icon}</span>
              <span className="text-sm font-medium text-gray-700">{category.name}</span>
            </div>
          ))}
        </div>
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex justify-center items-center bg-white">
          <FaArrowRight className="text-gray-800 text-2xl animate-dance" />
        </div>
        {selectedCategory && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Subcategories of {selectedCategory}</h2>
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.find(cat => cat.name === selectedCategory)?.subcategories.map((subcategory) => (
                <span
                  key={subcategory}
                  className="px-4 py-2 bg-gray-200 rounded-full cursor-pointer text-sm sm:text-base"
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
