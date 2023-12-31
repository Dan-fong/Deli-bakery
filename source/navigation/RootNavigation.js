import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'
import TabNavigationCategories from './TabNavigationCategories'
import Products from '../screens/Products'
import TabNavigationBranches from './TabNavigationBranches'
import ProductDetails from '../screens/productDetails'
import Register from '../screens/Register'
import NavTab from './NavTab'
import Map from '../components/Map'

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        
        <Stack.Screen component={TabNavigationBranches} name="branch"  />
        <Stack.Screen component={TabNavigationCategories} name="categories"  />
        <Stack.Screen component={Products} name="products"  />
        <Stack.Screen component={ProductDetails} name="productDetails"/>
    </Stack.Navigator>
)}

export default RootNavigation

const styles = StyleSheet.create({})