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
} from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';


import imagen from "./img/Deli-Bakery.png";

export default function App() {
  const initialList = [
  ];

  const [text, setText] = useState('');
  const [list, setList] = useState(initialList);
  const [modalVisible, setModalVisible] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const addItem = () => {
    setList([...list, { id: Math.random(), text: text }]);
    setText('');
  };

  const clearList = () => {
    setList([]);
    setModalVisible(false);
  };


  const dropElement = () => {
    if (itemToDelete) {
      const updatedList = list.filter(item => item.id !== itemToDelete.id);
      setList(updatedList);
    }
    setItemToDelete(null);
    setModalVisible(false);
  };

  const renderItem = ({ item }) => {
    const ContenedorSinExistencia = item.itemSinStack
    ? [styles.viewItem, styles.EstiloSinExistencia]
    : styles.viewItem;
    return(
      <View style={ContenedorSinExistencia}>
        <Text style={styles.list}>{item.text}</Text>
        <View style={styles.ViewButtons}>
          <Pressable style={styles.DeleteItem} onPress={() => handleDeletePress(item)}>
            <Text style={styles.abrirModal}>Eliminar</Text>
          </Pressable>
          <Pressable style={styles.SinExistencia} onPress={() => MarcarSinExistencia(item.id)}>
            <Text style={styles.TextExistencia}>Marcar sin existencia</Text>
          </Pressable>
        </View>
    </View>
    );
  };

  const MarcarSinExistencia = (itemId) => {
    const updatedList = list.map(listItem => {
      if (listItem.id === itemId) {
        return { ...listItem, itemSinStack: true };
      }
      return listItem;
    });
    setList(updatedList);
  }

  const handleDeletePress = item => {
    setItemToDelete(item);
    setModalVisible(true);
  };

  return (
    <View style={styles.contenedor}>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.CloseModal}>
            <Text style={{fontSize: 16}}>¿Estás seguro de borrar el producto?</Text>
              <Pressable onPress={() => setModalVisible(false)}>
                <Ionicons name="close-outline" size={24} color="black" />
              </Pressable>
            </View>
              <View style={styles.ModalOptions}>
              <Pressable  style={{marginTop: 10, width: "40%", height: "120%"}} onPress={() => setModalVisible(false)}>
                  <Text style={{textAlign: "center"}}>NO</Text>
                </Pressable>
                <Pressable onPress={dropElement} style={{marginTop: 10, width: "40%", height: "120%"}} >
                  <Text style={{textAlign: "center"}}>SI</Text>
                </Pressable>
              </View>
          </View>
        </View>
      </Modal>

      <View style={styles.banner}>
      <Image source={ imagen } style={{ width: 70, height: 70, marginTop: -20, marginLeft: 10 }} />
        <Text style={styles.textBanner}>Lista de productos</Text>
      </View>
      <View style={styles.contenedorAgregar}>
        <TextInput
          placeholder="Agregar nuevo producto"
          style={styles.inputAgregar}
          value={text}
          onChangeText={value => setText(value)}
        />
        <Pressable onPress={addItem}>
        <Ionicons name="add-circle" size={36} style={{ marginLeft: 10 }} color="black" />
        </Pressable>
      </View>
      <FlatList
        style={styles.contenedorLista}
        data={list}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
} 

const styles = StyleSheet.create({
  contenedor: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    overflow: "auto"
  },
  /*titulo: {
    marginTop: 40,
    fontSize: 30,
    borderBottomColor: "red",
    borderBottomWidth: 5,
  },*/
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
  banner: {
    marginTop: -20,
    textAlign: 'justify',
    width: "100%",
    height: 110,
    backgroundColor: "#E56AAA",
    paddingTop: 50,
    flexDirection: "row",
    
  },
  textBanner: {
    marginLeft: 20,
    fontSize: 20,
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
  }
});
