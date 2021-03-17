import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View,Alert } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'

import { theme } from '../core/theme'
import { usernameValidator } from '../helpers/usernameValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
const LoginScreen = ({ navigation }) => {
 
  const [username, setUsername] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })

  const onLoginPressed = () => {
    const usernameError = usernameValidator(username.value)
    const passwordError = passwordValidator(password.value)
    try {
      if (usernameError || passwordError) {
        setUsername({ ...username, error: usernameError })
        setPassword({ ...password, error: passwordError })
        return
      }
      else{
        // const data=JSON.stringify({
        //   username:'saira',
        //   password:'abcd@123'
        // })
        const person = new FormData()

        // Add data to FormData instance which is person
        // The first parameter is the field name, same as the 'name' property in the HTML element <input name = 'name'>
        // The second parameter is the value of the field itself
        person.append('username', 'ayesha')

        // Add data again data
        person.append('password', 'abcd@123')
        axios.post('http://192.168.100.5:8000/login',person)
        .then((response) => {
          Alert.alert("Modal has been closed."+response.data.valid+"  "+response.data.empty);
          navigation.navigate('Home');


          console.log(response);
        }, (error) => {
          console.log(error);
        });
        // Put the ip here
        // const ip = '';
        // const data = await fetch(`http://192.168.100.5:8000/login`, {
        //   method: 'post',
        //   mode:'no-cors',
        //   headers: {
        //     'Accept': 'application/json',
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify({
        //     username:'ayesha',
        //     password:'abcd@123'
        //   })
        // });
        // const result = await data.json();
        // Alert.alert("Modal has been closed."+result+"");

        // if(result.valid) {
        //   navigation.navigate('Home');
        // }
        //for saving username these 2 functions are written 
      //   const storeData = async (value) => {
      //     try {
      //       const jsonValue = JSON.stringify(value)
      //       await AsyncStorage.setItem('user', jsonValue)
      //     } catch (e) {
      //       // saving error
      //     }
      //   }
      //   storeData(username);
        
      //   const getData = async () => {
      //     try {
      //       const value = await AsyncStorage.getItem('user')
      //       if(value !== null) {
            
      //         // value previously stored
      //         console.log(value);
      //       }
      //     } catch(e) {
      //       // error reading value
      //     }
      //   }
      //   getData();
      //  navigation.navigate('Home');
       }
     
    }
    catch(err) {
      console.log("ERROR :" , err);
    }
    
  }

  return (
    <Background>
      
      <Logo />
      <Header>Welcome back</Header>
      <TextInput
        label="Username"
        returnKeyType="next"
        value={username.value}
        onChangeText={(text) => setUsername({ value: text, error: '' })}
        error={!!username.error}
        errorText={username.error}
        autoCapitalize="none"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ForgotPasswordScreen')}
        >
          <Text style={styles.forgot}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
      <Button mode="contained" onPress={onLoginPressed}>
        Login
      </Button>
      <View style={styles.row}>
        <Text>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('RegisterScreen')}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})

export default LoginScreen
