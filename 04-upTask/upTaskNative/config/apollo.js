import {ApolloClient, InMemoryCache} from '@apollo/client';

// Initialize Apollo Client
const client = new ApolloClient({
/* -------------------------------------------------------------------------- */
/*              ip maquina virtual android http://10.0.2.2:4000/              */
/* -------------------------------------------------------------------------- */
  uri: 'http://10.0.2.2:4000/',
  cache: new InMemoryCache(),
});

export default client;
