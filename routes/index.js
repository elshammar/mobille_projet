// import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View,Button,TextInput, Alert } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Bottomtabs from '../ecrans/tabs'
import Screen2 from '../ecrans/Screen2';


const Stack = createNativeStackNavigator();
const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={Bottomtabs} />
        <Stack.Screen name="Screen2" component={Screen2} options={{headerShown:true}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes