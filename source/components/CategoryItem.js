import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { color } from '../theme/colors'
import { useFonts } from 'expo-font';
import { useDispatch } from 'react-redux';
import { setItemPressed } from '../redux/slice/branchSlice';

const CategoryItem = ({ item, navigation }) => {

    const dispatch = useDispatch();

    const onHandlePress = () =>{
        dispatch(setItemPressed(item.categoria));

        navigation.navigate("products", {item: item.categoria})
    }

const [fontsLoaded] = useFonts({
    'Montserrat': require('../../assets/Fonts/Montserrat-Regular.ttf')
    })
    if(fontsLoaded === false){
        return;
    }

return (
    <View>
            <Pressable onPress={() => onHandlePress()}>
                <View style={styles.viewItem}>
                    <Text style={styles.list}>{item.categoria}</Text>
                </View>
            </Pressable>
    </View>
)}

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
    width: "100%",
},
list: {
    textAlign: "justify",
    fontSize: 20,
    fontFamily:'Montserrat'
},
})