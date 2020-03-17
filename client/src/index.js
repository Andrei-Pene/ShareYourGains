import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import {ApolloClient} from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {ApolloProvider} from '@apollo/react-hooks';
import {HttpLink} from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import {AUTH_TOKEN} from './constants/contants';



const link = new HttpLink({uri: '/graphql'});
const cache = new InMemoryCache();

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem(AUTH_TOKEN);
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      }
    }
  });

const client = new ApolloClient({
    link: authLink.concat(link),
    cache: cache

})


ReactDOM.render(
    <Router>
        <ApolloProvider client={client}>
            <App /> 
        </ApolloProvider>          
    </Router>,
    document.getElementById('root')
    
    
    );



