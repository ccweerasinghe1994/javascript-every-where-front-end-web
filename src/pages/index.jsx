import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import HomePage from './home';
import MyNotes from './myNotes';
import Favorites from './favorites';
import Layout from '../components/layout';


const Pages=()=>{
  return(
    <Router>
      <Layout>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/mynotes' component={MyNotes} />
        <Route exact path='/favorites' component={Favorites} />
      </Layout>

    </Router>
  )
}

export default Pages;