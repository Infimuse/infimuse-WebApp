import React from 'react';
import Navbar from '@/components/Navbar';
import SubNavbar from '@/components/SubNavbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Card from '@/components/Card';
import SubNavbar2 from '@/components/SubNavbar2';
import Download from '@/components/Download';
import Banner from '@/components/Banner'

const experiences = [
  {
    id: '1',
    image: 'https://images.pexels.com/photos/235606/pexels-photo-235606.jpeg', // Baking
    title: 'Bake Your Own French Croissant',
    host: 'Atelier Sucré',
    status: 'Upcoming',
    category: 'Learn a Skill',
    price: '$100',
  },
  {
    id: '2',
    image: 'https://images.pexels.com/photos/4194513/pexels-photo-4194513.jpeg', // Cooking
    title: 'Tagliatelle al Pesto with an Italian Master Chef',
    host: 'CocuSocial Cooking Classes',
    status: 'Upcoming',
    category: 'Unique Experiences',
    price: '$100',
  },
  {
    id: '3',
    image: 'https://images.pexels.com/photos/3804290/pexels-photo-3804290.jpeg', // Pottery
    title: 'Pottery Wheel Basics',
    host: 'Ceramics on 10th',
    status: 'Upcoming',
    category: 'Learn a Skill',
    price: '$100',
  },
  // Sipping Hangouts
  {
    id: '10',
    image: 'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg', // Wine Tasting
    title: 'Wine Tasting',
    host: 'Vineyard',
    status: 'Upcoming',
    category: 'Sipping Hangouts',
    price: '$50',
  },
  {
    id: '14',
    image: 'https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg', // Beer Brewing
    title: 'Beer Brewing Workshop',
    host: 'Local Brewery',
    status: 'Upcoming',
    category: 'Sipping Hangouts',
    price: '$60',
  },
  {
    id: '15',
    image: 'https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg', // Cocktail Mixology
    title: 'Cocktail Mixology Class',
    host: 'Mixology Bar',
    status: 'Upcoming',
    category: 'Sipping Hangouts',
    price: '$70',
  },
  // Kids Activities
  {
    id: '11',
    image: 'https://images.pexels.com/photos/4010964/pexels-photo-4010964.jpeg', // Kids Cooking
    title: 'Kids Cooking Class',
    host: 'Cooking School',
    status: 'Upcoming',
    category: 'Kids Activities',
    price: '$30',
  },
  {
    id: '16',
    image: 'https://images.pexels.com/photos/5038082/pexels-photo-5038082.jpeg', // Art and Craft
    title: 'Art and Craft Workshop',
    host: 'Art Studio',
    status: 'Upcoming',
    category: 'Kids Activities',
    price: '$25',
  },
  {
    id: '17',
    image: 'https://images.pexels.com/photos/3755445/pexels-photo-3755445.jpeg', // Kids Dance
    title: 'Kids Dance Class',
    host: 'Dance Academy',
    status: 'Upcoming',
    category: 'Kids Activities',
    price: '$35',
  },
  // Workshops
  {
    id: '12',
    image: 'https://images.pexels.com/photos/1368692/pexels-photo-1368692.jpeg', // Photography Workshop
    title: 'Photography Workshop',
    host: 'Photo Studio',
    status: 'Upcoming',
    category: 'Workshops',
    price: '$80',
  },
  {
    id: '18',
    image: 'https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg', // Digital Marketing Workshop
    title: 'Digital Marketing Workshop',
    host: 'Marketing Experts',
    status: 'Upcoming',
    category: 'Workshops',
    price: '$90',
  },
  {
    id: '19',
    image: 'https://images.pexels.com/photos/3806756/pexels-photo-3806756.jpeg', // Creative Writing Workshop
    title: 'Creative Writing Workshop',
    host: 'Writers Guild',
    status: 'Upcoming',
    category: 'Workshops',
    price: '$70',
  },
  // Packages
  {
    id: '13',
    image: 'https://images.pexels.com/photos/2261485/pexels-photo-2261485.jpeg', // Fitness Bootcamp
    title: 'Fitness Bootcamp',
    host: 'Gym',
    status: 'Upcoming',
    category: 'Packages',
    price: '$200',
  },
  {
    id: '20',
    image: 'https://images.pexels.com/photos/1051743/pexels-photo-1051743.jpeg', // Yoga Retreat
    title: 'Yoga Retreat',
    host: 'Yoga Studio',
    status: 'Upcoming',
    category: 'Packages',
    price: '$250',
  },
  {
    id: '21',
    image: 'https://images.pexels.com/photos/769166/pexels-photo-769166.jpeg', // Wellness Spa Weekend
    title: 'Wellness Spa Weekend',
    host: 'Luxury Spa',
    status: 'Upcoming',
    category: 'Packages',
    price: '$300',
  },
  // More Learn a Skill
  {
    id: '22',
    image: 'https://images.pexels.com/photos/164869/pexels-photo-164869.jpeg', // Learn to Play Guitar
    title: 'Learn to Play Guitar',
    host: 'Music Academy',
    status: 'Upcoming',
    category: 'Learn a Skill',
    price: '$120',
  },
  {
    id: '23',
    image: 'https://images.pexels.com/photos/3747105/pexels-photo-3747105.jpeg', // DIY Home Repairs
    title: 'DIY Home Repairs',
    host: 'Home Improvement Center',
    status: 'Upcoming',
    category: 'Learn a Skill',
    price: '$80',
  },
  {
    id: '24',
    image: 'https://images.pexels.com/photos/1236789/pexels-photo-1236789.jpeg', // Gardening for Beginners
    title: 'Gardening for Beginners',
    host: 'Community Garden',
    status: 'Upcoming',
    category: 'Learn a Skill',
    price: '$50',
  },
  // More Unique Experiences
  {
    id: '25',
    image: 'https://images.pexels.com/photos/163760/pexels-photo-163760.jpeg', // Hot Air Balloon Ride
    title: 'Hot Air Balloon Ride',
    host: 'Adventure Company',
    status: 'Upcoming',
    category: 'Unique Experiences',
    price: '$300',
  },
  {
    id: '26',
    image: 'https://images.pexels.com/photos/133021/pexels-photo-133021.jpeg', // Scuba Diving Adventure
    title: 'Scuba Diving Adventure',
    host: 'Dive School',
    status: 'Upcoming',
    category: 'Unique Experiences',
    price: '$400',
  },
  {
    id: '27',
    image: 'https://images.pexels.com/photos/33688/pexels-photo.jpg', // Helicopter Tour
    title: 'Helicopter Tour',
    host: 'Aerial Tours',
    status: 'Upcoming',
    category: 'Unique Experiences',
    price: '$500',
  },
  // More Practice
  {
    id: '28',
    image: 'https://images.pexels.com/photos/3820379/pexels-photo-3820379.jpeg', // Meditation Classes
    title: 'Meditation Classes',
    host: 'Wellness Center',
    status: 'Upcoming',
    category: 'Practice',
    price: '$90',
  },
  {
    id: '29',
    image: 'https://images.pexels.com/photos/4513240/pexels-photo-4513240.jpeg', // Advanced Yoga
    title: 'Advanced Yoga',
    host: 'Yoga Studio',
    status: 'Upcoming',
    category: 'Practice',
    price: '$110',
  },
  {
    id: '30',
    image: 'https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg', // CrossFit Training
    title: 'CrossFit Training',
    host: 'CrossFit Gym',
    status: 'Upcoming',
    category: 'Practice',
    price: '$130',
  },
];


const HomePage = () => {
  const renderCards = (category) => {
    return experiences
      .filter((experience) => experience.category === category)
      .map((experience) => <Card key={experience.id} {...experience} />);
  };

  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-8 text-black">
        <SubNavbar2 />
        <SubNavbar />
        <h2 className="text-2xl font-bold mb-4">Explore and Connect</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {experiences.map((experience) => (
            <Card key={experience.id} {...experience} />
          ))}
        </div>
        
        {/* Sipping Hangouts Section */}
        <h2 className="text-2xl font-bold mt-8 mb-4">Sipping Hangouts</h2>
        <div className="flex space-x-4 overflow-x-auto pb-4">
          {renderCards('Sipping Hangouts')}
        </div>
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg">View More</button>

        {/* Kids Activities Section */}
        <h2 className="text-2xl font-bold mt-8 mb-4">Kids Activities</h2>
        <div className="flex space-x-4 overflow-x-auto pb-4">
          {renderCards('Kids Activities')}
        </div>
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg">View More</button>

        {/* Workshops Section */}
        <h2 className="text-2xl font-bold mt-8 mb-4">Workshops</h2>
        <div className="flex space-x-4 overflow-x-auto pb-4">
          {renderCards('Workshops')}
        </div>
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg">View More</button>

        {/* Packages Section */}
        <h2 className="text-2xl font-bold mt-8 mb-4">Packages</h2>
        <div className="flex space-x-4 overflow-x-auto pb-4">
          {renderCards('Packages')}
        </div>
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg">View More</button>
      </div>
      <Banner/>
      <Download />
      <Footer />
    </div>
  );
};

export default HomePage;
