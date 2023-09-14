import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import {categorias} from '../data/Categorias'
import CategoryItem from './CategoryItem'

const Categories = () => {


/*const MarcarSinExistencia = (itemId) => {
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
};*/

    return (
        <View style={{width:"90%"}}>
            <FlatList
                style={styles.contenedorCategorias}
                data={categorias}
                key={(key) => key}
                renderItem={({ item }) => <CategoryItem style={styles.listItem} item={item} />}    
            />
        </View>
    )
}


const styles = StyleSheet.create({
    contenedorCategorias: {
        width: "100%",
    }
})

export default Categories
