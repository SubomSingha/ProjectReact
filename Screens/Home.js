
import { Image,StyleSheet,Button, Text, View,TextInput } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { ImageBackground } from 'react-native';
import React from 'react';


export default function Home({navigation}) {
  return (

  <View >
      <View style={styles.image}> 
      </View>
      <View style={styles.image2}>
      </View>
      <Image
        source={{ uri: 'asset:/app_icon.png' }}
        style={{ width: 40, height: 40 }}
          />
      <View style={styles.mansi}>
       <Text style={{fontSize:30,color:'skyblue'}}>Welcome to Digital Market</Text>
      </View>
      
      <View style={styles.subom}>
        <Text   style={{ fontSize:15,color:'purple'}}>If You are new here </Text>
        <Button title='Register' onPress={()=>
        navigation.navigate("Register")}>
        </Button>
      </View>
      
      <View style={styles.anything}>
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
    
    padding:50,
   
  },
  mansi:{
    position:'absolute',
    top:200,
    left:20,
    
    
    
  },
  subom:{
    justifyContent:'space-around',
    flexDirection:'column',
    position:'absolute',
    top:500,
    right:10,
    flexDirection:'row',
    padding:20
    
  },

  anything:{
    position:'absolute',
    top:440,
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

  }

});
