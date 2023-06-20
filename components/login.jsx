import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function login(){
  return (
    <view style={styleLogin.back}>
      <Text>estoy enamorada de un cadete del colegio militar</Text>
      <StatusBar style="auto" />
    </view>
  );
}

const styleLogin= StyleSheet.create({

back:{
  backgroundColor : 'red' ,
  textAlign : 'center',
  border : 'black solid 1px',
},

});

