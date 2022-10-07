
import { StyleSheet,Button, Text, View,TextInput } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import React from 'react';



export default function Phone({navigation}) {
  return (
    <View style={styles.container}>
    
    <View style={styles.pos}>
      <Text  style={{   fontSize:20,color:'skyblue'}}>
        Welcome to Digital Market
      </Text>
      <Text style={{paddingRight:10 ,fontSize:20,color:'skyblue'}}>
        Please Insert your credentials
      </Text>
    </View>
      <View style={styles.mansi}>
      <Text style={{paddingRight:5,fontSize:20,color:'purple'}}>
        Username
      </Text>
        <TextInput style={{borderWidth:2,borderBottomWidth:5,paddingRight:150}} placeholder='Username'/>
      </View>
      <View style={styles.subom}>
        <Text style={{paddingRight:5,fontSize:20,color:'purple'}} >
          Password
        </Text>
        <TextInput style={{borderWidth:2,borderBottomWidth:5,paddingRight:150}} placeholder='Password' >
        </TextInput>
      </View>
    <View  style={{position:'absolute',top:470,right:120,}}>
        <Button title='Login'  onPress={()=>
        navigation.navigate("Product")}>
         </Button>
    </View>
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
  subom:{
    position:'absolute',
    top:400,
    right:10,
    flexDirection:'row',
  },
  image:{
    backgroundColor:'pink',
    height:"400%",
    width:"00%",
    opacity:20
  },
  pos:{
    position:'absolute',
    top:150,
    left:40,
    flexDirection:'column'
    
    
  },

});
