import { StyleSheet, View, FlatList, Pressable, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import BranchItem from '../components/BranchItem'
import { color } from '../theme/colors'
import Header from '../components/Header'
import { useGetSucursalesQuery } from '../services/ecApi'
import * as Location from 'expo-location'




const Branches = ({ navigation }) => {

    const {data: sucursales = []} = useGetSucursalesQuery();
    console.log(sucursales);

    /*const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

        const getCoords = async () =>{
            const { status } = await Location.requestForegroundPermissionsAsync();
            if(status !== "granted"){
                setErrorMsg("El permiso para la localización fue negado");
                return;
            } 

            const location = await Location.getCurrentPositionAsync({});
            setLocation(location);
            navigation.navigate("mapLock", {location})
            console.log(location)
        }*/

        





return (
    <View style={styles.contenedor} >

        <Header title={"Sucursales"} navigation={navigation} />

        <View style={{width:"90%"}}>
            <FlatList
                style={styles.contenedorSucursales}
                data={sucursales}
                key={(key) => key.id}
                renderItem={({ item }) => <BranchItem navigation={navigation} item={item} />}    
            />
        </View>
        <View style={{width: "100%", height: "250px"}}>
        </View>
        {/*<Pressable style={{backgroundColor: color.lightBlue, width: "80%", height: 25}} onPress={() => getCoords()}>
            <Text style={{textAlign: "center"}}>Obtener ubicacion</Text>
        </Pressable>*/}
    </View>
)}

export default Branches

const styles = StyleSheet.create({
    contenedorSucursales: {
        width: "100%",
    },
    contenedor: {
        marginTop: 38,
        alignItems: "center",
        width: "100%",
        height: "100%",
        backgroundColor: color.purple
    },
}) 
