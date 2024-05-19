// components/SubNavbar2.js
import React from 'react';

const categories = ['All', 'Classes', 'Workshops', 'Packages'];

const SubNavbar2 = () => {
  return (
    <div className="bg-purple-100 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-around">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col items-center cursor-pointer">
              <span className="border-t-2 border-black w-full mb-2"></span>
              <span className="text-sm font-medium text-gray-800">{category}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubNavbar2;
