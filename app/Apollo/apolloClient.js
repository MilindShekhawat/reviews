import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
  connectToDevTools: true,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network', // This fetches data from cache and then makes a network request.
      pollInterval: 5000, // Poll every 5 seconds (adjust this interval as needed).
    },
  },
});

export default client;
