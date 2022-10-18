
import { Image,StyleSheet,Button, Text, View,TextInput } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { ImageBackground } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';


export default function Home({navigation}) {
  return (

  <View >
      <View style={styles.image}> 
      </View>
      

      <View style={styles.circle}>
    </View>
    <View style={{position:'absolute',top:210,left:200,}}>
    <Ionicons name="star" size={24} color="white" />
    </View>
    <View style={styles.Text1}>
      <Text  style={{fontSize:28,color:'black'}} >
        Digital Market
      </Text>
    </View>


     
      <View style={styles.Text2}>
       <Text style={{fontSize:28,color:'purple'}}>Welcome to Digital Market</Text>
      </View>
      
      <View style={styles.RegisterButton}>
        <Text   style={{ fontSize:15,color:'purple'}}>If You are new here </Text>
        <Button title='Register' onPress={()=>
        navigation.navigate("Register")}>
        </Button>
      </View>
      
      <View style={styles.Loginbutton}>
        <Text style={{padding:10,fontSize:15,color:'purple'}}>If You are already a user then</Text>
        <Button title='Log  in'  onPress={()=>
        navigation.navigate("login")}>
        </Button>
      </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    
   
  },
Text2:{
    position:'absolute',
    top:340,
    left:20,
    
    
    
  },
  Text1:{
    position:'absolute',
    top:210,
    left:20,
    
    
    
  },
  RegisterButton:{
    justifyContent:'space-around',
    flexDirection:'column',
    position:'absolute',
    top:600,
    right:10,
    flexDirection:'row',
    padding:20
    
  },

  Loginbutton:{
    position:'absolute',
    top:540,
    right:5,
    flexDirection:'row',
    padding:20
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42
  },
  image:{
    backgroundColor:'pink',
    height:"500%",
    width:"500%",
    opacity:20
  },
  image2:{
    backgroundColor:'red',
    height:"50%",
    width:"50%",
    justifyContent:'center'

  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 100 / 2,
    backgroundColor: "skyblue",
    position:'absolute',
    top:200,
    left:190,
  }

});
