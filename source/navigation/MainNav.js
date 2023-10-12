import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import RootNavigation from './RootNavigation'
import NavTab from './NavTab'
import { useSelector } from 'react-redux'

const MainNav = () => {
  
    const user = useSelector((state) => state.authSlice.user)
    return (
    
        <NavigationContainer>{user ? <RootNavigation /> : <NavTab />}</NavigationContainer>
    
  )
}

export default MainNav

const styles = StyleSheet.create({})