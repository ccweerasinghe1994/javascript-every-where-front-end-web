// index.js
// This is the main entry point of our application
import React from 'react';
import ReactDom from 'react-dom';
import Pages from './pages';
import GlobalStyle from './components/GlobalStyles';
import {ApolloClient,ApolloProvider,InMemoryCache} from '@apollo/client';

const uri = process.env.API_URI;
const cache = new InMemoryCache();
const client = new ApolloClient({
  uri,
  cache,
  connectToDevTools:true
})
const App = ()=>{
  return(
    <ApolloProvider client={client} >
      <GlobalStyle/>
     <Pages/>
    </ApolloProvider>
  )
}

ReactDom.render(<App/>,document.getElementById('root'));