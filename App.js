import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import Home from './screens/home';

export default function App() {
  const [fontsLoaded, error] = useFonts({
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
  });

  if (error) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Error loading fonts!</Text>
      </View>
    );
  }

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading fonts...</Text>
      </View>
    );
  }

  return <Home />;
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
