import { StyleSheet, } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Categories from '../components/Categories';
import ConfigCategories from '../screens/ConfigCategories';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { color } from '../theme/colors';

const Tab = createBottomTabNavigator();

const TabNavigationCategories = () => {
  return (
    
      <Tab.Navigator screenOptions={{headerShown: false, title: ""}} style={{ backgroundColor: "#E56AAA" }} >
          <Tab.Screen name="branches" component={Categories} options={{
            tabBarIcon: ({ focused }) => <FontAwesome5 name="birthday-cake" size={focused ? 36 : 24} color={focused ? color.purple : "black"} />
          }} />
          <Tab.Screen name="configCategories" component={ConfigCategories} options={{
            tabBarIcon: ({ focused }) => 
            <Ionicons name="settings" size={focused ? 36 : 24} color={focused ? color.purple : "black"} />
            
          }} />
      </Tab.Navigator>
  )
}

export default TabNavigationCategories

const styles = StyleSheet.create({})