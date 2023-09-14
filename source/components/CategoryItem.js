import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { color } from '../theme/colors'
import { useFonts } from 'expo-font';

const CategoryItem = ({ item }) => {
    const [fontsLoaded] = useFonts({
        'Montserrat': require('../../assets/Fonts/Montserrat-Regular.ttf')
      })
  return (
    <View>
            <Pressable>
                <View style={styles.viewItem}>
                    <Text style={styles.list}>{item}</Text>
                </View>
            </Pressable>
    </View>
  )
}

export default CategoryItem

const styles = StyleSheet.create({
viewItem: {
    marginTop: 5,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: color.pink,
    padding: 20,
    width: "100%"
},
list: {
    textAlign: "justify",
    fontSize: 20,
    fontFamily:'Montserrat'
},
})