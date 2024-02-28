// DetailPage.js

import {} from 'react';
import MyButton from './MyButton';
import './DetailPage.css';

const DetailPage = () => {
  return (
    <div className="detail-page">
      <div className="hero-section">
        <h1>Product Details</h1>
        <p>Explore the amazing features of our product.</p>
      </div>
      <div className="detail-container">
        <h2>Name: MobilePhone</h2>
        <h3>Price: $10000</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio eius dolorem facilis,
          magnam amet aut cupiditate illo aliquid architecto.
        </p>
        <MyButton onClick={() => {}} label="Buy Now" />
      </div>
    </div>
  );
};

export default DetailPage;
