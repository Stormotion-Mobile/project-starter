import {ApolloProvider} from '@apollo/client';
import {NavigationContainer} from '@react-navigation/native';
import React, {memo} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import useRootApolloClient from './src/hooks/useRootApolloClient';
import RootNavigator from './src/navigation/RootNavigator';
import {initReactI18next} from 'react-i18next';
import i18n from 'i18next';
import en from './src/strings/en.json';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  fallbackLng: 'en',
  resources: {
    en,
  },
});

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
