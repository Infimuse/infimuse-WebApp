import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Image from 'next/image';

const experiences = [
  {
    id: '1',
    image: '/assets/image.jpeg',
    title: 'Boxing',
    host: 'Jubilee',
    beds: 1,
    guests: 4,      bathrooms: 1,
    description: 'Looking for a romantic and couple-friendly getaway...',
    amenities: ['Kitchen', 'Free parking on premises', 'Wifi', 'TV', 'Paid parking on premises', 'Dedicated workspace', 'Air conditioning'],
    mapImage: '/assets/map.png'
  },
  {
    id: '2',
    image: '/assets/image.jpeg',
    title: 'Train at the X-Mansion',
    host: 'Jubilee',
    beds: 1,
    guests: 4,
    bathrooms: 1,
    description: 'Looking for a romantic and couple-friendly getaway...',
    amenities: ['Kitchen', 'Free parking on premises', 'Washing Machine', 'Wifi', 'TV', 'Paid parking on premises', 'Dedicated workspace', 'Air conditioning'],
    mapImage: '/assets/map.png'
  },
  {
    id: '3',
    image: '/assets/image.jpeg',
    title: 'Train at the X-Mansion',
    host: 'Jubilee',
    beds: 1,
    guests: 4,
    bathrooms: 1,
    description: 'Looking for a romantic and couple-friendly getaway...',
    amenities: ['Kitchen', 'Free parking on premises', 'Washing Machine', 'Wifi', 'TV', 'Paid parking on premises', 'Dedicated workspace', 'Air conditioning'],
    mapImage: '/assets/map.png'
  },
  //
  // Add other experiences as needed
];

const getExperience = (id) => {
  return experiences.find(exp => exp.id === id);
};

export default function ExperienceDetail({ params }) {
  const experience = getExperience(params.id);

  if (!experience) {
    notFound();
  }

  return (
    <div className="bg-white text-gray-800">
      <Navbar />
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold mb-4">{experience.title}</h1>
        <p className="text-lg mb-2">Hosted by {experience.host}</p>
        <div className="relative w-full h-96 mb-4">
          <Image src={experience.image} alt={experience.title} layout="fill" objectFit="cover" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow-md p-4">
            <p className="text-sm font-medium">Beds</p>
            <p className="text-lg">{experience.beds}</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <p className="text-sm font-medium">Guests</p>
            <p className="text-lg">{experience.guests}</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <p className="text-sm font-medium">Bathrooms</p>
            <p className="text-lg">{experience.bathrooms}</p>
          </div>
        </div>
        <p className="mb-4">{experience.description}</p>
        <h2 className="text-xl font-semibold mb-2">Amenities</h2>
        <ul className="grid grid-cols-2 gap-4 mb-8">
          {experience.amenities.map((amenity, index) => (
            <li key={index} className="bg-white rounded-lg shadow-md p-4">{amenity}</li>
          ))}
        </ul>
        <div className="relative w-full h-64 mb-4">
          <Image src={experience.mapImage} alt="Map" layout="fill" objectFit="cover" />
        </div>
      </div>
    </div>
  );
}
