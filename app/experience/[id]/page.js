import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Image from 'next/image';

const learningExperiences = [
  {
    id: '1',
    image: '/assets/image.jpeg',
    title: 'Introduction to Boxing',
    host: 'Coach Jubilee',
    capacity: 20,
    ageGroup: '16+',
    price: '$50',
    venue: 'Downtown Gym',
    description: 'Learn the basics of boxing in this introductory class, perfect for beginners.',
    amenities: ['Boxing Gloves Provided', 'Free Parking', 'Air Conditioning', 'Water Station'],
    mapImage: '/assets/map.png',
  },
  {
    id: '2',
    image: '/assets/class2.jpg',
    title: 'Advanced Cooking Techniques',
    host: 'Chef Ramsey',
    capacity: 15,
    ageGroup: '18+',
    price: '$100',
    venue: 'Culinary Institute',
    description: 'Enhance your cooking skills with advanced techniques taught by a professional chef.',
    amenities: ['Ingredients Provided', 'Kitchen Equipment', 'Recipe Book', 'Certificate of Completion'],
    mapImage: '/assets/map2.png',
  },
  {
    id: '3',
    image: '/assets/class3.jpg',
    title: 'Photography Masterclass',
    host: 'Photographer Alex',
    capacity: 10,
    ageGroup: '16+',
    price: '$75',
    venue: 'City Park',
    description: 'Master the art of photography in this hands-on masterclass with a professional photographer.',
    amenities: ['Camera Rentals Available', 'Outdoor Venue', 'Editing Workshop', 'Portfolio Review'],
    mapImage: '/assets/map3.png',
  },
  // Add more learning experiences as needed
];

const getLearningExperience = (id) => {
  return learningExperiences.find(exp => exp.id === id);
};

export default function ExperienceDetail({ params }) {
  const experience = getLearningExperience(params.id);

  if (!experience) {
    notFound();
  }

  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-4 text-center">{experience.title}</h1>
        <p className="text-lg mb-2 text-center">Hosted by {experience.host}</p>
        <div className="relative w-full h-96 mb-8">
          <Image src={experience.image} alt={experience.title} layout="fill" objectFit="cover" className="rounded-lg shadow-lg" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow-md p-4">
            <p className="text-sm font-medium">Capacity</p>
            <p className="text-lg">{experience.capacity} people</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <p className="text-sm font-medium">Age Group</p>
            <p className="text-lg">{experience.ageGroup}</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <p className="text-sm font-medium">Price</p>
            <p className="text-lg">{experience.price}</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <p className="text-sm font-medium">Venue</p>
            <p className="text-lg">{experience.venue}</p>
          </div>
        </div>
        <p className="mb-4">{experience.description}</p>
        <h2 className="text-xl font-semibold mb-2">Amenities</h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
          {experience.amenities.map((amenity, index) => (
            <li key={index} className="bg-white rounded-lg shadow-md p-4">{amenity}</li>
          ))}
        </ul>
        <div className="relative w-full h-64 mb-8">
          <Image src={experience.mapImage} alt="Map" layout="fill" objectFit="cover" className="rounded-lg shadow-lg" />
        </div>
        <div className="text-center">
          <button className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
