import React from "react";
import { View, Text, FlatList } from "react-native";
import repositories from "../data/repositories";
import { StyleSheet } from "react-native-web";
import Constants from "expo-constants";

const ReposiList = () =>{
    return (
        <FlatList style={styles.Flat}
        data={repositories}
        renderItem={({item: Reposi})=>(
        <View style={styles.View}>
            {repositories.map(Reposi=>(
                <View key={Reposi.name}>
                    <Text>nombre: {Reposi.name}</Text>
                    <Text>id: {Reposi.id}</Text>
                    <Text>Descripcion: {Reposi.descripcion}</Text>
                </View>    
            ))}
        </View>)
    }/>
        
    )
}

const styles = StyleSheet.create({
    View: {
      marginTop: 20,
      padding: 24,
      backgroundColor: '#eaeaea',
    },
    Flat:{
        flex:1,
        marginTop:31
    }
}
)

export default ReposiList