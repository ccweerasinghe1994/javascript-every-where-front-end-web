import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import HomePage from './home';
import MyNotes from './myNotes';
import Favorites from './favorites';
import Layout from '../components/layout';
import NotePage from './notePage';


const Pages=()=>{
  return(
    <Router>
      <Layout>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/mynotes' component={MyNotes} />
        <Route exact path='/favorites' component={Favorites} />
        <Route exact path='/note/:id' component={NotePage} />
      </Layout>

    </Router>
  )
}

export default Pages;