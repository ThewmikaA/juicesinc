import React, { useEffect, useState } from 'react';
import './Order.css'; // Import CSS for styling

export default function Order() {
  // State to store the items fetched from MongoDB
  const [items, setItems] = useState([]);
  // State to store items in the cart
  const [cart, setCart] = useState([]);

  // Fetch data from the backend
  useEffect(() => {
    fetch('http://localhost:8080/api/products')
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  // Function to add an item to the cart
  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]); // Add item to cart
  };

  // Separate items by category
  const fruitSalads = items.filter(item => item.category === 'fruit salad');
  const juices = items.filter(item => item.category === 'juice');
  const iceCreams = items.filter(item => item.category === 'ice cream');

  // Render a section for each category
  const renderSection = (categoryItems, categoryTitle) => (
    <div className="category_section">
      <h2>{categoryTitle}</h2>
      <div className="order_items">
        {categoryItems.map((item) => (
          <div key={item.id} className="order_card">
            <img
              src={
                item.category === 'fruit salad'
                  ? 'fruit_salad.jpg'
                  : item.category === 'juice'
                  ? 'fruit_juice.jpg'
                  : 'ice_cream.jpeg'
              } // Choose image based on category
              alt="Item Image"
              className="order_card_image"
            />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>Price: Rs.{item.price}</p>
            <button className="add_to_cart_button" onClick={() => addToCart(item)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="order_page">
      <div className="Header">
        <h1 className="order_h1">Order</h1>
      </div>
      
      {/* Render Sections by Category */}
      {fruitSalads.length > 0 && renderSection(fruitSalads, 'Fruit Salads')}
      {juices.length > 0 && renderSection(juices, 'Juices')}
      {iceCreams.length > 0 && renderSection(iceCreams, 'Ice Creams')}
      
      <div className="cart_section">
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p >Your cart is empty</p>
        ) : (
          <ul>
            {cart.map((cartItem, index) => (
              <li id='cart-item' key={index}>
                {cartItem.name} - Rs.{cartItem.price}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
