import React from 'react';
import {Router, Route} from './components/Ah-Router'
import Header from './components/shared/Header';
import RentalHome from './pages/RentalHome';
import Login from './pages/Login';
import Register from './pages/Register';


const App = () =>{
  // const renderPages = () => {
  //   const {pathname} = window.location;

  //   switch(pathname){
  //     case '/':
  //       return <RentalHome/>;
  //     case '/login':
  //       return  <Login/>;
  //     case '/register':
  //       return <Register/>;
  //     default:
  //       return <RentalHome/>
  //   }
  // }
    return(
    <div>
        <Router>
          <Header/>
          <Route path="/">
            <RentalHome/> 
          </Route>
          <Route path="/login">
            <Login/> 
          </Route>
          <Route path="/register">
            <Register/> 
          </Route>
        </Router>
        
         {/* {renderPages()} */}
    </div>
    )
  }

export default App;