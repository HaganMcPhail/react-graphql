import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Countries from './Countries';
import './App.css';

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/graphql"
});

const App = () => (
  <ApolloProvider client={client}>
    <div className="container">
      <nav className="navbar navbar-dark bg-primary">
        <a className="navbar-brand" href="#">React and GraphQL - Sample Application</a>
      </nav>
      <div>
        <Countries />
      </div>
    </div>
  </ApolloProvider>
)


export default App;
