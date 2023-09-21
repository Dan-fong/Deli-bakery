import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'
import Header from '../components/Header'

const ProductDetails = ({ route, navigation }) => {

    const [fontsLoaded] = useFonts({
        'Montserrat': require('../../assets/Fonts/Montserrat-Regular.ttf')
    });
    if(fontsLoaded === false){
        return
    }

    const {item} = route.params

return (
    <View style={styles.contenedor}>
        <Header title={item.title} navigation={navigation} />
        <Text style={styles.titulo}>Este producto se encuentra con un Stock de <Text style={styles.itemm}> {item.stock} </Text></Text>
        <Text style={styles.titulo}>Cuenta con un precio de <Text style={styles.itemm}> {item.price} </Text></Text>
        <Text style={styles.titulo}>Y se encuentra en la cateogira de <Text style={styles.itemm}>{item.category}</Text></Text>
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