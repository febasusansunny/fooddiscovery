import React from 'react';

import COCHIN_RESTAURANTS from './restaurants-in-cochin.data.js';

import RestaurantPreview from '../../components/restaurant-preview/restaurant-preview.component';

class RestaurantPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: COCHIN_RESTAURANTS
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
