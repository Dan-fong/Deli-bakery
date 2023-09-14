import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { color } from '../theme/colors'

const ProductItem = ({ item }) => {
  return (
    <View style={styles.viewItem}>
        <Text style={styles.list}> {item.title} { item.price } </Text>
    </View>
  )
}

export default ProductItem

const styles = StyleSheet.create({
    viewItem: {
        marginLeft: 10,
        marginTop: 5,
        marginBottom: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 10,
        backgroundColor: color.purple,
        padding: 10,
        height: 110,
        width: "95%",
        textAlign: "justify",
        margin: "auto",
    },
    list: {
        textAlign: "justify",
        fontSize: 20,
        fontFamily:'Montserrat',
        color: 'black'
    },
})