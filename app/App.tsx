import {ApolloProvider} from '@apollo/client';
import {NavigationContainer} from '@react-navigation/native';
import React, {memo} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import useRootApolloClient from './src/hooks/useRootApolloClient';
import RootNavigator from './src/navigation/RootNavigator';

const App = () => {
  const client = useRootApolloClient();

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <ApolloProvider client={client}>
          <RootNavigator />
        </ApolloProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default memo(App);
