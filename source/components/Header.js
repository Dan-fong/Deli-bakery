import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import React from 'react'
import imagen from "../../img/Deli-Bakery.png";
import { useFonts } from 'expo-font';
import { CommonActions } from '@react-navigation/native';

const Header = ( {title, navigation}) => {

    const [fontsLoaded] = useFonts({
        'Montserrat': require('../../assets/Fonts/Montserrat-Regular.ttf')
    });

    if(fontsLoaded === false){
        return;
    }

return (
    
    <View style={styles.banner}>
        <Pressable onPress={() => navigation.dispatch(CommonActions.goBack())}><AntDesign name="back" size={24} color="white" style={{marginLeft: 15, padding: 15, marginTop: -10}} /></Pressable>
        <Image source={ imagen } style={{ width: 70, height: 70, marginTop: -20, marginLeft: 10 }} />
        <Text style={styles.textBanner }>{title}</Text>
    </View>
)}

const styles = StyleSheet.create({
    banner: {
        textAlign: 'justify',
        width: "100%",
        height: 110,
        backgroundColor: "#E56AAA",
        paddingTop: 40,
        flexDirection: "row",
    },
    textBanner: {
        marginLeft: 20,
        fontSize: 20,
        fontFamily:'Montserrat'
    },  
})

export default Header
