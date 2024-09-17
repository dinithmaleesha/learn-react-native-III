import 'react-native-gesture-handler';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './homeStack';
import AboutStack from './aboutStack';

const Drawer = createDrawerNavigator();

export default function RootDrawerNavigator() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen
                    name="Home"
                    component={HomeStack}
                    options={{ headerShown: false }}
                />
                <Drawer.Screen
                    name="About"
                    component={AboutStack}
                    options={{ headerShown: false }}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
