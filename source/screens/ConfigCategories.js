import { StyleSheet, Text, View, TextInput, Pressable, Image, ScrollView, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { color } from '../theme/colors'
import { useFonts } from 'expo-font'
import * as ImagePicker from 'expo-image-picker'
import firebase from '../firebase/firebase_auth'
import { SelectList } from 'react-native-dropdown-select-list'


const ConfigCategories = () => {

const [newCategory, setNewCategory] = useState({
  categoria: ""
})

const [categories, setCategories] = useState([])

useEffect(() => {
    firebase.db.collection('categorias').onSnapshot((querySnapshot) => {
        const category = [];

        querySnapshot.docs.forEach((doc) => {
            const {categoria} = doc.data();

            category.push({
                id: doc.id,
                categoria
            })
        })
        
        setCategories(category)
    })
}, [])

const handleChangeText = (name, value) => {
  setNewCategory( {...newCategory, [name]: value })
}

const CreateCategory = () => {
  if(newCategory.nombre === ""){
    alert("Favor de llenar el input");
  }
  else{
    firebase.db.collection('categorias').add({
      categoria: newCategory.nombre
    });
    alert("Categoria creada con éxito");
  }
}

const [newProduct, setNewProduct  ] = useState({
  nombre: "",
  descripcion: "",
  stock: "",
  precio: "",
  categoria: "",
  imagen: null
})

const foto = "https://img2.freepng.es/20180603/jx/kisspng-user-interface-design-computer-icons-default-stephen-salazar-photography-5b1462e1b19d70.1261504615280626897275.jpg"

const [image, setImage] = useState(null)

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
      setNewProduct({...newProduct, imagen: result.assets[0].uri})

  }
  else{
    console.log("Se ha cancelado el acceso a la galeria")
  }
}

const openCamera = async () =>{
  const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

  if(permissionResult.granted === false){
    alert("No se ha dado el acceso a la camara")
  }

  else{
    const result = await ImagePicker.launchCameraAsync();


    if(!result.canceled){
      setImage(result.assets[0].uri)
      setNewProduct({...newProduct, imagen: result.assets[0].uri})
    }
  }
}

const handleChangeTextProduct = (name, value) => {
  setNewProduct( {...newProduct, [name]: value})
}

const clearProductFields = () =>{
  setNewProduct({
    nombre: "",
    descripcion: "",
    stock: "",
    precio: "",
    categoria: "",
    imagen: null

  })
}

const CreateProduct = () => {
  if(newProduct.nombre == "" || newProduct.descripcion == "" || newProduct.precio == "" || newProduct.stock == "" || newProduct.imagen == null){
    Alert.alert("Error", "Favor de rellenar todos los campos del producto", [
      {title: "OK"}
    
    ])
  }
  else{
    firebase.db.collection('productos').add({
      nombre: newProduct.nombre,
      descripcion: newProduct.descripcion,
      stock: newProduct.stock,
      precio: newProduct.precio,
      categoria: newProduct.categoria,
      imagen: newProduct.imagen
    })
    Alert.alert("Hecho", "Producto creado con éxito");
    clearProductFields();
  } 
}



  const [fontsLoaded] = useFonts({
    'Montserrat': require('../../assets/Fonts/Montserrat-Regular.ttf')
  });

  if (!fontsLoaded) {
    return null; 
  }

  return (
    <ScrollView style={{ marginTop: 38 }}>
      <Header title="Nueva categoria o producto" />
      <Text style={styles.textNuevo}>Añadir nueva categoria</Text>
      <View style={{width: "100%", justifyContent: "center", alignItems: "center"}}>
        <TextInput
          placeholder="Nombre de la nueva categoria..."
          style={styles.nombre}
          onChangeText={(value) => handleChangeText("nombre", value)}
        />
        <Pressable style={styles.agregar} onPress={() => CreateCategory()}>
          <Text style={{ fontSize: 20, textAlign: "center" }}>Agregar Categoria</Text>
        </Pressable>
      </View>
      <View style={{ borderBottomColor: "black", borderBottomWidth: 2, marginTop: 15, marginBottom: 15 }}></View>
      <Text style={styles.textNuevo}>Añadir nuevo prducto</Text>
      <View style={{width:"100%", justifyContent: "center", alignItems: "center"}}>
        <View style={{width: "100%", justifyContent: "center", alignItems: "center"}}>
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
        <TextInput placeholder="Nombre del nuevo producto..." style={styles.nombre} onChangeText={(value) => handleChangeTextProduct("nombre", value)} />
        <TextInput placeholder="Descripcion..." style={styles.nombre} onChangeText={(value) => handleChangeTextProduct("descripcion", value)} />
        <TextInput placeholder="Stock..." style={styles.nombre}  onChangeText={(value) => handleChangeTextProduct("stock", value)}/>
        <TextInput placeholder="Precio..." style={styles.nombre} onChangeText={(value) => handleChangeTextProduct("precio", value)}/>
        <SelectList
          fontFamily='Montserrat'
          search={false}
          boxStyles={{width: "50%", marginTop: 10, marginLeft: 15, borderWidth: 2, padding: 15, borderColor: "black", fontSize: 20}}
          setSelected={(selectedValue) => {
            setNewProduct({ ...newProduct, categoria: selectedValue });
          }}
          data={categories.map((category) => category.categoria)}
          placeholder="Selecciona una categoria"
        />

        <Pressable style={styles.agregar} onPress={() => CreateProduct()}>
          <Text style={{ fontSize: 20, textAlign: "center" }}>Agregar Producto</Text>
        </Pressable>
      </View>

      <View>
        <Text>Sucursal </Text>
      </View>


    </ScrollView>
  )
}

export default ConfigCategories;

const styles = StyleSheet.create({
  textNuevo: {
    width: "100%",
    fontSize: 24,
    textAlign: "center",
    fontFamily: 'Montserrat',
    marginTop: 10
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
