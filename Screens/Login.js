
import { TouchableOpacity,StyleSheet,Button, Text, View,TextInput } from 'react-native';
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



    <View style={styles.pos}>
      <Text  style={{   fontSize:32,color:'black'}}>
        Welcome to Digital Market
      </Text>
      <Text style={{paddingRight:10 ,fontSize:20,color:'purple'}}>
        Please Insert your credentials
      </Text>
    
    </View>
      <View style={styles.mansi}>
      <Text style={{paddingRight:5,fontSize:20,color:'purple'}}>
        Email
      </Text>
        <TextInput style={{borderWidth:2,borderBottomWidth:5,paddingRight:180}} placeholder='Email' 
          value={email}
          onChangeText={text => setEmail(text)}
        />
      </View>
      
      <View style={styles.subom}>
        <Text style={{paddingRight:5,fontSize:20,color:'purple'}} >
          Password
        </Text>
        <TextInput style={{borderWidth:2,borderBottomWidth:5,paddingRight:150}} placeholder='Password' 
        value={password}
          onChangeText={text => setPassword(text)} >
        </TextInput>
      </View>

      <View style={styles.tos}>
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
    

    </View>
  );
}

export default Login

const styles = StyleSheet.create({
  container: {
  },
  mansi:{
    position:'absolute',
    top:550,
    left:99,
    flexDirection:'row',
    flex:4
    
    
  },
  subom:{
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
  tos:{
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

});
