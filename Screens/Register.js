
import { ImageBackground,TouchableOpacity, StyleSheet,Button, Text, View,TextInput } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import React,{useState} from 'react';
import { auth } from '../firebase'
import { Ionicons } from '@expo/vector-icons';

const Register = () =>{

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Registered with:', user.email);
      })
      .catch(error => alert(error.message))
  }



  
  return (
    <View style={styles.container}>
    <View>
    <ImageBackground source={require('../assets/background2.jpg')} style={{width:500,height:950}}>
 
    </ImageBackground>
</View>
    <View style={styles.Text1}>
      <Text   style={{   fontSize:32,color:'black'}}>
        Welcome to Digital Market
      </Text>
      <Text style={{paddingRight:10 ,fontSize:20,color:'purple'}}>
        Please enter your credentials
      </Text>
    </View>

      <View style={styles.Passwordbutton}>
        <Text style={{paddingRight:20 , fontSize:22,color:'purple'}} >
          Password
        </Text>
        <TextInput style={{borderWidth:2,paddingRight:70}} placeholder='Password' 
        value={password}
          onChangeText={text => setPassword(text)}
        >
        </TextInput>
      </View>
      <View style={styles.Emailinput}>
        <Text style={{paddingRight:20 , fontSize:22,color:'purple'}} >
         Email
        </Text>
        <TextInput style={{borderWidth:2,paddingRight:120}} placeholder='Email' value={email}
          onChangeText={text => setEmail(text)} >
        </TextInput>
      </View>
      <View  style={styles.Registerbutton}>
      <TouchableOpacity
          onPress={handleSignUp}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
      </View>


      <View style={styles.circle}>
    </View>
    <View style={{position:'absolute',top:210,left:380,}}>
    <Ionicons name="star" size={24} color="white" />
    </View>

      </View>

  );
}

export default Register

const styles = StyleSheet.create({
  container: {
    
   
  },
  Ab:{
    position:'absolute',
    top:350,
    right:105,
    flexDirection:'row',   
    
  },
 Passwordbutton:{
    
    position:'absolute',
    top:600,
    right:125,
    flexDirection:'row',
    alignItems:'center'
   
  },
 Emailinput:{
   
    position:'absolute',
    top:550,
    right:100,
    flexDirection:'row',
   
  },
  Registerbutton:{
    
    position:'absolute',
    top:700,
    right:160,
  },
  Text1:{
    position:'absolute',
    top:200,
    right:70,
    flexDirection:'column',
  },
  button: {
    backgroundColor: 'skyblue',
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
    left:370,
  },



});
