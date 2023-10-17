import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,Button,TextInput, Alert } from 'react-native';
import Routes from './routes';

export default function App() {
  
  return (
    <View style={{flex:1}}>
      <Routes/>
    </View>
  );
}

