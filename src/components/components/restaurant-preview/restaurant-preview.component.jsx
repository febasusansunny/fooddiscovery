import React from 'react';

import RestaurantDetails from '../restaurant-details/restaurant-details.component';

import './restaurant-preview.styles.scss';

const RestaurantPreview = ({ title, items}) => (
  <div className='restaurant-preview'>
    <h1 className='title'>{title}</h1>
    <div className='preview'>
      {items 
        .filter((item, idx) => idx < 6)
        .map(item => (
          <RestaurantDetails key={item.id} item={item}
          img src = {item.imageurl} /> 
        ))}
        
    
    </div>
  </div>
);

export default RestaurantPreview;
