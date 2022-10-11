
import {TouchableOpacity, StyleSheet,Button, Text, View,TextInput } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import React from 'react';
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/core'
import { Ionicons } from '@expo/vector-icons';



export default function Product({}) {

              const navigation = useNavigation()

              const handleSignOut = () => {
                auth
                  .signOut()
                  .then(() => {
                    navigation.replace('Home')
                  })
                  .catch(error => alert(error.message))
              }
              return (

     


    <View style={styles.container}>

<View >
        <Text style={styles.cccc} >Hello {auth.currentUser?.email}</Text>
        <TouchableOpacity
          onPress={handleSignOut}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Sign out</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.dddd}>
       <Text style={{fontSize:40,color:'black'}}>Digital Market</Text>
      </View>



      <View style={styles.mansi}>
       <Text style={{fontSize:26,color:'black'}}>Welcome To the Product Page</Text>
      </View>
      <View style={{position:'absolute' ,top:320,left:30}}>
        <Text style={{fontSize:25,color:'purple'}}>
          Choose your Product
        </Text>
      </View>
      <View style={styles.subom}>
        <Text>Samsung galaxy </Text>
        <Button title='Buy' onPress={()=>
        navigation.navigate("Phone")}>
        </Button>
      </View>
      
      <View style={styles.anything}>
        <Text style={{padding:10}}>Hp Spectre</Text>
        <Button title='Buy'  onPress={()=>
        navigation.navigate("Laptop")}>
        </Button>
      </View>

      <View style={styles.B}>
        <Text style={{padding:10}}>Phone Cover</Text>
        <Button title='Buy'  onPress={()=>
        navigation.navigate("Acces")}>
        </Button>
      </View>

      <View style={styles.C}>
        <Text style={{padding:10}}>Redmi 5</Text>
        <Button title='Buy'  onPress={()=>
        navigation.navigate("Tablet")}>
        </Button>
      </View>
      <View style={styles.circle}>
    </View>
    <View style={{position:'absolute',top:110,left:278,}}>
    <Ionicons name="star" size={24} color="white" />
    </View>
    
    <View style={styles.square} />
    <View style={styles.square1} />
    <View style={styles.square2} />
    <View style={styles.sq} />


    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    
    padding:50,
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 100 / 2,
    backgroundColor: "skyblue",
    position:'absolute',
    top:100,
    left:265,
    
  },

  cccc: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position:'absolute',
    top:220,
    right:188,
    fontSize:15,color:'purple'
  },

  button: {
    backgroundColor: 'black',
    width: '40%',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 40,
    top:780,
    left:220,
  },
  buttonText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
  },
  mansi:{
    position:'absolute',
    top:290,
    left:30, 
  },
  dddd:{
    position:'absolute',
    top:100,
    left:30, 
  },
  subom:{
    justifyContent:'space-around',
    flexDirection:'column',
    position:'absolute',
    top:540,
    right:230,
    flexDirection:'row',
    padding:20
    
  },
  anything:{
    position:'absolute',
    top:535,
    right:10,
    flexDirection:'row',
    padding:20
  },

  B:{
    position:'absolute',
    top:750,
    right:230,
    flexDirection:'row',
    padding:20
  },
  C:{
    position:'absolute',
    top:750,
    right:10,
    flexDirection:'row',
    padding:20
  },
  square: {
    width: 90,
    height: 90,
    backgroundColor: "skyblue",
    top:530,
    left:250,
  },
  square1: {
    width: 90,
    height: 90,
    backgroundColor: "skyblue",
    top:230,
    left:250,
  },
  square2: {
    width: 90,
    height: 90,
    backgroundColor: "skyblue",
    top:140,
    left:10,
  },
  sq: {
    width: 90,
    height: 90,
    backgroundColor: "black",
    top:530,
    left:30,
  },
});
