import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function RevieDetails({ navigation }) {

  const pressHandler = () => {
    navigation.goBack()
  }
  return (
    <View style={globalStyles.container}>
      <Text>Review Details Screen</Text>
      <Button title='back to home screen' onPress={pressHandler}/>
    </View>
  )
}
