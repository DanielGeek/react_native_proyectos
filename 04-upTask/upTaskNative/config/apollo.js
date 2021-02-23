import {ApolloClient, InMemoryCache, createHttpLink} from '@apollo/client';
import {setContext} from 'apollo-link-context';

// import {Platform} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const httpLink = createHttpLink({
  uri: 'https://peaceful-lowlands-19834.herokuapp.com/',
  /* -------------------------------------------------------------------------- */
  /*              ip maquina virtual android http://10.0.2.2:4000/              */
  /* -------------------------------------------------------------------------- */
  // Platform.OS === 'ios' ? 'http://localhost:4000' : 'http://10.0.2.2:4000/',
});
// Agregar a los headers el token
const authLink = setContext(async (_, {headers}) => {
  // Leer el token
  const token = await AsyncStorage.getItem('token');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

// Initialize Apollo Client
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});

export default client;
