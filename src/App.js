
import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';



function App() {
 const [{}, dispatch] = useStateValue();
  useEffect(() => {
    //run only once when the app component loads...
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS ' , authUser)

      if(authUser){
        //user just logged In

        dispatch({
          type : 'SET_USER',
          user :authUser
        })
      }else {
        //user logged out
        dispatch({
          type: 'SET_USER',
          user :null
        })
      }
    })
  }, [])
  return (
    <Router>
      <div className='app'>
      <Header />
        <Routes>
        <Route path="/login" element={<Login/>} />
          <Route path="/" element={<Home/>} />
          <Route path="checkout" element={ <Checkout/>}>
         
          </Route>
           
        
        </Routes>
      </div>
    </Router>
  );
}


export default App;
