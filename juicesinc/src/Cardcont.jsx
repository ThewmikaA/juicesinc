import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Cardcont.css';


function CardCont() {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };

  return(
    <div className="cardmaincont">
      <h1 id='cardcont name 1'>Fruit salads</h1>
      <div className='CardCont'>
        <Carousel responsive={responsive}>
          <div><h1>CARD</h1></div>
          <div><h1>CARD</h1></div>
          <div><h1>CARD</h1></div>
          <div><h1>CARD</h1></div>
          <div><h1>CARD</h1></div>
        </Carousel>
      </div>
    </div>
  );
}


export default CardCont;