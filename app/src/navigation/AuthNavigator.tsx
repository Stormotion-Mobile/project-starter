import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {memo} from 'react';

export type AuthStackParamList = {};

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigator = () => {
  return (
    <Stack.Navigator>{/* Your screens, probably Tabs  */}</Stack.Navigator>
  );
};

export default memo(AuthNavigator);
