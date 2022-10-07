
import { StyleSheet,Button, Text, View,TextInput } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import React from 'react';

export default function Product({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.mansi}>
       <Text style={{fontSize:26,color:'skyblue'}}>Welcome To the Product Page</Text>
      </View>
      <View style={{position:'absolute' ,top:200,left:20}}>
        <Text style={{fontSize:25,color:'skyblue'}}>
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
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    padding:50,
  },
  mansi:{
    position:'absolute',
    top:50,
    left:55, 
  },
  subom:{
    justifyContent:'space-around',
    flexDirection:'column',
    position:'absolute',
    top:390,
    right:230,
    flexDirection:'row',
    padding:20
    
  },
  anything:{
    position:'absolute',
    top:385,
    right:10,
    flexDirection:'row',
    padding:20
  },

  B:{
    position:'absolute',
    top:650,
    right:230,
    flexDirection:'row',
    padding:20
  },
  C:{
    position:'absolute',
    top:650,
    right:10,
    flexDirection:'row',
    padding:20
  }





});
