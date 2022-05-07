import {ApolloProvider} from '@apollo/client';
import {useMemo} from 'react';
import Loading from './components/Loading';
import useRootApolloClient from './hooks/useRootApolloClient';
import RootNavigator from './navigation/RootNavigator';

function App() {
  const client = useRootApolloClient();

  const Content = useMemo(
    () =>
      client ? (
        <ApolloProvider client={client}>
          <RootNavigator />
        </ApolloProvider>
      ) : (
        <Loading />
      ),
    [client],
  );

  return Content;
}

export default App;
