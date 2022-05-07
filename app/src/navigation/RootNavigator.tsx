import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import React, {memo, useEffect, useMemo, useState} from 'react';
import {StatusBar} from 'react-native';
import SplashScreen from '../screens/SplashScreen';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';
import NavigationKeys from './NavigationKeys';

export type RootStackParamList = {
  [NavigationKeys.MainNavigator]?: undefined;
  [NavigationKeys.Splash]: undefined;
  [NavigationKeys.AuthNavigator]: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const commonScreenOptions: NativeStackNavigationOptions = {
  headerShown: false,
  headerTitleAlign: 'center',
};

const modalsOptions: NativeStackNavigationOptions = {presentation: 'modal'};

const RootNavigator: React.FC = () => {
  const [currentRoute, setCurrentRoute] = useState<keyof RootStackParamList>(
    NavigationKeys.Splash,
  );

  const loading = false;
  const isLoggedIn = false;

  useEffect(() => {
    if (loading) {
      return;
    }

    if (!isLoggedIn) {
      setCurrentRoute(NavigationKeys.AuthNavigator);
      return;
    }

    setCurrentRoute(NavigationKeys.MainNavigator);
  }, [isLoggedIn, loading]);

  const currentComponent = useMemo(() => {
    switch (currentRoute) {
      case NavigationKeys.AuthNavigator:
        return AuthNavigator;
      case NavigationKeys.MainNavigator:
        return MainNavigator;
      default:
        return SplashScreen;
    }
  }, [currentRoute]);

  return (
    <>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <Stack.Navigator>
        {/* Current Flow */}
        <Stack.Group>
          <Stack.Screen
            name={currentRoute}
            component={currentComponent}
            options={commonScreenOptions}
          />
        </Stack.Group>

        {/* Modals */}
        <Stack.Group screenOptions={modalsOptions}>
          {/* Modal1 */}
          {/* Modal2 */}
        </Stack.Group>
      </Stack.Navigator>
    </>
  );
};

export default memo(RootNavigator);
