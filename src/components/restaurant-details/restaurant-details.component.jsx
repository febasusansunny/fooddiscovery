import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
const RestaurantDetails = ({ item }) => {
  const { name,  imageUrl } = item;

  return (
    <div className='restaurant-details'>
      
      
      <div 
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})` ,width:'1350px', height:'300px'
        }}
      />
      <div className='collection-footer'>
        <h2 className='name'>{name}</h2>
        
      </div>
    </div>
  );
};

export default connect(
 
)(RestaurantDetails);
