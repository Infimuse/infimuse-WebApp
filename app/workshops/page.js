import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Card from '@/components/Card'
import Link from 'next/link';
import SubNavbar from '@/components/SubNavbar';
import Datepicker from '@/components/DatePicker';
import SubNavbar2 from '@/components/SubNavbar2';
import experiences from '@/data/experiences'; // Adjust the path as necessary

const Workshops = () => {
  const renderCards = (category) => {
    return experiences
      .filter((experience) => experience.category === category)
      .map((experience) => <Card key={experience.id} {...experience} />);
  };

  return (
    <div className="bg-white">
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-8 text-black">
        <SubNavbar2 />
        <SubNavbar />
        <Datepicker />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-8 text-black">
        <h2 className="text-2xl font-bold mb-4">Workshops</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {renderCards('Workshops')}
        </div>
        <div className="flex justify-center mt-8">
          <Link href="/"
            className="text-white bg-pink-700 p-2 rounded hover:underline">Back to Home
          </Link>
        </div>
      </div>
      

      <Footer />
    </div>
    </div>
  );
};

export default Workshops;
