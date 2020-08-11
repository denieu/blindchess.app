import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../pages/Home';
import Connection from '../pages/Connection';
import Running from '../pages/Running';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Connection" component={Connection} />
        <Stack.Screen name="Running" component={Running} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
