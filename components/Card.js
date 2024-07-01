import Image from 'next/image';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { FaStar, FaCalendarAlt, FaMapMarkerAlt, FaDollarSign, FaUsers, FaClock } from 'react-icons/fa';
import { FaMoneyBillAlt } from "react-icons/fa";

const Card = ({ id, image, title, host, price, rating, slotsBooked, duration }) => {
  const ratingStars = (
    <FaStar color={rating >= 1 ? 'gold' : 'lightgray'} />
  );

  return (
    <div className="block bg-white rounded-lg shadow-md overflow-hidden" style={{ minWidth: '250px', height: 'auto' }}>
      <Link href={`/experience/${id}`}>
        <div className="relative w-full h-40">
          <Image src={image} alt={title} layout="fill" objectFit="cover" />
        </div>
      </Link>
      <div className="p-4 flex flex-col justify-between" style={{ height: '100%' }}>
        <div>
          <h3 className="text-lg font-semibold overflow-hidden overflow-ellipsis whitespace-nowrap">{title}</h3>
          <p className="text-gray-500 overflow-hidden overflow-ellipsis whitespace-nowrap mb-1">Hosted by {host}</p>
          
          <div className="flex justify-between items-center text-sm text-gray-500">
            <div className="flex items-center">
              <FaMapMarkerAlt className="mr-1" />
              <span>Nairobi Westlands</span>
            </div>
            <div className="flex items-center">
              {ratingStars}
              <span className="ml-2">{rating}(5)</span>
            </div>
          </div>
          <div className="mt-1">
            <div className="text-gray-500 flex items-center">
              <FaCalendarAlt className="inline mr-1" />
              <span className='mr-4'>Sat, 26 Jun 06:00 PM</span>
              {/* <span>06:00 PM</span> */}
            </div>
            <div className="text-gray-500 flex items-center">
              <FaClock className="inline mr-1" />
              <span>100hrs</span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500 text-sm">
                <FaMoneyBillAlt className="inline mr-1"/> {price} Ksh
              </p>
              <p className="text-gray-500 text-sm">
                <FaUsers className="inline mr-1"/>{slotsBooked} Slots Left
              </p>
            </div>
            <Link href={`/experience/${id}`}>
              <button className="bg-[#12B9f3] text-white py-2 px-4 rounded-lg">
                Book Now
              </button>
            </Link>
          </div>
        </div>
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
  // duration: PropTypes.string.isRequired,
};

export default Card;
