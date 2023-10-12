import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Image,
} from 'react-native';
import { color } from '../theme/colors';
import imagen from "../../img/Deli-Bakery.png";
import { useFonts } from 'expo-font';
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { firebase_auth } from '../firebase/firebase_auth';
import { useDispatch } from 'react-redux';
import { setIdToken, setUser } from '../redux/slice/authSlice';

export default function Home({navigation}) {

    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const handleLogin = async () => {
        try
        {
            const response = await signInWithEmailAndPassword(firebase_auth, email, password)

            dispatch(setUser(response.user.email))
            dispatch(setIdToken(response._tokenResponse.idToken));
        }
        catch (e){
            console.log("Error en iniciar sesion", e)
        }
    }

    const [fontsLoaded] = useFonts({
        'Montserrat': require('../../assets/Fonts/Montserrat-Regular.ttf')
    });

    if(fontsLoaded === false){
        return;
    }
    return (
        <View style={styles.contenedor}>
        <Image source={imagen} style={{width: "80%", height: 340,marginTop: 20}} />
        <Text style={{textAlign: "center", fontSize: 30, fontFamily: 'Montserrat', fontWeight: "600"}}>Iniciar Sesión</Text>
        <TextInput placeholder="Ingrese su usuario" style={styles.inputUsuario} onChangeText={(text) => setEmail(text)}/>
        <TextInput placeholder="Ingrese su contraseña" style={styles.inputContrasena} onChangeText={(text) => setPassword(text)} secureTextEntry />

        <Pressable style={styles.IniciarSesion} onPress={() => handleLogin()} >
            <Text style={{ textAlign: "center", fontSize: 20}}>Iniciar Sesion</Text>
        </Pressable>
        <Pressable  onPress={() => navigation.navigate("register")} >
            <Text style={{fontSize: 18, marginTop: 10,fontFamily: 'Montserrat', fontWeight: "600" }}>No tienes cuenta?  Registrate</Text>
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
        marginTop: 10,
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
