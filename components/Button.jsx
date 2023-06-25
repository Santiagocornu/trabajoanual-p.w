import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

const Button = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image
        source={require('./img/casita.png')} 
        style={styles.image}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'crimson',
    margin:0,
    borderRadius: 5,
  },
  image: {
    width: 30,
    height: 30,
  },
});

export default Button;