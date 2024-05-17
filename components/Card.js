import Image from 'next/image';
import PropTypes from 'prop-types';
import Link from 'next/link';

const Card = ({ id, image, title, host, status }) => {
  return (
    <Link href={`/experience/${id}`} className="block bg-white rounded-lg shadow-md overflow-hidden">
        <div className="relative w-full h-56">
          <Image src={image} alt={title} layout="fill" objectFit="cover" />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-gray-500">Hosted by {host}</p>
          <p className="text-red-500">{status}</p>
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
