import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native'
import React from 'react'
import { color } from '../theme/colors'
import { useFonts } from 'expo-font';
import { AntDesign } from '@expo/vector-icons'; 


const Search = ({ text, setText }) => {


    const clear = () =>{
        setText("")
    }

    const [fontsLoaded] = useFonts({
        'Montserrat': require('../../assets/Fonts/Montserrat-Regular.ttf')
        })
    if(fontsLoaded === false){
        return;
    }
    return (
        <View style={styles.container}>
            <TextInput placeholder="Buscar un objeto" style={styles.input} onChangeText={(value) => setText(value)} value={text} />
            <Pressable onPress={() => clear()}>
                <AntDesign name="close" size={24} color="black" />
            </Pressable>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 20
    },
    input: {
        width: "78%",
        borderWidth: 1,
        borderRadius: 8,
        borderColor: color.lightBlue,
        padding: 10,
        fontSize: 20,
        marginRight: 15,
        fontFamily: 'Montserrat'
    }
})