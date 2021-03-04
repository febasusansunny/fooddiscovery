import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'hyderabad',
          imageUrl: 'https://skilledimpact.com/wp-content/uploads/20181106_131538.jpg',
          id: 1,
          linkUrl: 'hyderabad'
        },
        {
          title: 'Bangalore',
          imageUrl: 'https://hippie-inheels.com/wp-content/uploads/2017/03/Bangalore-Food-Guide-2.jpg',
          id: 2,
          linkUrl: 'bangalore'
        },
        {
          title: 'Cochin',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOFLKuYdpfxuOVp-H8hysxIrg8fbkqPZrNTw&usqp=CAU',
          id: 3,
          linkUrl: 'cochin'
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
