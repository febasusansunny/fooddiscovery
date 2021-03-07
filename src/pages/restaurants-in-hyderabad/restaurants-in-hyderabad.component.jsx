import React from 'react';

import HYDERABAD_RESTAURANTS from './restaurants-in-hyderabad.data.js';

import RestaurantPreview from '../../components/restaurant-preview/restaurant-preview.component';

class RestaurantPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: HYDERABAD_RESTAURANTS
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className='restaurant-page'>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <RestaurantPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default RestaurantPage;
