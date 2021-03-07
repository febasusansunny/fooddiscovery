import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'Hyderabad',
          imageUrl: 'https://skilledimpact.com/wp-content/uploads/20181106_131538.jpg',
          id: 1,
          linkUrl: 'hyderabad'
        },
        {
          title: 'Bangalore',
          imageUrl: 'https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2016/01/south-indian-platter.jpg',
          id: 2,
          linkUrl: 'bangalore'
        },
        {
          title: 'Cochin',
          imageUrl: 'https://i1.wp.com/www.keralahoneymoons.com/blog/wp-content/uploads/2015/10/Sadhya-Famous-Food-in-Kerala.jpg',
          id: 3,
          linkUrl: 'cochin'
        },
        {
        title: 'Delhi',
          imageUrl: 'https://betweentravels.files.wordpress.com/2019/11/turkish-delights.jpg?w=2000',
          id: 4,
          linkUrl: 'delhi'
      }
       
      ]
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
