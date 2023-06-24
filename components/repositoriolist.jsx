import react from "react";
import { View, Text, FlatList } from "react-native";
import repositories from "../data/repositories";

const ReposiList = () =>{
    return (
        <FlatList
        data={repositories}
        renderItem={({item: Reposi})=>(
        <View>
            {repositories.map(Reposi=>(
                <View key={Reposi.name}>
                    <Text>nombre: {Reposi.name}</Text>
                    <Text>id: {Reposi.id}</Text>
                    <Text>Descripcion: {Reposi.descripcion}</Text>
                </View>    
            ))}
        </View>)
    }>
        </FlatList>
    )
}
export default ReposiList