

import { StyleSheet,Button, Text, View,TextInput } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import React ,{useState} from 'react';


export default function Tablet({navigation}) {
  return (
    <View style={styles.container}>
    
    <View style={styles.pos}>
    </View>

    <Text style={styles.mansi}>
      Redmi 5
    </Text>

   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:50,
  },
  mansi:{
    position:'absolute',
    top:350,
    left:115,
    flexDirection:'row'
  },
  pos:{
    width: 250,
    height: 250,
    backgroundColor: "black",
    position:'absolute',
    top:120,
    right:90
  },
  picker:{
    width:300,
    height:45,
    borderColor:'red',
    borderwidth:1
  }

});
