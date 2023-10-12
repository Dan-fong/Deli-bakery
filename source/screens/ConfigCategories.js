import { StyleSheet, Text, View, TextInput, Pressable, Alert } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/Header'
import { color } from '../theme/colors'
import { useFonts } from 'expo-font'
import { useInsertCategoryMutation } from '../services/ecApi'

const ConfigCategories = () => {



  const [fontsLoaded] = useFonts({
    'Montserrat': require('../../assets/Fonts/Montserrat-Regular.ttf')
  });

  if (!fontsLoaded) {
    return null; // O algún elemento de carga
  }

  return (
    <View style={{ marginTop: 38 }}>
      <Header title="Nueva categoria o producto" />
      <Text style={styles.textNuevo}>Añadir nueva categoria</Text>
      <View>
        <TextInput
          placeholder="Nombre de la nueva categoria..."
          style={styles.nombre}
          onChangeText={(text) => (text)}
        />
        <Pressable style={styles.agregar} onPress={() => handleAddPost()}>
          <Text style={{ fontSize: 20, textAlign: "center" }}>Agregar Categoria</Text>
        </Pressable>
      </View>
      <View style={{ borderBottomColor: "black", borderBottomWidth: 2, marginTop: 15, marginBottom: 15 }}></View>
      <Text style={styles.textNuevo}>Añadir nuevo prducto</Text>
      <View>
        <TextInput placeholder="Nombre del nuevo producto..." style={styles.nombre} />
        <TextInput placeholder="Descripcion..." style={styles.nombre} />
        <TextInput placeholder="Stock..." style={styles.nombre} />
        <TextInput placeholder="Precio..." style={styles.nombre} />
        <Pressable style={styles.agregar}>
          <Text style={{ fontSize: 20, textAlign: "center" }}>Agregar Producto</Text>
        </Pressable>
      </View>
    </View>
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
