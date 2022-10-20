import React from 'react';
import {  NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createAppContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 


import Home from  "./Screens/Home";
import Register from './Screens/Register';
import Product from './Screens/Product';
import Login from './Screens/Login';
import Tablet from './Screens/Tablet';

import Acces from './Screens/Acces';
import Phone from './Screens/Phone';
import Laptop from './Screens/Laptop';
import Profile from './Screens/Profile';
import Setting from './Screens/Setting';



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator()



export function TabNavigator(){
  return(
          <Tab.Navigator initialRouteName='Product'>
               <Tab.Screen options={{ headerShown: false  , tabBarLabel: 'Product',
                 tabBarIcon: ({ color, size }) => (
                 <Ionicons name="home" color={'black'} size={size}/>) }}
                  name='Product' 
                   component={Product}/> 

              <Tab.Screen options={{ headerShown: false , tabBarLabel: 'Product',
                 tabBarIcon: ({ color, size }) => (
                 <Ionicons name="person-circle-sharp" color={'black'} size={size}/>)  }} name='Profile' component={Profile}/>
              
              
              <Tab.Screen options={{ headerShown: false, tabBarLabel: 'Setting',
                 tabBarIcon: ({ color, size }) => (
                 <Ionicons name="settings-outline" color={'black'} size={size}/>) }} name='Setting' component={Setting}/>
          </Tab.Navigator>
  )
}


function  App(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen options={{ headerShown: false }} name='login' component={Login}/>
        <Stack.Screen options={{ headerShown: false }} name='Register' component={Register}/>
        <Stack.Screen options={{ headerShown: false }} name='Product' component={TabNavigator}/>
      
        <Stack.Screen name='Tablet' component={Tablet}/>
        <Stack.Screen name='Acces' component={Acces}/>
        <Stack.Screen name='Phone' component={Phone}/>
        <Stack.Screen name='Laptop' component={Laptop}/>
        
      </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App ;
