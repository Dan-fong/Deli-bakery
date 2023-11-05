
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
import { firebase_auth as auth } from '../firebase/firebase_auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Alert } from 'react-native';

  export default function Register({navigation}) {
  
      const [fontsLoaded] = useFonts({
          'Montserrat': require('../../assets/Fonts/Montserrat-Regular.ttf')
      });

      const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')
  

      const handleRegistrer = async () =>{
        try {
            
            const response = await createUserWithEmailAndPassword(auth, email, password);

            navigation.navigate("home")

        } catch (error) {
            Alert.alert("Error", "La contraseña debe ser mayor o igual a 6 caracteres y verifica el formato del correo", [
                {title: "OK"}
            ])
        }
      }

      if(fontsLoaded === false){
          return;
      }
      return (
        <View style={styles.contenedor}>
        <Image source={imagen} style={{width: "80%", height: 340,}} />
        <Text style={{textAlign: "center", fontSize: 30, fontFamily: 'Montserrat', fontWeight: "600"}}>Registrate</Text>
        <TextInput placeholder="Ingrese su usuario" style={styles.inputUsuario} onChangeText={(text) => setEmail(text)} />
        <TextInput placeholder="Ingrese su contraseña" style={styles.inputContrasena} onChangeText={(text) => setPassword(text)} secureTextEntry={true} />

        <Pressable style={styles.IniciarSesion} onPress={() => handleRegistrer()} >
            <Text style={{ textAlign: "center", fontSize: 20,}}>Registrarse</Text>
        </Pressable>
        <Pressable  onPress={() => navigation.navigate("home")} >
            <Text style={{fontSize: 18, marginTop: 10, fontFamily: 'Montserrat', fontWeight: "600"}}>Ya tienes cuenta?  Inicia sesión </Text>
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
  