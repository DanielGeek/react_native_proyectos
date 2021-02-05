import {ApolloClient, InMemoryCache} from '@apollo/client';

import { Platform } from 'react-native';

const uri = Platform.OS === 'ios' ? 'http://localhost:4000' : 'http://10.0.2.2:4000/';

// Initialize Apollo Client
const client = new ApolloClient({
  /* -------------------------------------------------------------------------- */
  /*              ip maquina virtual android http://10.0.2.2:4000/              */
  /* -------------------------------------------------------------------------- */
  uri,
  cache: new InMemoryCache(),
});

export default client;
