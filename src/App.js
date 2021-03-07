import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
//Get homepage component to main component
import HomePage from './pages/homepage/homepage.component';



import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import Header from './components/header/header.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
//import Directory from './components/directory/directory.component'
import HyderabadRestaurantPage from './pages/restaurants-in-hyderabad/restaurants-in-hyderabad.component';
import DelhiRestaurantPage from './pages/restaurants-in-delhi/restaurants-in-delhi.component';
import RestaurantPage from './pages/restaurants-in-bangalore/restaurants-in-bangalore.component';
import CochinRestaurantPage from './pages/restaurants-in-cochin/restaurants-in-cochin.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
//RENDERING
{/*function App() {
  return (
    <div>
      <Header/>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/signin" component={SignInAndSignUpPage}/>

      
    </div>
  );
}

export default App;
*/}
class App extends React.Component {
  // unsubscribeFromAuth = null;
 
   componentDidMount() {
     const { setCurrentUser } = this.props;
 
     this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
       if (userAuth) {
         const userRef = await createUserProfileDocument(userAuth);
 
         userRef.onSnapshot(snapShot => {
           setCurrentUser({
             id: snapShot.id,
             ...snapShot.data()
           });
         });
       }
 
       setCurrentUser(userAuth);
     });
   }
 
   componentWillUnmount() {
     this.unsubscribeFromAuth();
   }
 
   render() {
     return (
       <div className="App">
         
         <Header />
         
         
         <Switch>
           <Route exact path='/' component={HomePage} />
           

           
           <Route
             exact
             path='/signin'
             render={() =>
               this.props.currentUser ? (
                 <Redirect to='/' />
               ) : (
                 <SignInAndSignUpPage />
               )
             }
           />
         </Switch>
        
         <Route exact path='/bangalore' component={RestaurantPage}/>
           <Route exact path='/cochin' component={CochinRestaurantPage}/>
           <Route exact path='/hyderabad' component={HyderabadRestaurantPage}/>
           <Route exact path='/delhi' component={DelhiRestaurantPage}/>
         
       </div>

     
     );
      
     
  
   }
 }
 
 const mapStateToProps = ({ user }) => ({
   currentUser: user.currentUser
 });
 
 const mapDispatchToProps = dispatch => ({
   setCurrentUser: user => dispatch(setCurrentUser(user))
 });
 
 export default connect(
   mapStateToProps,
   mapDispatchToProps
 )(App);