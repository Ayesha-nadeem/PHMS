import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import { usernameValidator } from '../helpers/usernameValidator'
import { theme } from '../core/theme'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import { nameValidator } from '../helpers/nameValidator'
import { ScrollView } from 'react-native-gesture-handler'
import axios from 'axios'
import { Alert } from 'react-native'

const RegisterScreen = ({ navigation }) => {
  const [first_name, setFirstName] = useState({ value: '', error: '' })
  const [Last_name, setLastName] = useState({ value: '', error: '' })
  const [user_name, setUserName] = useState({ value: '', error: '' })
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })
  const [confirm_password, setConfirmPassword] = useState({ value: '', error: '' })

  const onSignUpPressed =async () => {
    const first_nameError = nameValidator(first_name.value)
    const Last_nameError = nameValidator(Last_name.value)
    const user_nameError = nameValidator(user_name.value)
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    const confirm_passwordError = passwordValidator(password.value)
    
    try {
    if (emailError || passwordError || first_nameError|| Last_nameError|| user_nameError) {
      console.log("Signup If");
      setFirstName({ ...first_name, error: first_nameError })
      setLastName({ ...Last_name, error: Last_nameError })
      setUserName({ ...user_name, error: user_nameError})
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      setConfirmPassword({ ...confirm_password, error: confirm_passwordError })
      return
    }
    else{
     console.log("Signup else");
      const person = new FormData()

      // Add data to FormData instance which is person
      // The first parameter is the field name, same as the 'name' property in the HTML element <input name = 'name'>
      // The second parameter is the value of the field itself
      person.append('first_name', first_name.value)
      person.append('last_name', Last_name.value)
      person.append('username', user_name.value)
      person.append('password1', password.value)
      person.append('password2', confirm_password.value)
      person.append('email', email.value)

      console.log(password.value);
      console.log(confirm_password.value);
      // Add data again data
      axios.post('http://192.168.10.31:8001/register',person)
      .then((response) => {
        if (response.data.valid==true)
         {
          console.log("signup pass")
          Alert.alert("Congratulations! User added")
          navigation.navigate('LoginScreen');
         }
         else if(response.data.exist==true){
           Alert.alert("Username Already taken");
           console.log("username already ");
         }
         else
         {
           Alert.alert("Oops! Something Went Wrong.")
           console.log("signup failed");
           console.log(response.data);
         }

       
      }, (error) => {
        console.log(error);
      });
    }
  }
    catch(err) {
      console.log("ERROR :" , err);
    }
  }

  return (
    <ScrollView>
    <Background>
     
      <Logo />
      <Header>Create Account</Header>
      <TextInput
        label="First Name"
        returnKeyType="next"
        value={first_name.value}
        onChangeText={(text) => setFirstName({ value: text, error: '' })}
        error={!!first_name.error}
        errorText={first_name.error}
      />
      <TextInput
        label="Last Name"
        returnKeyType="next"
        value={Last_name.value}
        onChangeText={(text) => setLastName({ value: text, error: '' })}
        error={!!Last_name.error}
        errorText={Last_name.error}
      />
      <TextInput
        label="User Name"
        returnKeyType="next"
        value={user_name.value}
        onChangeText={(text) => setUserName({ value: text, error: '' })}
        error={!!user_name.error}
        errorText={user_name.error}
      />
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
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
       <TextInput
        label="Confirm Password"
        returnKeyType="done"
        value={confirm_password.value}
        onChangeText={(text) => setConfirmPassword({ value: text, error: '' })}
        error={!!confirm_password.error}
        errorText={confirm_password.error}
        secureTextEntry
      />
      <Button
        mode="contained"
        onPress={onSignUpPressed}
        style={{ marginTop: 24 }}
      >
        Sign Up
      </Button>
      <View style={styles.row}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
          <Text style={styles.link, styles.bottomMargin}>Login</Text>
        </TouchableOpacity>
      </View>
    </Background>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  bottomMargin: {
    marginBottom : 55,
  }
})

export default RegisterScreen
