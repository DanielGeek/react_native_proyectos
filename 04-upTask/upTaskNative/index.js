import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

/* -------------------------------------------------------------------------- */
/*                                   Apollo                                   */
/* -------------------------------------------------------------------------- */
import client from './config/apollo';
import {ApolloProvider} from '@apollo/client';

/* -------------------------------------------------------------------------- */
/*                  Proveer de forma global metodos de apollo                 */
/* -------------------------------------------------------------------------- */
const upTaskApp = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

AppRegistry.registerComponent(appName, () => upTaskApp);
