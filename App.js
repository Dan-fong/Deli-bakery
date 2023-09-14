import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  FlatList,
  Modal,
  Image,
  SafeAreaView
} from 'react-native';
import { useFonts } from 'expo-font';

import Home from './source/screens/Home';
import Products from './source/screens/Products';

export default function App() {


  return (
    <View style={styles.contenedor}>


        {/*<Home />*/}
        <Products category="3 Leches" />

    </View>
  );
} 

const styles = StyleSheet.create({
  /*contenedor: {
    marginTop: 38,
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: color.purple
  },
  /*titulo: {
    marginTop: 40,
    fontSize: 30,
    borderBottomColor: "red",
    borderBottomWidth: 5,
  },
  inputAgregar: {
    width: "84%",
    borderColor: "black",
    borderWidth: 1,
    padding: 8,
  },
  contenedorAgregar: {
    width: "100%",
    marginTop: 20,
    fontSize: 20,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  contenedorLista: {
    marginTop: 10,
    width: "100%",
    height: "50%",
  },
  list: {
    textAlign: "justify",
    fontSize: 20,
    color: "white",
  },
  viewItem: {
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#AE3ED5",
    padding: 10,
    borderRadius: 10,
  },
  ViewButtons: {
    flexDirection: "column",
    gap: 15
  },
  DeleteItem: {
    backgroundColor: "red",
    borderColor: "black",
    borderWidth: 1,
    padding: 4,

  },
  abrirModal: {
    color: "white"
  },
  SinExistencia: {
    backgroundColor: "lightgreen",
    borderColor: "black",
    borderWidth: 1,
    padding: 4,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 30,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
  CloseModal: {
    width: "100%",
    justifyContent: "space-around",
    flexDirection: "row",
    borderBottomColor: "black",
    borderBottomWidth: 0.25,
  },
  EstiloSinExistencia: {
    backgroundColor: "red"
  },
  ModalOptions: {
    flexDirection: "row",
    justifyContent: 'space-around',
    width: "100%"
  }*/
});
