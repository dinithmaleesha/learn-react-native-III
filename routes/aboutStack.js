import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import About from '../screens/about';

const Stack = createStackNavigator();

export default function AboutStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 80 },
      }}
    >
      <Stack.Screen 
        name="About" 
        component={About}
        options={{ title: 'About GameZone' }}
      />
    </Stack.Navigator>
  );
}
