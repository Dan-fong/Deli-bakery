import { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Pressable, Alert, Image } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { color } from '../theme/colors'
import { useFonts } from 'expo-font'
import firebase from '../firebase/firebase_auth'


const ConfigBranches = () => {




  const [newBranch, setNewBranch] = useState({
    name: "",
    img: []
  });

  const handleChangeText = (name, value) => {
    setNewBranch({ ...newBranch, [name]: value})
  }


  const CreateBranch = () => {
    if(newBranch.name === ''){
      alert("Favor de ingresar todos los datos")
    }
    else{
      firebase.db.collection('sucursales').add({
        nombre: newBranch.name
      })
      alert("Sucursal creada con exito")
    }
  }

  const [fontsLoaded] = useFonts({
    'Montserrat': require('../../assets/Fonts/Montserrat-Regular.ttf')
});

if(fontsLoaded === false){
    return;
}

  return (
    <View style={{marginTop: 38}}>
      <Header title="Nueva sucursal" />
      <Text style={styles.textNuevo}>Añadir nueva sucursal</Text>
      <View >
        <TextInput placeholder="Nombre de la nueva sucursal..." style={styles.nombre} onChangeText={(value) => handleChangeText("name", value)} />
        <Pressable style={styles.agregar} onPress={() => CreateBranch()} >
          <Text style={{fontSize: 20, textAlign: "center"}} >Agregar Sucursal</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default ConfigBranches

const styles = StyleSheet.create({
  textNuevo: {
    width: "100%",
    fontSize: 24,
    textAlign: "center",
    fontFamily: 'Montserrat'
  },
  nombre: {
    width: "90%",
    fontSize: 20,
    marginTop: 10,
    marginLeft: 15,
    borderColor: "black",
    borderWidth: 2,
    padding: 15,
    fontFamily: 'Montserrat',
    borderRadius: 10
  },
  agregar: {
    width: "90%",
    marginLeft: 15,
    backgroundColor: color.lightBlue,
    fontFamily: 'Montserrat',
    padding: 15,
    marginTop: 10,
    borderRadius: 15
  }
})