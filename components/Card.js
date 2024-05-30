import Image from 'next/image';
import PropTypes from 'prop-types';
import Link from 'next/link';

const Card = ({ id, image, title, host, status, price }) => {
  return (
    <Link href={`/experience/${id}`} className="block bg-white rounded-lg shadow-md overflow-hidden" style={{ minWidth: '250px', minHeight: '350px' }}>
      <div className="relative w-full h-40">
        <Image src={image} alt={title} layout="fill" objectFit="cover" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-500">Hosted by {host}</p>
        <p className={`text-${status === 'Sold out' ? 'red' : 'green'}-500`}>{status}</p>
        <p className="text-gray-500">{price}</p>
      </div>
    </Link>
  );
};

Card.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  host: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default Card;
