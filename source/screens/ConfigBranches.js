import { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Pressable, Alert, Image } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { color } from '../theme/colors'
import { useFonts } from 'expo-font'
import { useInsertSucursalMutation } from '../services/ecApi'

import * as ImagePicker from 'expo-image-picker'

const ConfigBranches = () => {

  const foto = "https://img2.freepng.es/20180603/jx/kisspng-user-interface-design-computer-icons-default-stephen-salazar-photography-5b1462e1b19d70.1261504615280626897275.jpg"

  const insertSucursal = useInsertSucursalMutation();


  const [newBranch, setNewBranch] = useState('');
  const [image, setImage] = useState(null)


  const handleAddBranch = () =>{
      insertSucursal({nombre: newBranch})
    .then(() => {
      Alert.alert('Exito', `La sucursal con el nombre ${newBranch} se agregó correctamente`);
    })
    .catch((error) => {
      console.error("Error al agregar la sucursal", error);
      Alert.alert('Error', 'Hubo un error al agregar la sucursal');
    });
    };

  const [fontsLoaded] = useFonts({
    'Montserrat': require('../../assets/Fonts/Montserrat-Regular.ttf')
});

const pickImage = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing:  true,
      aspect: [4, 3],
      quality: 1,
      base64: true
  });


  
  if(!result.canceled){
      setImage(result.assets[0].uri);
  }
  else{
    console.log("Se ha cancelado el acceso a la galeria")
  }

}

const openCamera = async () =>{
  const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

  if(permissionResult.granted === false){
    Alert.alert("No has dado acceso a la camara")
  }

  else{
    const result = await ImagePicker.launchCameraAsync();

    console.log(result);

    if(!result.canceled){
      setImage(result.assets[0].uri)
    }
  }
}

if(fontsLoaded === false){
    return;
}

  return (
    <View style={{marginTop: 38}}>
      <Header title="Nueva sucursal" />
      <Text style={styles.textNuevo}>Añadir nueva sucursal</Text>
      <View style={{width: "100%", justifyContent: "center"}}>
        <Image 
            source={{uri: image ? image : foto}}
            style={{width: "70%", height: 200,justifyContent:"center"}}
            resizeMode='cover'
        />
        <Pressable style={{     width: "90%",
                                marginLeft: 15,
                                backgroundColor: color.lightBlue,
                                fontFamily: 'Montserrat',
                                padding: 15,
                                marginTop: 10,
                                borderRadius: 15}}
                    onPress={() => openCamera()} > 
            <Text style={{textAlign: "center"}}>Abrir camara</Text>
        </Pressable>
        <Pressable style={{     width: "90%",
                                marginLeft: 15,
                                backgroundColor: color.lightBlue,
                                fontFamily: 'Montserrat',
                                padding: 15,
                                marginTop: 10,
                                borderRadius: 15}}
                    onPress={() => pickImage()} >
            <Text style={{textAlign: "center"}}>Abrir galeria</Text>
        </Pressable>
        </View>
      <View >
        <TextInput placeholder="Nombre de la nueva sucursal..." style={styles.nombre} onChangeText={(text) => setNewBranch(text)} />
        <Pressable style={styles.agregar} onPress={() => handleAddBranch()} >
          <Text style={{fontSize: 20, textAlign: "center"}}>Agregar Sucursal</Text>
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