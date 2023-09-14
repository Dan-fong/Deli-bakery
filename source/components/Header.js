import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import imagen from "../../img/Deli-Bakery.png";
import { color } from '../theme/colors';
import { useFonts } from 'expo-font';

const Header = ( {title}) => {

    const [fontsLoaded] = useFonts({
        'Montserrat': require('../../assets/Fonts/Montserrat-Regular.ttf')
    });

return (
    
    <View style={styles.banner}>
        <Image source={ imagen } style={{ width: 70, height: 70, marginTop: -20, marginLeft: 10 }} />
        <Text style={styles.textBanner }>{title}</Text>
    </View>
)

}

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
