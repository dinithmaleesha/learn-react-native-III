import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Home({ navigation }) {

  const pressHandler = () => {
    navigation.navigate('ReviewDetails')
    // navigation.push('ReviewDetails')
  }

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home Screen</Text>
      <Button title='Go to review dets' onPress={pressHandler}/>
    </View>
  )
}
