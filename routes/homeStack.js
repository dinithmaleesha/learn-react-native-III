import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import Header from '../shared/header';

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
        options={({navigation}) => {
          return {
            headerTitle: () => <Header navigation={navigation} title='GameZone' />,
          }
        }}
      />
      <Stack.Screen
        name="ReviewDetails"
        component={ReviewDetails}
        options={{ title: 'Review Details' }}
      />
    </Stack.Navigator>
  );
}
