import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {memo} from 'react';

export type MainStackParamList = {};

const Stack = createNativeStackNavigator<MainStackParamList>();

const MainNavigator = () => {
  return (
    <Stack.Navigator>{/* Your screens, probably Tabs  */}</Stack.Navigator>
  );
};

export default memo(MainNavigator);
