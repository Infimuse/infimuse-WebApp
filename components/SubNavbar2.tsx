// components/SubNavbar2.js
'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const categories = [
  { name: 'All', path: '/' },
  { name: 'Activities', path: '/activities' },
  { name: 'Learning Experiences', path: '/learning-experiences' },
  { name: 'Sip n hang', path: '/sipping-hangouts' },
  { name: 'Kids Activities', path: '/Kids-activities' },
  { name: 'Workshops', path: '/workshops' },
  // { name: 'Packages', path: '/packages' }
];

const SubNavbar2 = () => {
  // State to track the currently active category
  const [activeCategory, setActiveCategory] = useState(categories[0].path);

  return (
    <div className="bg-white py-2 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-8 items-center justify-center hover:text-white">
          {categories.map((category, index) => (
            <Link key={index} href={category.path} passHref>
              <div 
                className={`flex flex-col items-center cursor-pointer p-2 rounded-full ${
                  activeCategory === category.path ? 'bg-gray-100' : 'hover:bg-[#18bdfa] hover:text-white'
                }`}
                onClick={() => setActiveCategory(category.path)}
              >
                <button className="text-sm font-medium text-black hover:text-white">{category.name}</button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubNavbar2;

