import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import About from '../screens/about';
import Header from '../shared/header';

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
        name="AboutScreen" 
        component={About}
        options={({navigation}) => {
          return {
            headerTitle: () => <Header navigation={navigation} title='About GameZone' />,
          }
        }}
      />
    </Stack.Navigator>
  );
}
