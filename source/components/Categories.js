import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import {categorias} from '../data/Categorias'
import CategoryItem from './CategoryItem'
import Header from './Header'
import { color } from '../theme/colors'
const Categories = ({ navigation }) => {


return (
    <View style={styles.contenedor} >

        <Header title={"Categorias de pasteles"} navigation={navigation} />
        <View style={{width:"90%"}}>
            <FlatList
                style={styles.contenedorCategorias}
                data={categorias}
                key={(key) => key.id}
                renderItem={({ item }) => <CategoryItem style={styles.listItem} navigation={navigation} item={item}  />}    
            />
        </View>
    </View>
)}


const styles = StyleSheet.create({
    contenedorCategorias: {
        width: "100%",
    },
    contenedor: {
        marginTop: 38,
        alignItems: "center",
        width: "100%",
        height: "100%",
        backgroundColor: color.purple
    },
})

export default Categories
