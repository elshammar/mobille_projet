import { View, Text } from 'react-native'
import React from 'react'
// import {NavigationContenaire} from '@react-navigation/material-bottom-tabs'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../HomeScreen';

import Screen1 from '../Screen1'
import Screen2 from '../Screen2'
import Screen3 from '../Screen3'

const Tab = createMaterialBottomTabNavigator();

const Bottomtabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="tabs_home"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        headerShown:false,
      }}
    >
      <Tab.Screen
        name="tabs_home1"
        component={Home}
        options={{
          tabBarLabel: 'Accueil',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="tabs_home2"
        component={Screen1}
        options={{
          tabBarLabel: 'Notification',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
          //tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="tabs_home3"
        component={Screen3}
        options={{
          tabBarLabel: 'Profil',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="facebook" color={color} size={size} />
          ),
        }}
      />
      
    </Tab.Navigator>
  );
}

export default Bottomtabs