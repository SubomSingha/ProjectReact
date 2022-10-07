
import { StyleSheet,Button, Text, View,TextInput } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import React from 'react';

export default function Register() {
  return (
    <View style={styles.container}>
    <View style={styles.Eb}>
      <Text>
        Welcome to Digital Market
      </Text>
      <Text style={{paddingRight:30}}>
        Please enter your credentials
      </Text>
    </View>
      <View style={styles.Ab}>
      <Text style={{paddingRight:20}}>
        First Name
      </Text>
        <TextInput style={{borderWidth:2,paddingRight:70}} placeholder='First Name'/>
      </View>
      <View style={styles.Bb}>
        <Text style={{paddingRight:20}} >
          Last Name
        </Text>
        <TextInput style={{borderWidth:2,paddingRight:70}} placeholder='Last Name' >
        </TextInput>
      </View>
      <View style={styles.Cb}>
        <Text style={{paddingRight:20}} >
          User Name
        </Text>
        <TextInput style={{borderWidth:2,paddingRight:70}} placeholder='User Name' >
        </TextInput>
      </View>
      <View style={styles.Db}>
        <Text style={{paddingRight:20}} >
          Password
        </Text>
        <TextInput style={{borderWidth:2,paddingRight:70}} placeholder='Password' >
        </TextInput>
      </View>
      <View style={{position:'absolute',  top:600,  right:115,height:120,width:200}}>
        <Button  title='Register'/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    padding:50,
   
  },
  Ab:{
    position:'absolute',
    top:350,
    right:105,
    flexDirection:'row',   
    
  },
  Bb:{
    
    position:'absolute',
    top:400,
    right:105,
    flexDirection:'row',
    alignItems:'center'
   
  },
  Cb:{
   
    position:'absolute',
    top:450,
    right:105,
    flexDirection:'row',
   
  },
  Db:{
    
    position:'absolute',
    top:500,
    right:105,
    flexDirection:'row',
    
    
  },
  Eb:{
    position:'absolute',
    top:100,
    right:180,
    flexDirection:'column',


    
  }

});
