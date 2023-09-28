import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { color } from '../theme/colors'
import { setItemPressed } from '../redux/slice/branchSlice'
import { useDispatch } from 'react-redux'

const ProductItem = ({ item, navigation }) => {

  const dispatch = useDispatch();

  const onHandlePress = () => {
    dispatch(setItemPressed(item))

    navigation.navigate("productDetails", {item: item})
    
  }

  return (
    <Pressable onPress={() => onHandlePress()}>
    <View style={styles.viewItem}>
        <Text style={styles.list}> {item.title} </Text>
    </View>
    </Pressable>
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
    },
    list: {
        textAlign: "justify",
        width: "100%",
        fontSize: 20,
        fontFamily:'Montserrat',
        color: 'black'
    },
})