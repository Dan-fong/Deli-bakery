
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  FlatList,
  Modal,
  Image,
  SafeAreaView,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { color } from '..//theme/colors';
import imagen from "../../img/Deli-Bakery.png";
import { useFonts } from 'expo-font';

export default function Home({navigation}) {

    const [fontsLoaded] = useFonts({
        'Montserrat': require('../../assets/Fonts/Montserrat-Regular.ttf')
    });

    if(fontsLoaded === false){
        return;
    }
    return (
        <View style={styles.contenedor}>
        <Image source={imagen} style={{width: "80%", height: 340,}} />
        <TextInput placeholder="Ingrese su usuario" style={styles.inputUsuario} />
        <TextInput placeholder="Ingrese su contraseña" style={styles.inputContrasena} />

        <Pressable style={styles.IniciarSesion} onPress={() => navigation.navigate("branches")} >
            <Text style={{ textAlign: "center", fontSize: 20}}>Iniciar Sesion</Text>
        </Pressable>
        </View>
    );
} 

const styles = StyleSheet.create({
    contenedor: {
        marginTop: 34.6,
        alignItems: "center",
        width: "100%",
        height: "100%",
        backgroundColor: "#E56AAA",
        alignItems: "center",
    },
    inputUsuario: {
        width: "90%",
        height: 60,
        marginTop: 40,
        padding: 10,
        borderColor: color.lightBlue,
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: color.lightPink,
        fontSize: 20,
        fontFamily: 'Montserrat'
    },
    inputContrasena: {
        width: "90%",
        height: 60,
        marginTop: 20,
        padding: 10,
        borderColor: color.lightBlue,
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: color.lightPink,
        fontSize: 20,
        fontFamily: 'Montserrat'
    },
    IniciarSesion: {
        width: "90%",
        backgroundColor: color.blue,
        marginTop: 20,
        height: 55,
        padding: 15,
        borderRadius: 10,
        fontFamily: 'Montserrat'
    }

});
