// components/SubNavbar.js
"use client"

import React, { useState } from 'react';

const categories = [
  { name: 'Sports', items: ['Football', 'Basketball', 'Tennis', 'Swimming'] },
  { name: 'Life Skills', items: ['Cooking', 'Financial Literacy', 'Time Management'] },
  { name: 'Adventure', items: ['Hiking', 'Camping', 'Rock Climbing'] },
  { name: 'Educational', items: ['Math', 'Science', 'History', 'Languages'] },
  { name: 'Therapy', items: ['Physical Therapy', 'Occupational Therapy', 'Mental Health'] },
  { name: 'Art', items: ['Drawing', 'Painting', 'Sculpture'] },
  { name: 'Technology', items: ['Coding', 'Robotics', 'AI'] },
  { name: 'Science', items: ['Biology', 'Chemistry', 'Physics'] },
  { name: 'Mathematics', items: ['Algebra', 'Geometry', 'Calculus'] },
  { name: 'Languages', items: ['English', 'Spanish', 'French', 'German'] },
  { name: 'History', items: ['Ancient', 'Medieval', 'Modern'] },
  { name: 'Geography', items: ['Physical', 'Human', 'Environmental'] },
  { name: 'Drama', items: ['Acting', 'Directing', 'Playwriting'] },
  { name: 'Photography', items: ['Portrait', 'Landscape', 'Wildlife'] },
  { name: 'Fitness', items: ['Yoga', 'Pilates', 'Strength Training'] },
  { name: 'Wellness', items: ['Meditation', 'Nutrition', 'Mental Health'] },
  { name: 'Crafts', items: ['Knitting', 'Sewing', 'Woodworking'] },
  { name: 'Gardening', items: ['Vegetable', 'Flower', 'Herb'] },
  { name: 'Fashion', items: ['Design', 'Styling', 'Modeling'] },
  { name: 'Coding', items: ['Web Development', 'App Development', 'Data Science'] },
  { name: 'Robotics', items: ['Building', 'Programming', 'Controlling'] },
  { name: 'Astronomy', items: ['Stargazing', 'Astrophotography', 'Planetary Science'] },
  { name: 'Music', items: ['Instrumental', 'Vocal', 'Theory'] },
];

const SubNavbar = () => {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  return (
    <div className="bg-white  py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 p-4">
        <div className="relative flex space-x-8 overflow-x-auto hide-scroll-bar p-2">
          {categories.map((category, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center cursor-pointer hover:text-pink-600 transition duration-150 ease-in-out"
              onMouseEnter={() => setActiveCategory(index)}
              onMouseLeave={() => setActiveCategory(null)}
            >
              <span className="text-sm font-medium text-gray-700">{category.name}</span>
              {activeCategory === index && (
                <div className="absolute top-full mt-2 w-64 bg-white shadow-lg rounded-lg p-4">
                  <ul>
                    {category.items.map((item, idx) => (
                      <li key={idx} className="py-1 hover:text-pink-600">{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
          
        </div>
      </div>
    </div>
  );
};

export default SubNavbar;
