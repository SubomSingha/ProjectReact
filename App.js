import React from 'react';
import {  NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createAppContainer } from '@react-navigation/native';


import Home from  "./Screens/Home";
import Register from './Screens/Register';
import Product from './Screens/Product';
import Login from './Screens/Login';
import Tablet from './Screens/Tablet';

import Acces from './Screens/Acces';
import Phone from './Screens/Phone';
import Laptop from './Screens/Laptop';


const Stack = createNativeStackNavigator();



function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='login' component={Login}/>
        <Stack.Screen name='Register' component={Register}/>
        <Stack.Screen name='Product' component={Product}/>
        <Stack.Screen name='Tablet' component={Tablet}/>
        <Stack.Screen name='Acces' component={Acces}/>
        <Stack.Screen name='Phone' component={Phone}/>
        <Stack.Screen name='Laptop' component={Laptop}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App ;
