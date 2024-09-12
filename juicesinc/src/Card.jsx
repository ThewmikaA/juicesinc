import './Card.css';
import { Link } from 'react-router-dom';


function Card({title, description, link,image}){
    return(
        <div className="Card">
            <img src={image} alt="Card-Image" />
            <h5 className='homepage-card-title' >{title}</h5>
            <p className='homepage-card-description'>{description}</p>
            <Link className='homepage-card-link' to={link}>Order Now</Link>
        </div>
    );
}

export default Card;