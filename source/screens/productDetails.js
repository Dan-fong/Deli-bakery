import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'
import Header from '../components/Header'
import { Button } from 'react-native'
import firebase from '../firebase/firebase_auth'
import { Alert } from 'react-native'

const ProductDetails = ({ route, navigation }) => {


    const [fontsLoaded] = useFonts({
        'Montserrat': require('../../assets/Fonts/Montserrat-Regular.ttf')
    });
    if(fontsLoaded === false){
        return
    }

    const {item} = route.params
    const id = item.id

    const DeleteProduct = async () =>{
        const dbRef = firebase.db.collection('productos').doc(id);

        await dbRef.delete()
        navigation.navigate("products", {item: item.categoria})
    }

    const ConfirmDelete = () => {
        Alert.alert("Eliminar producto", "¿Está seguro de eliminar el producto?", [
            {text: "No"},
            {text: "Si", onPress: () => DeleteProduct()}
        ])
    }

return (
    <View style={styles.contenedor}>
        <Header title={item.nombre} navigation={navigation} />
        <View style={{width: "100%", justifyContent: "center", alignItems: "center"}}>
            <Image
                source={{uri: item.imagen}}
                style={{width: "70%", height: 200,justifyContent:"center"}}
                resizeMode='cover'
            />
        </View>
        <Text style={styles.titulo}>Este producto se encuentra con un Stock de <Text style={styles.itemm}> {item.stock} </Text></Text>
        <Text style={styles.titulo}>Cuenta con un precio de <Text style={styles.itemm}> {item.precio} </Text></Text>
        <Text style={styles.titulo}>Y se encuentra en la cateogira de <Text style={styles.itemm}>{item.categoria}</Text></Text>

        <Button color="#E37399" title='Eliminar producto'  onPress={() => ConfirmDelete()} />

    </View>
)}

export default ProductDetails

const styles = StyleSheet.create({
    contenedor: {
        width: "100%",
        marginTop: 34
    },
    titulo: {
        width: "100%",
        fontSize: 20,
        fontFamily: 'Montserrat',
        marginTop: 30,
        padding: 15
    },
    itemm: {
        fontWeight: "bold"
    }
})