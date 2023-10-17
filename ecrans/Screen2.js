import { View, Text, TextInput, Button,Alert } from 'react-native'
import React, { useEffect } from 'react'
import Homestyle from './HomeScreen/style'

const Screen2 = ({route,navigation}) => {
  const {item}=route.params
  useEffect(()=>{
    navigation.setOptions({title:item.name})
  })
  return (
    <View>
      <View style={{backgroundColor:'blue'}}>
      </View>
    </View>
  )
}

export default Screen2