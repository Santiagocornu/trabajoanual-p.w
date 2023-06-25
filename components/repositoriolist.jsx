import React from "react";
import { View, Text, FlatList, Image, } from "react-native";
import repositories from "../data/repositories";
import { StyleSheet } from "react-native-web";


const ReposiList = () =>{
    return (
        <FlatList style={styles.Flat}
        data={repositories}
        renderItem={({item: Reposi})=>(
        <View  style={styles.View} >
                
                <View key={Reposi.name} style={styles.box} >
                <Image style={styles.img}source={require('./img/empanada.png')} />
                    <View style={styles.text}>
                    <Text>nombre: {Reposi.name}</Text>
                    <Text>id: {Reposi.id}</Text>
                    <Text>Descripcion: {Reposi.descripcion}</Text>
                    </View>
                </View>    
        </View>)
    }/>
        
    )
}

const styles = StyleSheet.create({
    View: {

      padding: 24,
      backgroundColor: 'green',
      
    },
    text:{
        flex:1,
        flexDirection:'column',
    },
    box:{
        textAlign:'center',
        padding:30,
        backgroundColor:'red',
        borderWidth: 2,
        borderColor: 'black',
        borderRadius:30,
        flex:1,
        flexDirection:'column',
    }
    ,
    Flat:{
        flex:1,
        marginTop:40,
        borderColor:'black',
    },
    img:{
        wight:'100%',
        aspectRatio: 1,
    }
}
)

export default ReposiList