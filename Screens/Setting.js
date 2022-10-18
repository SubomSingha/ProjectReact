
import { TouchableOpacity,StyleSheet,Button, Text, View,TextInput } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import React,{useState ,useEffect} from 'react';
import { Ionicons } from '@expo/vector-icons';
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/core'



 function Setting(){
  return (
    <View style={styles.container}>



   
    </View>
  );
}

export default Setting

const styles = StyleSheet.create({
  container: {
  },
  Emailinput:{
    position:'absolute',
    top:550,
    left:99,
    flexDirection:'row',
    flex:4
    
    
  },
  Passwordinput:{
    position:'absolute',
    top:600,
    right:60,
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
    top:200,
    left:20,
    flexDirection:'column' 
  },
 Loginbutton:{
    position:'absolute',
    top:690,
    left:190,
    

  },
  button: {
    backgroundColor: '#0782F9',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },

  circle: {
    width: 50,
    height: 50,
    borderRadius: 100 / 2,
    backgroundColor: "skyblue",
    position:'absolute',
    top:200,
    left:365,
    
  },
  Registerbutton:{
    position:'absolute',
    top:750,
    left:165,
    flexDirection:'row' 
    
  },
  signIn: {
    width: '10%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
},
textSign: {
    fontSize: 13,
    fontWeight: 'bold'
}

});
