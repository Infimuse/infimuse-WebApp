import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import SubNavbar from '@/components/SubNavbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Card from '@/components/Card';
import SubNavbar2 from '@/components/SubNavbar2';
import Download from '@/components/Download';
import Banner from '@/components/Banner';
import DatePicker from '@/components/DatePicker';

const Arrow = () => (
  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex justify-center items-center bg-pink-500 p-2 rounded-full animate-dance">
    <FaArrowRight className="text-white text-2xl" />
  </div>
);

const experiences = [

  // Sipping Hangouts
  {
    id: '10',
    image: 'https://images.pexels.com/photos/1473007/pexels-photo-1473007.jpeg',
    title: 'Wine Tasting',
    host: 'Vineyard',
    status: 'Upcoming',
    category: 'Sipping Hangouts',
    price: '$50',
  },
  {
    id: '14',
    image: 'https://images.pexels.com/photos/2132257/pexels-photo-2132257.jpeg',
    title: 'Beer Brewing Workshop',
    host: 'Local Brewery',
    status: 'Upcoming',
    category: 'Sipping Hangouts',
    price: '$60',
  },
  {
    id: '15',
    image: 'https://images.pexels.com/photos/533355/pexels-photo-533355.jpeg',
    title: 'Cocktail Mixology Class',
    host: 'Mixology Bar',
    status: 'Upcoming',
    category: 'Sipping Hangouts',
    price: '$70',
  },
  {
    id: '10',
    image: 'https://images.pexels.com/photos/1473007/pexels-photo-1473007.jpeg',
    title: 'Wine Tasting',
    host: 'Vineyard',
    status: 'Upcoming',
    category: 'Sipping Hangouts',
    price: '$50',
  },
  {
    id: '14',
    image: 'https://images.pexels.com/photos/2132257/pexels-photo-2132257.jpeg',
    title: 'Beer Brewing Workshop',
    host: 'Local Brewery',
    status: 'Upcoming',
    category: 'Sipping Hangouts',
    price: '$60',
  },
  {
    id: '15',
    image: 'https://images.pexels.com/photos/533355/pexels-photo-533355.jpeg',
    title: 'Cocktail Mixology Class',
    host: 'Mixology Bar',
    status: 'Upcoming',
    category: 'Sipping Hangouts',
    price: '$70',
  },
  // Kids Activities
  {
    id: '11',
    image: 'https://images.pexels.com/photos/5765/kids.jpg',
    title: 'Kids Cooking Class',
    host: 'Cooking School',
    status: 'Upcoming',
    category: 'Kids Activities',
    price: '$30',
  },
  {
    id: '16',
    image: 'https://images.pexels.com/photos/701014/pexels-photo-701014.jpeg',
    title: 'Art and Craft Workshop',
    host: 'Art Studio',
    status: 'Upcoming',
    category: 'Kids Activities',
    price: '$25',
  },
  {
    id: '17',
    image: 'https://images.pexels.com/photos/385025/pexels-photo-385025.jpeg',
    title: 'Kids Dance Class',
    host: 'Dance Academy',
    status: 'Upcoming',
    category: 'Kids Activities',
    price: '$35',
  },
  {
    id: '1',
    image: 'https://images.pexels.com/photos/3026809/pexels-photo-3026809.jpeg',
    title: 'Bake Your Own French Croissant',
    host: 'Atelier Sucré',
    status: 'Upcoming',
    category: 'Kids Activities',
    price: '$100',
  },
  {
    id: '2',
    image: 'https://images.pexels.com/photos/325680/pexels-photo-325680.jpeg',
    title: 'Tagliatelle al Pesto with an Italian Master Chef',
    host: 'CocuSocial Cooking Classes',
    status: 'Upcoming',
    category: 'Kids Activities',
    price: '$100',
  },
  {
    id: '3',
    image: 'https://images.pexels.com/photos/243326/pexels-photo-243326.jpeg',
    title: 'Pottery Wheel Basics',
    host: 'Ceramics on 10th',
    status: 'Upcoming',
    category: 'Kids Activities',
    price: '$100',
  },
  // Workshops
  {
    id: '12',
    image: 'https://images.pexels.com/photos/1799344/pexels-photo-1799344.jpeg',
    title: 'Photography Workshop',
    host: 'Photo Studio',
    status: 'Upcoming',
    category: 'Workshops',
    price: '$80',
  },
  {
    id: '18',
    image: 'https://images.pexels.com/photos/3787329/pexels-photo-3787329.jpeg',
    title: 'Digital Marketing Workshop',
    host: 'Marketing Experts',
    status: 'Upcoming',
    category: 'Workshops',
    price: '$90',
  },
  {
    id: '19',
    image: 'https://images.pexels.com/photos/3153201/pexels-photo-3153201.jpeg',
    title: 'Creative Writing Workshop',
    host: 'Writers Guild',
    status: 'Upcoming',
    category: 'Workshops',
    price: '$70',
  },
  // Packages
  {
    id: '13',
    image: 'https://images.pexels.com/photos/936093/pexels-photo-936093.jpeg',
    title: 'Fitness Bootcamp',
    host: 'Gym',
    status: 'Upcoming',
    category: 'Packages',
    price: '$200',
  },
  {
    id: '20',
    image: 'https://images.pexels.com/photos/3820381/pexels-photo-3820381.jpeg',
    title: 'Yoga Retreat',
    host: 'Yoga Studio',
    status: 'Upcoming',
    category: 'Packages',
    price: '$250',
  },
  {
    id: '21',
    image: 'https://images.pexels.com/photos/3741015/pexels-photo-3741015.jpeg',
    title: 'Wellness Spa Weekend',
    host: 'Luxury Spa',
    status: 'Upcoming',
    category: 'Packages',
    price: '$300',
  },
  // // More Learn a Skill
  {
    id: '22',
    image: 'https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg',
    title: 'Learn to Play Guitar',
    host: 'Music Academy',
    status: 'Upcoming',
    category: 'Packages',
    price: '$120',
  },
  {
    id: '23',
    image: 'https://images.pexels.com/photos/449627/pexels-photo-449627.jpeg',
    title: 'DIY Home Repairs',
    host: 'Home Improvement Center',
    status: 'Upcoming',
    category: 'Packages',
    price: '$80',
  },
  {
    id: '24',
    image: 'https://images.pexels.com/photos/66066/pexels-photo-66066.jpeg',
    title: 'Gardening for Beginners',
    host: 'Community Garden',
    status: 'Upcoming',
    category: 'Packages',
    price: '$50',
  },
  // // More Unique Experiences
  // {
  //   id: '25',
  //   image: 'https://images.pexels.com/photos/1209318/pexels-photo-1209318.jpeg',
  //   title: 'Hot Air Balloon Ride',
  //   host: 'Adventure Company',
  //   status: 'Upcoming',
  //   category: 'Unique Experiences',
  //   price: '$300',
  // },
  {
    id: '26',
    image: 'https://images.pexels.com/photos/164502/pexels-photo-164502.jpeg',
    title: 'Scuba Diving Adventure',
    host: 'Dive School',
    status: 'Upcoming',
    category: 'Workshops',
    price: '$400',
  },
  {
    id: '27',
    image: 'https://images.pexels.com/photos/33608/aircraft-jet-landing-cloud.jpg',
    title: 'Helicopter Tour',
    host: 'Aerial Tours',
    status: 'Upcoming',
    category: 'Workshops',
    price: '$500',
  },
  // More Practice
  {
    id: '28',
    image: 'https://images.pexels.com/photos/668298/pexels-photo-668298.jpeg',
    title: 'Meditation Classes',
    host: 'Wellness Center',
    status: 'Upcoming',
    category: 'Workshops',
    price: '$90',
  },
  {
    id: '29',
    image: 'https://images.pexels.com/photos/3820380/pexels-photo-3820380.jpeg',
    title: 'Advanced Yoga',
    host: 'Yoga Studio',
    status: 'Upcoming',
    category: 'Practice',
    price: '$110',
  },
  // {
  //   id: '30',
  //   image: 'https://images.pexels.com/photos/303846/pexels-photo-303846.jpeg',
  //   title: 'CrossFit Training',
  //   host: 'CrossFit Gym',
  //   status: 'Upcoming',
  //   category: 'Practice',
  //   price: '$130',
  // },
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
      {/* <Hero /> */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-8 text-black">
        <SubNavbar2 />
        {/* <div className="mr-[150px]">
          {/* <DatePicker /> 
        </div> */}
        
        <SubNavbar />
        
        <section className="relative mb-8">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-2xl font-bold">Explore and Connect</h2>
              <p className="text-gray-600">Discover fun enriching Day Hangouts around you</p>
            </div>
            <button className="text-black py-2 px-4 rounded-lg">View More</button>
          </div>
          <div className="flex space-x-4 overflow-x-auto pb-4 hide-scrollbar">
            {experiences.slice(0, 16).map((experience) => (
              <div key={experience.id}>
                <Card {...experience} />
              </div>
            ))}
          </div>
          <Arrow />
        </section>
        
        <Banner />
        
        <section className="relative mb-8">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-2xl font-bold">Sipping Hangouts</h2>
              <p className="text-gray-600">Discover great places to hang out and enjoy your favorite drinks.</p>
            </div>
            <button className="text-black py-2 px-4 rounded-lg">View More</button>
          </div>
          <div className="flex space-x-4 overflow-x-auto pb-4 hide-scrollbar">
            {renderCards('Sipping Hangouts')}
          </div>
          <Arrow />
        </section>
        
        <section className="relative mb-8">
          <div className="flex justify-between items-center mb-4 hide-scrollbar">
            <div>
              <h2 className="text-2xl font-bold">Kids Activities</h2>
              <p className="text-gray-600">Fun and educational activities designed for kids of all ages.</p>
            </div>
            <button className="text-black py-2 px-4 rounded-lg">View More</button>
          </div>
          <div className="flex space-x-4 overflow-x-auto pb-4 hide-scrollbar">
            {renderCards('Kids Activities')}
          </div>
          <Arrow />
        </section>
        
        <section className="relative mb-8">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-2xl font-bold">Workshops</h2>
              <p className="text-gray-600">Join our workshops and enhance your skills in various fields.</p>
            </div>
            <button className="text-black py-2 px-4 rounded-lg">View More</button>
          </div>
          <div className="flex space-x-4 overflow-x-auto pb-4 hide-scrollbar">
            {renderCards('Workshops')}
          </div>
          <Arrow />
        </section>
        
        <section className="relative mb-8">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-2xl font-bold">Packages</h2>
              <p className="text-gray-600">Exclusive packages to get the best value for your activities.</p>
            </div>
            <button className="text-black py-2 px-4 rounded-lg">View More</button>
          </div>
          <div className="flex space-x-4 overflow-x-auto pb-4 hide-scrollbar">
            {renderCards('Packages')}
          </div>
          <Arrow />
        </section>
      </div>
      <Download />
      <Footer />
    </div>
  );
};

export default HomePage;
