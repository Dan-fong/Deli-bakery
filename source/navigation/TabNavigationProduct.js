import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Products from '../screens/Products';
import ConfigProducts from '../screens/ConfigProducts';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { color } from '../theme/colors';

const Tab = createBottomTabNavigator();

const TabNavigationProducts = () => {
  return (
    
      <Tab.Navigator screenOptions={{headerShown: false, title: ""}} style={{ backgroundColor: "#E56AAA" }} >
          <Tab.Screen name="products" component={Products} options={{
            tabBarIcon: ({ focused }) => <FontAwesome5 name="store-alt" size={focused ? 36 : 24} color={focused ? color.purple : "black"} />
          }} />
          <Tab.Screen name="configProducts" component={ConfigProducts} options={{
            tabBarIcon: ({ focused }) => 
            <Ionicons name="settings" size={focused ? 36 : 24} color={focused ? color.purple : "black"} />
            
          }} />
      </Tab.Navigator>
  )
}

export default TabNavigationProducts

const styles = StyleSheet.create({})