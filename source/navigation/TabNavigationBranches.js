import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Branches from '../screens/Branches';
import ConfigBranches from '../screens/ConfigBranches';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { color } from '../theme/colors';

const Tab = createBottomTabNavigator();

const TabNavigationBranches = () => {
  return (
    
      <Tab.Navigator screenOptions={{headerShown: false, title: ""}} style={{ backgroundColor: "#E56AAA" }} >
          <Tab.Screen name="branches" component={Branches} options={{
            tabBarIcon: ({ focused }) => <FontAwesome5 name="store-alt" size={focused ? 36 : 24} color={focused ? color.purple : "black"} />
          }} />
          <Tab.Screen name="configBranches" component={ConfigBranches} options={{
            tabBarIcon: ({ focused }) => 
            <Ionicons name="settings" size={focused ? 36 : 24} color={focused ? color.purple : "black"} />
            
          }} />
      </Tab.Navigator>
  )
}

export default TabNavigationBranches

const styles = StyleSheet.create({})