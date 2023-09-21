import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'
import Categories from '../components/Categories'
import Products from '../screens/Products'
import Branches from '../screens/Branches'
import ProductDetails from '../screens/productDetails'

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen component={Home} name="home"  />
        <Stack.Screen component={Branches} name="branches"  />
        <Stack.Screen component={Categories} name="categories"  />
        <Stack.Screen component={Products} name="products"  />
        <Stack.Screen component={ProductDetails} name="productDetails"/>
    </Stack.Navigator>
)}

export default RootNavigation

const styles = StyleSheet.create({})