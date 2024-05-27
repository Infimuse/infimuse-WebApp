// components/SubNavbar2.js
import React from 'react';

const categories = ['All', 'Classes', 'Workshops', 'Packages', 'Experiences', ];

const SubNavbar2 = () => {
  return (
    <div className="bg-white py-4 border-b ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex  gap-8 items-center justify-center">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col items-center cursor-pointer  hover:bg-gray-200 p-2  rounded-xl">
              {/* <span className=" w-full "></span> */}
              <span className="text-sm font-medium text-gray-800">{category}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubNavbar2;
