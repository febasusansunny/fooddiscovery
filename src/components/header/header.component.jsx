import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

//import { ReactComponent as Logo } from '../../assets/logos.svg';

import './header.styles.scss';



  const Header = ({ currentUser, hidden }) => (
    <div className='header'>
      {/* <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link> */}
      <div className='options'>
        <Link className='option' to='/'>
        EXPLORE
        </Link>
       
        
          <Link className='option' to='/signin'>
            SIGN IN
          </Link>
     
        </div>
        </div>
    
  );



export default Header;