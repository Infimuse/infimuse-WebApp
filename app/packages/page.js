import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Card from '@/components/Card';
import experiences from '@/data/experiences'; // Adjust the path as necessary

const Packages = () => {
  const renderCards = (category) => {
    return experiences
      .filter((experience) => experience.category === category)
      .map((experience) => <Card key={experience.id} {...experience} />);
  };

  return (
    <div className="bg-white">
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-8 text-black">
        <h2 className="text-2xl font-bold mb-4">Packages</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {renderCards('Packages')}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Packages;
