import { StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import Categories from '../components/Categories'

const Categories = ({ navigation, route }) => {
    const {sucursal} = route.params

    console.log(sucursal)

return (
    <SafeAreaView>
        <Categories navigation={navigation} />
    </SafeAreaView>
)}

export default Categories

const styles = StyleSheet.create({})