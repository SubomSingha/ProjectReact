
import { StyleSheet,Image,Button, Text, View,TextInput } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import React from 'react';



export default function Laptop({navigation}) {
  return (
    <View style={styles.container}>

      <View>
      <Image style={{ position:'absolute', top:60, right:40,width:240,height:260}}
          source={require('../assets/phonecase.jpeg')}
          />
      </View>
      <View style={{ }}>
             <Text style={{   fontSize:28,color:'purple',position:'absolute', top:355, right:160,flex:1}}>
           XYZ Phone Cover
          </Text>
          <Text style={{position:'absolute',fontWeight: 'bold', top:399, right:240,fontSize:18,color:'black',position:'absolute',}}>
           -AMD Radeon 5
        </Text>
        <Text style={{position:'absolute',fontWeight: 'bold', top:425, right:233,fontSize:18,color:'black',position:'absolute',}}>
           -Nvdia GTX 3050
        </Text>
        <Text style={{position:'absolute',fontWeight: 'bold', top:449, right:278,fontSize:18,color:'black',position:'absolute',}}>
           -8 Gb Ram
        </Text>
        <Text style={{position:'absolute',fontWeight: 'bold', top:475, right:285,fontSize:18,color:'black',position:'absolute',}}>
           -1 Tb SSd
        </Text>
      </View>
      <View style={{ position:'absolute', top:450, right:80,}}>
        <Text  style={{fontSize:23,color:'black',fontWeight: 'bold',}}  >
          Buy at
        </Text>
        <Text   style={{fontSize:15,color:'black',fontWeight: 'bold'}} >
          40,000
        </Text>
      </View>
      <View style={{ position:'absolute', top:590, right:280,}}>
        <Text   style={{fontSize:19,color:'black',fontWeight: 'bold'}}>
          Colors Available
        </Text>
      </View>
      <View style={styles.circle}>
       </View>
       <View style={styles.circle2}>
       </View>
       

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    padding:50,
   
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
  circle: {
    width: 50,
    height: 50,
    borderRadius: 100 / 2,
    backgroundColor: "black",
    position:'absolute',
    top:630,
    left:25,
  },
  circle2: {
    width: 50,
    height: 50,
    borderRadius: 100 / 2,
    backgroundColor: "grey",
    position:'absolute',
    top:630,
    left:95,
  }
  



});
