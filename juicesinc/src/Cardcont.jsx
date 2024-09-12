import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Cardcont.css';
import Card from './Card'; // Import the Card component

function CardCont() {
  // State to store the items fetched from MongoDB
  const [items, setItems] = useState([]);

  // Function to shuffle an array
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
  };

  // Fetch data from the backend
  useEffect(() => {
    fetch('http://localhost:8080/api/products')
      .then((response) => response.json())
      .then((data) => {
        const shuffledData = shuffleArray(data); // Shuffle the data after fetching
        setItems(shuffledData); // Set the shuffled data
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 425 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 425, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="cardmaincont">
      <h1 id='cardcont-name-1'>Fruit Salads and Juices</h1>
      <div className='CardCont'>
        <Carousel responsive={responsive}>
          {items.map((item) => (
            <Card
              key={item.id}
              title={item.name}
              description={item.description}
              category={item.category} // Pass the category to the Card component
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default CardCont;
