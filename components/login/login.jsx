import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function login(){
  return (
    <view style={styleLogin.back}>
      <Text>estoy enamorada de un cadete del colegio militar</Text>
      <StatusBar style="auto" />
    </view>
  );
}

