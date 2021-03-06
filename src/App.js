import React from 'react';
import Header from './components/shared/Header';
import Routes from './components/Routes';

import { BrowserRouter as Router } from 'react-router-dom';
import Provider from './store/Provider'

import { initStore } from './store/';
// import { initStore } from './store/index';

const store = initStore();
const App = () =>{
    return(
      <Provider store={store}>
       <Router>
        <Header/>
        <Routes/>
      </Router> 
      </Provider>
    )
  }

export default App;