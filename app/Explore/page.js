import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Card from '@/components/Card';
import experiences from '@/data/experiences';
import Link from 'next/link';
import SubNavbar2 from '@/components/SubNavbar2';


const Explore = () => {
  return (
    <div className="bg-white">
      <Navbar />
        <SubNavbar2 />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-8 text-black">
        <h2 className="text-2xl font-bold mb-4">Explore All Listings</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {experiences.map((experience) => (
            <Card key={experience.id} {...experience} />
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Link href="/"
            className="text-white bg-pink-700 p-2 rounded hover:underline">Back to Home
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Explore;
