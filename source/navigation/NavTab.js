import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home';
import Register from '../screens/Register';


const NavTab = () => {

    const Stack = createNativeStackNavigator();

    return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen component={Home} name="home" />
        <Stack.Screen component={Register} name="register" />
    </Stack.Navigator>
  )
}

export default NavTab

const styles = StyleSheet.create({})
