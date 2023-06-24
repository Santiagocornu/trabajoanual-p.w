
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import ReposiList from './repositoriolist';
import Constants from 'expo-constants';
import Navbar from './nav';



const Inicio = () =>{
  return (
      
      <View style={styles.Principal}>
      <Navbar />
      <View style={styles.Body}>
      <ReposiList />
      </View>
      </View>
  )
}

const styles = StyleSheet.create({
  Principal: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    padding: 24,
    backgroundColor: '#eaeaea',
  },
  Body:{
    flex: 1
  }
}
)


export default Inicio

