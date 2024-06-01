import Image from 'next/image';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { FaStar } from 'react-icons/fa';

const Card = ({ id, image, title, host, status, price, rating, slotsBooked }) => {
  const ratingStars = Array.from({ length: 5 }, (v, i) => (
    <FaStar key={i} color={i < rating ? 'gold' : 'lightgray'} />
  ));

  return (
    <div className="block bg-white rounded-lg shadow-md overflow-hidden" style={{ minWidth: '250px', minHeight: '400px' }}>
      <Link href={`/experience/${id}`}>
        <div className="relative w-full h-40">
          <Image src={image} alt={title} layout="fill" objectFit="cover" />
        </div>
      </Link>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-500">Hosted by {host}</p>
        <div className="flex items-center">
          {ratingStars}
          <span className="ml-2">{rating} / 5</span>
        </div>
        {/* <p className={`text-${status === 'Sold out' ? 'red' : 'green'}-500`}>{status}</p> */}
        <p className="text-gray-500">{price}</p>
        <p className="text-gray-500">Slots booked: {slotsBooked}</p>
        <Link href={`/experience/${id}`}>
          <button className="mt-2 w-full bg-blue-500 text-white py-2 rounded-lg">
            Book Now
          </button>
        </Link>
      </div>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  host: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  slotsBooked: PropTypes.number.isRequired,
};

export default Card;
