import React from 'react';
import { View, Text, StyleSheet, Touchable, Image } from 'react-native';
import Button from './Button';

const Navbar = () => {
  return (
    
    <View style={styles.navbar}>
        <Button />
      <Text styles={styles.navbarText}>Barra de navegación</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    img:{
        width:30,
        height:30,
    },
  navbar: {
    backgroundColor: 'red',
    paddingTop: 20,
    paddingBottom: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    textAlign: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    borderBottomColor:'black',
    borderBottomWidth:2,
  },
  navbarText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Navbar;