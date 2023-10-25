import React, { useState } from 'react';
import { Button, TextInput, View , Text} from 'react-native';
import { FIREBASE_AUTH } from '../../firestore/FireBase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { StyleSheet } from 'react-native-web';




const Login = () => {

  const signIn = async() =>{
    
    try {
      const response = await signInWithEmailAndPassword(auth, mail, password);
      console.log(response);

    } catch (error) {
      console.log(error);
    }finally{
    }
  }

  const signUp = async() =>{
    
    try {
      const response = await createUserWithEmailAndPassword(auth, mail, password);
      console.log(response);

    } catch (error) {
      console.log(error);
    }finally{

    }
  }

  const gitIn = async () => {
    const provider = new firebase.auth.GithubAuthProvider();
    try {
      await firebase.auth().signInWithPopup(provider);
    } catch (error) {
      console.error(error);
    }
  }



  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const auth = FIREBASE_AUTH;


  const Styles = StyleSheet.create({
    container:{
      margin:10,
    }
  })
  

  return (
    <View style={Styles.container}>
      <Text>s</Text>
      <Text>s</Text>
      <Text>s</Text>
      <Text>s</Text>
      <TextInput
        value={mail}
        onChangeText={(text) => setMail(text)}
        placeholder={'Nombre de usuario'}
      />
      <TextInput
        value={password}
        onChangeText={(text) => setPassword(text)}
        placeholder={'Contraseña'}
        secureTextEntry
      />
      <Button title={'Iniciar sesión'} onPress={signIn} />
      <Button title={'Iniciar sesión'} onPress={signUp} />
      <Button title={'git huv'} onPress={gitIn} />
    </View>
  );
};

export default Login;

