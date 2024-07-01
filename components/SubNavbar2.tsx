// components/SubNavbar2.js
import React from 'react';
import Link from 'next/link';

const categories = [
  { name: 'All', path: '/' },
  { name: 'Activities', path: '#' },
  { name: 'Learning Experiences', path: '#' },
  { name: 'Sip n hang', path: '/sipping-hangouts' },
  { name: 'Kids Activities', path: '/Kids-activities' },
  { name: 'Workshops', path: '/workshops' },
  { name: 'Packages', path: '/packages' }
];

const SubNavbar2 = () => {
  return (
    <div className="bg-white py-2 border-b ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-8 items-center justify-center">
          {categories.map((category, index) => (
            <Link key={index} href={category.path} passHref>
              <div className="flex flex-col items-center cursor-pointer hover:bg-gray-200 p-2 rounded-xl">
                <span className="text-sm font-medium text-gray-800">{category.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubNavbar2;
