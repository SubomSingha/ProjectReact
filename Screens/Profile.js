
import {Image,TouchableOpacity,
    TouchableHighlight, 
    StyleSheet,Button,
    ImageBackground,
    Text, View,
    TextInput, 
    TouchableWithoutFeedback} from 'react-native';
  import React from 'react';
  import { auth } from '../firebase'
  import { useNavigation } from '@react-navigation/core'
  import { Ionicons } from '@expo/vector-icons';
  
  
  
  export default function Product() {
  
                const navigation = useNavigation()
  
                const handleSignOut = () => {
                  auth
                    .signOut()
                    .then(() => {
                      navigation.replace('login')
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
     <View style={{position:'absolute',top:101,left:150,}}>
           <Ionicons name="person-circle-sharp" size={130} color="black" />
          <Text>
            -------------------------------------
          </Text>
    </View>
    <View>
      <Text style={{position:'absolute',
      top:620,
      left:220, fontSize:10,color:'purple'}}>
        If you wanna log out press here
      </Text>
    </View>
    <View style={{position:'absolute',top:391,left:20,}}>
           <Ionicons name="heart" size={50} color="black" />
    </View>
    <View>
      <Text style={{position:'absolute',top:265,left:50,borderBottomColor:20,fontSize:30,color:'purple'}}>
        Your Wishlist
      </Text>
    </View>
    <View style={{position:'absolute',top:491,left:20,}}>
           <Ionicons name="cart" size={50} color="black" />
    </View>
    <View>
      <Text style={{position:'absolute',top:371,left:50,borderBottomColor:10,fontSize:30,color:'purple'}}>
        Your Order
      </Text>
    </View>
    
  
  
  
  
  
  
  
  
  
      </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
   
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
      top:250,
      right:35,
      fontSize:25,color:'purple'
    },

    button: {
      backgroundColor: 'black',
      width: '40%',
      padding: 10,
      borderRadius: 5,
      alignItems: 'center',
      marginTop: 40,
      top:680,
      left:220,
    },
    buttonText: {
      color: 'white',
      fontWeight: '500',
      fontSize: 16,
    },
    
  });
  