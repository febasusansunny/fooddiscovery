import React from 'react';

const RestaurantDetails = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <div className='restaurant-details'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        
      </div>
      
    </div>
  );
};



export default RestaurantDetails;