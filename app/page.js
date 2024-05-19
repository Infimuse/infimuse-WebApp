import Card from '@/components/Card';
import Navbar from '@/components/Navbar';
import SubNavbar from '@/components/SubNavbar';
import SubNavbar2 from '@/components/SubNavbar2';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';

const experiences = [
  {
    id: '1', // Add unique ID for each experience
    image: '/assets/image.jpeg', // Update with your image paths
    title: 'Train at the X-Mansion',
    host: 'John',
    status: 'Upcoming'
  },
  {
    id: '2',
    image: '/assets/image.jpeg', // Update with your image paths
    title: 'Train at the X-Mansion',
    host: 'John',
    status: 'Upcoming'
  },
  {
    id: '3',
    image: '/assets/image.jpeg', // Update with your image paths
    title: 'Train at the X-Mansion',
    host: 'John',
    status: 'Upcoming'
  },
  {
    id: '4',
    image: '/assets/image.jpeg', // Update with your image paths
    title: 'Train at the X-Mansion',
    host: 'John',
    status: 'Upcoming'
  },
  {
    id: '5',
    image: '/assets/image.jpeg', // Update with your image paths
    title: 'Train at the X-Mansion',
    host: 'John',
    status: 'Upcoming'
  },
  {
    id: '6',
    image: '/assets/image.jpeg', // Update with your image paths
    title: 'Train at the X-Mansion',
    host: 'John',
    status: 'Upcoming'
  },
  {
    id: '7',
    image: '/assets/image.jpeg', // Update with your image paths
    title: 'Go on tour with Feid',
    host: 'Feid',
    status: 'Sold out'
  },
  {
    id: '8',
    image: '/assets/image.jpeg', // Update with your image paths
    title: 'Train at the X-Mansion',
    host: 'John',
    status: 'Upcoming'
  },
  {
    id: '9',
    image: '/assets/image.jpeg', // Update with your image paths
    title: 'Train at the X-Mansion',
    host: 'John',
    status: 'Upcoming'
  },
  {
    id: '10',
    image: '/assets/image.jpeg', // Update with your image paths
    title: 'Train at the X-Mansion',
    host: 'John',
    status: 'Upcoming'
  },
  {
    id: '11',
    image: '/assets/image.jpeg', // Update with your image paths
    title: 'Train at the X-Mansion',
    host: 'John',
    status: 'Upcoming'
  },
  {
    id: '12',
    image: '/assets/image.jpeg', // Update with your image paths
    title: 'Train at the X-Mansion',
    host: 'John',
    status: 'Upcoming'
  },
  // Add more experiences as needed
];

const HomePage = () => {
  return (
    <div className="bg-white">
      <SubNavbar2/>
      <Navbar />
      <SubNavbar/>
      <Hero/>
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold mb-8">Past experiences</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {experiences.map((experience, index) => (
            <Card
              key={index}
              id={experience.id}
              image={experience.image}
              title={experience.title}
              host={experience.host}
              status={experience.status}
            />
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default HomePage;
