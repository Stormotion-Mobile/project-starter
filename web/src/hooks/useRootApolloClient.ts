import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  createHttpLink,
  split,
} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';
import {WebSocketLink} from '@apollo/client/link/ws';
import {getMainDefinition} from '@apollo/client/utilities';
import {LocalStorageWrapper, persistCache} from 'apollo3-cache-persist';
import {useEffect, useState} from 'react';
import {API_URL} from '../env';
import {isDev} from '../utils/dev';
import {devError} from '../utils/loggingHelpers';

const WS_URL = API_URL.replace('http', 'ws');

// Replace useIdToken/getIdToken with your auth system
const useIdToken = () => '12';
const getIdToken = () => Promise.resolve('12');

export const apolloCache = new InMemoryCache();

const httpLink = createHttpLink({
  uri: API_URL,
});

const authLink = setContext(async (_, {headers}) => {
  const token = await getIdToken();

  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const generateClient = (token?: string) => {
  const wsLink = new WebSocketLink({
    options: {
      connectionParams: {
        headers: {
          Authorization: token ? `Bearer ${token}` : '',
        },
      },
      reconnect: true,
    },
    uri: WS_URL,
  });

  const splitLink = split(
    ({query}) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription'
      );
    },
    wsLink,
    authLink.concat(httpLink),
  );

  return new ApolloClient({
    cache: apolloCache,
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'cache-and-network',
      },
    },
    link: splitLink,
  });
};

const useRootApolloClient = () => {
  const token = useIdToken();

  const [client, setClient] =
    useState<ApolloClient<NormalizedCacheObject> | null>(null);

  useEffect(() => {
    setClient(generateClient(token));
  }, [token]);

  useEffect(() => {
    persistCache({
      cache: apolloCache,
      debug: isDev,
      storage: new LocalStorageWrapper(window.localStorage),
    }).catch(error => devError('Error restoring Apollo cache', error));
  }, []);

  return client;
};

export default useRootApolloClient;
