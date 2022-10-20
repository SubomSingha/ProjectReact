
import {Image,TouchableOpacity,
  TouchableHighlight, 
  ImageBackground,
  StyleSheet,Button,
  Text, View,
  TextInput, 
  TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/core'
import { Ionicons } from '@expo/vector-icons';



export default function Product() {

         const navigation = useNavigation()

              
    
   return (

    <View style={styles.container}>

      


      <Image style={{ position:'absolute', top:20, left:0,width:550,height:140}}
      source={require('../assets/white.jpg')}
      />
        
        <Image style={{ position:'absolute', top:160, left:3,width:205,height:170}}
          source={require('../assets/sale.png')}
          />
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Laptop')}>
          <Image style={{ position:'absolute', top:160, left:220,width:190,height:170}}
          source={require('../assets/image6.jpg')}
          />
          </TouchableWithoutFeedback>

      <TextInput style={{position:'absolute', top:100,left:60,bordercolor:'white',borderWidth:2,borderBottomWidth:2,paddingRight:150}} placeholder='Enter your search' />
      <View style={{position:'absolute',top:101,left:360,}}>
    <Ionicons name="cart" size={32} color="black" />
    </View>
    <View style={{position:'absolute',top:101,left:360,}}>
    <Ionicons name="cart" size={32} color="black" />
    </View>
      

    <TouchableWithoutFeedback onPress={() => navigation.navigate('Laptop')}>
    <Image style={{ position:'absolute', top:540, left:40,width:139,height:96}}
          source={require('../assets/laptopimage.jpg')}
          />
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={() => navigation.navigate('Phone')}>
     <Image style={{ position:'absolute', top:540, left:300,width:84,height:92}}
          source={require('../assets/phoneimage.jpg')}  />
    </TouchableWithoutFeedback>
        
    <TouchableWithoutFeedback onPress={() => navigation.navigate('Tablet')}>
    <Image style={{ position:'absolute', top:710, left:40,width:139,height:100}}
          source={require('../assets/tabletimage.jpg')}
          />
    </TouchableWithoutFeedback>

     <TouchableWithoutFeedback onPress={() => navigation.navigate('Acces')}>   
    <Image style={{ position:'absolute', top:710, left:300,width:80,height:95}}
          source={require('../assets/phonecase.jpeg')}
          />
    </TouchableWithoutFeedback>

      <View style={{ position:'absolute', top:480, left:10,width:190,height:170}}>
        <Text  style={{fontSize:23,color:'black',fontWeight: 'bold'}}>
          Featured Products
        </Text>
        <Text  style={{fontSize:10,color:'black',fontWeight: 'bold'}}>
         ------------------------------------------------
        </Text>
      </View>
         <View>
             <View style={{ position:'absolute', top:595, right:210,flex:1}}>
             <Text style={{   fontSize:18,color:'purple'}}>
               Windows Laptop
             </Text>
             <Text >
               $478
              </Text>
            </View>
            <View style={{ position:'absolute', top:595, left:250,}}>
              <Text style={{   fontSize:18,color:'purple'}}>
             XYZ Phone
           </Text>
           <Text >
              $238
           </Text>
          </View>
           <View style={{ position:'absolute', top:770, right:220,}}>
            <Text  style={{   fontSize:18,color:'purple'}}>
           Microsoft Tablet
          </Text>
           <Text >
             $168
            </Text>
           </View>
           <View  style={{ position:'absolute', top:770, left:250,}}>
           <Text style={{   fontSize:16,color:'purple'}}>
            XYZ Phone Cover
           </Text>
          <Text>
            $30
          </Text>
           </View>
         </View>
            <View style={{ position:'absolute', top:60, left:360,}}>
   <TouchableWithoutFeedback onPress={() => navigation.navigate('Profile')}>   
      <Ionicons name="person-circle-sharp" size={34} color="black" />
    </TouchableWithoutFeedback>
    </View>

  <View>
    <Text  style={{ position:'absolute', top:310, right:280,fontSize:20,color:'black' ,fontWeight: 'bold'}} >
      Categories
    </Text>
    <View>

    </View>
  </View>
  <View style={{position:'absolute',top:395,right:320,}}>
    <Ionicons name="phone-portrait-outline" size={60} color="black" />
    </View>
    <View style={{position:'absolute',top:395,right:200,}}>
    <Ionicons name="laptop-outline" size={69} color="black" />
    <Text>

    </Text>
    </View>
    <View style={{position:'absolute',top:395,right:90,}}>
    <Ionicons name="ios-watch-outline" size={69} color="black" />
    </View>
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
  
});
