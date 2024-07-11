import Image from 'next/image';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { FaStar, FaCalendarAlt, FaMapMarkerAlt, FaMoneyBillAlt, FaUsers } from 'react-icons/fa';

const Card = ({ id, image, title, host, price, rating, slotsBooked }) => {
  const ratingStars = Array.from({ length: 1 }, (_, i) => (
    <FaStar key={i} color={rating > i ? 'gold' : 'lightgray'} />
  ));

  return (
    <div className="block bg-white rounded-lg shadow-md overflow-hidden relative" style={{ minWidth: '300px', height: 'auto' }}>
      <Link href={`/experience/${id}`}>
        <div className="relative w-full h-40">
          <Image src={image} alt={title} layout="fill" objectFit="cover" />
          {/* Slots Left */}
          <div className="absolute bottom-0 left-0 bg-white bg-opacity-70  text-black  py-1 px-3 rounded-t  text-sm">
            <FaUsers className="inline mr-1"/>
            {slotsBooked} Slots Left
          </div>
          {/* Rating */}
          <div className="absolute flex bottom-0 right-0 bg-white bg-opacity-70 text-black  py-1 rounded-t px-3 text-sm  ">
            {ratingStars}
            <span className="ml-1">{rating} (5)</span>
          </div>
        </div>
      </Link>
      <div className="p-4 flex flex-col justify-between space-y-2" style={{ minHeight: '160px' }}>
        <h3 className="text-lg font-semibold overflow-hidden overflow-ellipsis whitespace-nowrap">{title}</h3>
        <p className="text-gray-500 text-sm overflow-hidden overflow-ellipsis whitespace-nowrap mb-1">Hosted by {host}</p>
        
        <div className="text-gray-500 text-sm flex items-center">
          <FaMapMarkerAlt className="mr-2" />
          <span>Nairobi Westlands</span>
        </div>
        
        <div className="text-gray-500 flex items-center">
          <FaCalendarAlt className="inline mr-2" />
          <span>Sat, 26 Jun 06:00 PM</span>
        </div>
        
        <div className="text-gray-500 flex items-center">
          <FaMoneyBillAlt className="inline mr-2"/> Ksh {price}
        </div>

        <Link href={`/experience/${id}`}>
          <button className="bg-[#12B9f3] text-white py-2 w-full rounded-lg mt-2">
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
  price: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  slotsBooked: PropTypes.number.isRequired,
};

export default Card;
