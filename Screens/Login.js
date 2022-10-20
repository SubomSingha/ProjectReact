
import {ImageBackground ,TouchableOpacity,StyleSheet,Button, Text, View,TextInput } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import React,{useState ,useEffect} from 'react';
import { Ionicons } from '@expo/vector-icons';
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/core'



const Login= () =>{
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const navigation = useNavigation()

useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged(user => {
    if (user) {
      navigation.replace("Product")
    }
  })

  return unsubscribe
}, [])



const handleLogin = () => {
  auth
    .signInWithEmailAndPassword(email, password)
    .then(userCredentials => {
      const user = userCredentials.user;
      console.log('Logged in with:', user.email);
    })
    .catch(error => alert(error.message))
}

  return (
    <View style={styles.container}>
  <View>
    <ImageBackground source={require('../assets/background2.jpg')} style={{width:500,height:950}}>
 
    </ImageBackground>
</View>

    <View style={styles.pos}>
      <Text  style={{   fontSize:32,color:'black'}}>
        Welcome to Digital Market
      </Text>
      <Text style={{paddingRight:10 ,fontSize:20,color:'purple'}}>
        Please Insert your credentials
      </Text>
    
    </View>
      <View style={styles.Emailinput}>
      <Text style={{paddingRight:5,fontSize:20,color:'purple'}}>
        Email
      </Text>
        <TextInput style={{borderWidth:2,borderBottomWidth:5,width:200}} placeholder='Email' 
          value={email}
          onChangeText={text => setEmail(text)}
        />
      </View>
      
      <View style={styles.Passwordinput}>
        <Text style={{paddingRight:5,fontSize:20,color:'purple'}} >
          Password
        </Text>
        <TextInput style={{borderWidth:2,borderBottomWidth:5,width:200}} placeholder='Password' 
        value={password}
          onChangeText={text => setPassword(text)} >
        </TextInput>
      </View>

      <View style={styles.Loginbutton}>
      <TouchableOpacity
          onPress={handleLogin}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
    </View>

    <View style={{position:'absolute',top:555,left:370,}}>
    <Ionicons name="person-circle-sharp" size={24} color="black" />
    </View>
    
    <View style={styles.circle}>
    </View>
    <View style={{position:'absolute',top:210,left:378,}}>
    <Ionicons name="star" size={24} color="white" />
    </View>
 
    <TouchableOpacity 
                    onPress={() => navigation.navigate('Register')}
                    style={[styles.signIn, {
                        borderColor: '#009387',
                        borderWidth: 0,
                        marginTop: 11,
                        position:'absolute',top:724, left:245,
                      
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: 'skyblue'
                    }]}>Sign Up</Text>
                </TouchableOpacity>

            <View style={{position:'absolute',top:750, left:116,}}>
              <Text style={{fontSize:15,color:'black',fontWeight: 'bold'}}>
                If you are new here?
              </Text>
            </View>

    </View>
  );
}

export default Login

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
    right:75,
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
},
image2: {
  flex: 1,
  justifyContent: "center"
},


});
