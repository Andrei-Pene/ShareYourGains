import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import {ApolloClient} from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {ApolloProvider} from '@apollo/react-hooks';
import {HttpLink} from 'apollo-link-http';



const link = new HttpLink({uri: 'http://localhost:4000/graphql'});
const cache = new InMemoryCache();

const client = new ApolloClient({
    link,
    cache

})


ReactDOM.render(
    <Router>
        <ApolloProvider client={client}>
            <App /> 
        </ApolloProvider>          
    </Router>,
    document.getElementById('root')
    
    
    );



