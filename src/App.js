// index.js
// This is the main entry point of our application
import React from 'react';
import ReactDom from 'react-dom';
import Pages from './pages';

const App = ()=>{
  return(
    <div>
     <Pages/>
    </div>
  )
}

ReactDom.render(<App/>,document.getElementById('root'));