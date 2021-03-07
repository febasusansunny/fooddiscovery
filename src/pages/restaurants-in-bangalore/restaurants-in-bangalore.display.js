import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
//import BangaloreRestaurantPage from './restaurants-in-bangalore/restaurants-in-bangalore.component'
const DisplayRestaurant = ({ title, imageUrl, size,id, history, linkUrl, match }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    
    <div className='content'>
      <h1 className='title'>{title}</h1>
      
    </div>
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
  </div>
);

export default withRouter(DisplayRestaurant);
