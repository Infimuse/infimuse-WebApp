import React from 'react';
import Navbar from '@/components/Navbar';
import SubNavbar from '@/components/SubNavbar';
import SubNavbar2 from '@/components/SubNavbar2';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Card from '@/components/Card';

const experiences = [
  {
    id: '1',
    image: '/assets/image.jpeg',
    title: 'Bake Your Own French Croissant',
    host: 'Atelier Sucré',
    status: 'Upcoming',
    category: 'Learn a Skill',
    price: '$100'

  },
  {
    id: '2',
    image: '/assets/image.jpeg',
    title: 'Tagliatelle al Pesto with an Italian Master Chef',
    host: 'CocuSocial Cooking Classes',
    status: 'Upcoming',
    category: 'Unique Experiences',
    price: '$100'

  },
  {
    id: '3',
    image: '/assets/image.jpeg',
    title: 'Pottery Wheel Basics',
    host: 'Ceramics on 10th',
    status: 'Upcoming',
    category: 'Learn a Skill',
    price: '$100'

  },
  {
    id: '4',
    image: '/assets/image.jpeg',
    title: 'Cake Decorating 101',
    host: 'NY Cake Academy',
    status: 'Upcoming',
    category: 'Practice',
    price: '$100'
  },
  {
    id: '5',
    image: '/assets/classroom@1x.jpg',
    title: 'Advanced Cooking Techniques',
    host: 'Chef Ramsey',
    status: 'Sold out',
    category: 'Unique Experiences',
    price: '$100'

  },
  {
    id: '6',
    image: '/assets/cooking@1x.jpg',
    title: 'Photography Masterclass',
    host: 'Photographer Alex',
    status: 'Upcoming',
    category: 'Learn a Skill',
    price: '$100'

  },
  {
    id: '7',
    image: '/assets/cooking@1x.jpg',
    title: 'Yoga for Beginners',
    host: 'Yoga Studio',
    status: 'Upcoming',
    category: 'Practice',
    price: '$100'

  },
];

const HomePage = () => {
  const renderCards = (category) => {
    return experiences
      .filter((experience) => experience.category === category)
      .map((experience) => <Card key={experience.id} {...experience} />);
  };

  return (
    <div className='bg-white'>
      <Navbar />
      <SubNavbar />
      <SubNavbar2 />
      <Hero />
      <div className="container mx-auto my-8 text-black">
        <h2 className="text-2xl font-bold mb-4">Popular Categories</h2>
        <div className="flex flex-wrap gap-2 mb-8">
          {[
            'Acting', 'Art', 'Baking', 'Cake Decorating', 'Candle Making',
            'Certificate Programs', 'Cooking', 'Craft', 'Design', 'Drawing',
            'Floral Design', 'Glass Blowing', 'Improv', 'Jewelry Making',
            'Language', 'Mixology', 'Paint & Sip', 'Painting', 'Perfume Making',
            'Photography', 'Pottery', 'Coding', 'Public Speaking', 'Sewing',
            'Tech', 'Video Editing', 'Wine', 'Woodworking', 'Writing'
          ].map((category) => (
            <span key={category} className="px-4 py-2 bg-gray-200 rounded-full cursor-pointer">
              {category}
            </span>
          ))}
        </div>
        <h2 className="text-2xl font-bold mb-4">Explore (All upcoming 10 days)</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {experiences.map((experience) => (
            <Card key={experience.id} {...experience} />
          ))}
        </div>
        <h2 className="text-2xl font-bold mt-8 mb-4">Unique Experiences</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {renderCards('Unique Experiences')}
        </div>
        <h2 className="text-2xl font-bold mt-8 mb-4">Learn a Skill (Upcoming Workshops)</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {renderCards('Learn a Skill')}
        </div>
        <h2 className="text-2xl font-bold mt-8 mb-4">Practice (Packages)</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {renderCards('Practice')}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
