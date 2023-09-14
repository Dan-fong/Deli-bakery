import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { color } from '../theme/colors'
import Header from '../components/Header'
import Categories from '../components/Categories'
import { useFonts } from 'expo-font';

const Home = () => {
    const [fontsLoaded] = useFonts({
        'Montserrat': require('../../assets/Fonts/Montserrat-Regular.ttf')
    });
  return (
    <View style={styles.contenedor}>
        <Header title={"Categorias de pasteles"} />
        <Categories />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    contenedor: {
        marginTop: 38,
        alignItems: "center",
        width: "100%",
        height: "100%",
        backgroundColor: color.purple
    },

})