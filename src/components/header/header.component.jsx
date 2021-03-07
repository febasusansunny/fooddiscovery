import React from 'react';
import { connect } from 'react-redux';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ReactComponent as Logo } from  '../../assets/restaurant.svg';
import { auth } from '../../firebase/firebase.utils';
import './header.styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

/* const Header = ({ currentUser }) => (
  <div className='header'>
     <Navbar sticky="top" bg="primary" variant="dark">
       <Navbar.Toggle aria-controls="responsive-navbar-nav" >
  
    <Nav className="mr-auto">
      
    <Nav.Link className='logo-container'  href='/'>
      <Logo className='logo' />
    </Nav.Link>
    </Nav>
    <Nav className="ml-auto">
    <div className='options'>
      <Nav.Link className='option'  href='/'>
        EXPLORE
      </Nav.Link>
      <Nav.Link className='option' href='/'>
        CONTACT
      </Nav.Link>
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Nav.Link className='option'href='/signin'>
          SIGN IN
        </Nav.Link>
      )}
     
    </div>
    
    </Nav>
   
    </Navbar>
  </div>
  </div>
  
);
      */

   const Header = ({ currentUser}) => (
    <div className='header'>
     
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>
      
      <div className='options'>
        
   
        <Link className='option' to='/'>
        EXPLORE
        </Link>
      
       
        {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      )}
     
        </div>
        </div>
   );
  const mapStateToProps = ({ user: { currentUser } }) => ({
    currentUser
  });
  
  export default connect(mapStateToProps)(Header);

