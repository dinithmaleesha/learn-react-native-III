import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 80 },
      }}
    >
      <Stack.Screen 
        name="HomeScreen"
        component={Home}
        options={{ title: 'GameZone' }}
      />
      <Stack.Screen 
        name="ReviewDetails" 
        component={ReviewDetails}
        options={{ title: 'Review Details' }}
      />
    </Stack.Navigator>
  );
}
