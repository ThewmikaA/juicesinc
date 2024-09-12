import './Card.css';
import { Link } from 'react-router-dom';

// Helper function to choose the image based on the category
const getImageByCategory = (category) => {
  switch (category) {
    case 'fruit salad':
      return './fruit_salad.jpg'; // Path to fruit salad image
    case 'juice':
      return './fruit_juice.jpg'; // Path to fruit juice image
    case 'tropical fruit':
      return './tropical_fruit.jpg'; // Path to tropical fruit image
    default:
      return './default_image.jpg'; // Path to default image if category is unknown
  }
};

function Card({ title, description, category }) {
  const imageSrc = getImageByCategory(category); // Get the image source based on the category

  return (
    <div className="Card">
      <img id='card_img' src={imageSrc} alt="Card-Image" />
      <h5 className='homepage-card-title'>{title}</h5>
      <p className='homepage-card-description'>{description}</p>
      <Link className='homepage-card-link' to="/order">Order Now</Link>
    </div>
  );
}

export default Card;
