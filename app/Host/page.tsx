import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

const host = {
  name: 'Kevin Hart',
  hostingSince: '2024',
  occupation: 'Comedian/businessman',
  school: 'George Washington High School',
  funFact: 'I was a nationally competitive swimmer',
  pets: 'My two dogs',
  language: 'English',
  location: 'Los Angeles, CA',
  bio: 'Kevin Hart is a renowned comedian and businessman with a passion for hosting and entertaining. He loves working and is obsessed with stand-up comedy and comedians in general.',
  profilePicture: 'https://randomuser.me/api/portraits/men/40.jpg', // Update with actual image path
};

const HostDetail = () => {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-4">About {host.name}</h1>
        <div className="flex">
          <Image src={host.profilePicture} alt={host.name} width={150} height={150} className="rounded-full" />
          <div className="ml-4">
            <p className="text-lg"><strong>Hosting Since:</strong> {host.hostingSince}</p>
            <p className="text-lg"><strong>Occupation:</strong> {host.occupation}</p>
            <p className="text-lg"><strong>School:</strong> {host.school}</p>
            <p className="text-lg"><strong>Fun Fact:</strong> {host.funFact}</p>
            <p className="text-lg"><strong>Pets:</strong> {host.pets}</p>
            <p className="text-lg"><strong>Speaks:</strong> {host.language}</p>
            <p className="text-lg"><strong>Location:</strong> {host.location}</p>
          </div>
        </div>
        <div className="mt-6">
          <h2 className="text-2xl font-bold mb-4">Bio</h2>
          <p>{host.bio}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HostDetail;
