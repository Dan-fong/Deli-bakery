import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import CategoryItem from './CategoryItem'
import Header from './Header'
import { color } from '../theme/colors'
import firebase from '../firebase/firebase_auth'
import { useState, useEffect } from 'react'
const Categories = ({ navigation }) => {

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
return (
    <View style={styles.contenedor} >

        <Header title={"Categorias de pasteles"} navigation={navigation} />
        <View style={{width:"90%"}}>
        <FlatList
            style={styles.contenedorCategorias}
            data={categories}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <CategoryItem style={styles.listItem} navigation={navigation} item={item} />
            )}
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
