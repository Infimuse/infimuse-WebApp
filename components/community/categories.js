"use client";

import React, { useState } from 'react';
// import { FaFootballBall, FaHiking, FaBook, FaPaintBrush, FaLaptopCode } from 'react-icons/fa';
// import { GiCookingPot } from 'react-icons/gi';
import { MdPsychology } from 'react-icons/md';
import { IoIosArrowForward } from "react-icons/io";
import { FaFootballBall, FaBasketballBall, FaSwimmer, FaHiking, FaCampground, FaBook, FaPaintBrush, FaRobot, FaLaptopCode, FaMusic, FaDumbbell, FaTheaterMasks, FaCamera, FaLeaf, FaTshirt, FaArrowRight } from 'react-icons/fa';
import { GiCookingPot, GiStairsGoal, GiMountainClimbing, GiChemicalDrop } from 'react-icons/gi';
// import { MdPsychology, MdHealthAndSafety, MdBiotech } from 'react-icons/md';
// import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const categories = [
  { name: 'Sports', icon: <FaFootballBall className="text-green-500" />, subcategories: ['Football', 'Basketball', 'Tennis', 'Swimming'] },
  { name: 'Life Skills', icon: <GiCookingPot className="text-orange-500" />, subcategories: ['Cooking', 'Financial Literacy', 'Time Management'] },
  { name: 'Adventure', icon: <FaHiking className="text-brown-500" />, subcategories: ['Hiking', 'Camping', 'Rock Climbing'] },
  { name: 'Educational', icon: <FaBook className="text-blue-500" />, subcategories: ['Math', 'Science', 'History', 'Languages'] },
  { name: 'Therapy', icon: <MdPsychology className="text-purple-500" />, subcategories: ['Physical Therapy', 'Occupational Therapy', 'Mental Health'] },
  { name: 'Art', icon: <FaPaintBrush className="text-pink-500" />, subcategories: ['Drawing', 'Painting', 'Sculpture'] },
  { name: 'Technology', icon: <FaLaptopCode className="text-gray-500" />, subcategories: ['Coding', 'Robotics', 'AI'] },
  { name: 'Science', icon: <GiChemicalDrop className="text-teal-500" />, subcategories: ['Biology', 'Chemistry', 'Physics'] },
  { name: 'Mathematics', icon: <FaBook className="text-indigo-500" />, subcategories: ['Algebra', 'Geometry', 'Calculus'] },
  { name: 'Languages', icon: <FaBook className="text-yellow-500" />, subcategories: ['English', 'Spanish', 'French', 'German'] },
  { name: 'History', icon: <FaBook className="text-brown-700" />, subcategories: ['Ancient', 'Medieval', 'Modern'] },
  { name: 'Geography', icon: <FaBook className="text-green-700" />, subcategories: ['Physical', 'Human', 'Environmental'] },
  { name: 'Drama', icon: <FaTheaterMasks className="text-red-500" />, subcategories: ['Acting', 'Directing', 'Playwriting'] },
  // { name: 'Photography', icon: <FaCamera className="text-black" />, subcategories: ['Portrait', 'Landscape', 'Wildlife'] },
  // { name: 'Fitness', icon: <FaDumbbell className="text-purple-700" />, subcategories: ['Yoga', 'Pilates', 'Strength Training'] },
  // // { name: 'Wellness', icon: <MdHealthAndSafety className="text-green-600" />, subcategories: ['Meditation', 'Nutrition', 'Mental Health'] },
  // { name: 'Crafts', icon: <GiStairsGoal className="text-teal-700" />, subcategories: ['Knitting', 'Sewing', 'Woodworking'] },
  // { name: 'Gardening', icon: <FaLeaf className="text-green-400" />, subcategories: ['Vegetable', 'Flower', 'Herb'] },
  // { name: 'Fashion', icon: <FaTshirt className="text-pink-400" />, subcategories: ['Design', 'Styling', 'Modeling'] },
  // { name: 'Coding', icon: <FaLaptopCode className="text-blue-700" />, subcategories: ['Web Development', 'App Development', 'Data Science'] },
  // { name: 'Robotics', icon: <FaRobot className="text-gray-800" />, subcategories: ['Building', 'Programming', 'Controlling'] },
  // // { name: 'Astronomy', icon: <MdBiotech className="text-blue-600" />, subcategories: ['Stargazing', 'Astrophotography', 'Planetary Science'] },
  // { name: 'Music', icon: <FaMusic className="text-red-600" />, subcategories: ['Instrumental', 'Vocal', 'Theory'] },
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
