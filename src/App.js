import logo from './logo.svg';
import './App.css';
//Get homepage component to main component
import HomePage from './pages/homepage/homepage.component';
import {Route} from 'react-router-dom';

import Header from './components/header/header.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Directory from './components/directory/directory.component'

//RENDERING
function App() {
  return (
    <div>
      <Header/>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/signin" component={SignInAndSignUpPage}/>

      
    </div>
  );
}

export default App;
