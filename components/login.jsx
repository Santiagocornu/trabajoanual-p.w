
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import ReposiList from './repositoriolist';
import { Constants } from 'expo-constants';

const Inicio = () =>{
  return (
      <View style={{ marginTop: 30, flexGrow: 1}}>
      <ReposiList />
      </View>
  )
}



export default Inicio

