import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

const instructor = {
  name: 'Lisa Johnson',
  expertise: 'Cake Decorating',
  school: 'Culinary Institute of America',
  funFact: 'I have a black belt in karate',
  pets: 'A cat named Whiskers',
  language: 'English',
  location: 'New York, NY',
  bio: 'Lisa Johnson is an experienced cake decorator with a passion for teaching. She enjoys sharing her knowledge and helping others perfect their cake decorating skills.',
  profilePicture: '/path/to/lisa-johnson.jpg', // Update with actual image path
};

const InstructorDetail = () => {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-4">About {instructor.name}</h1>
        <div className="flex">
          <Image src={instructor.profilePicture} alt={instructor.name} width={150} height={150} className="rounded-full" />
          <div className="ml-4">
            <p className="text-lg"><strong>Expertise:</strong> {instructor.expertise}</p>
            <p className="text-lg"><strong>School:</strong> {instructor.school}</p>
            <p className="text-lg"><strong>Fun Fact:</strong> {instructor.funFact}</p>
            <p className="text-lg"><strong>Pets:</strong> {instructor.pets}</p>
            <p className="text-lg"><strong>Speaks:</strong> {instructor.language}</p>
            <p className="text-lg"><strong>Location:</strong> {instructor.location}</p>
          </div>
        </div>
        <div className="mt-6">
          <h2 className="text-2xl font-bold mb-4">Bio</h2>
          <p>{instructor.bio}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default InstructorDetail;
