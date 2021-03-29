import React, { useState ,useEffect} from 'react'
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
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import { Alert } from 'react-native'
//import { response } from 'express'

const UpdateScreen = ({ navigation }) => {
  const [first_name, setFirstName] = useState({ value: '', error: '' })
  const [last_name, setLastName] = useState({ value: '', error: '' })
  const [user_name, setUserName] = useState({ value: '', error: '' })
  const [email, setEmail] = useState({ value: '', error: '' })
  //const [old_password, setOldPassword] = useState({ value: '', error: '' })
  const [new_password, setNewPassword] = useState({ value: '', error: '' })
  const [confirm_password, setConfirmPassword] = useState({ value: '', error: '' })
  //const [check_password, setCheckPassword] = useState({ value: '', error: '' })

  useEffect(() => {
    if (user_name.value=='')
    {
        getData();
    }
    else{
       // console.log(user_name.value);
    }
    });
  
  const getData = async () => {
    try {
        var uname;
      const username = await AsyncStorage.getItem('user')
      if(username !== null) {
        console.log(username);
        uname=JSON.parse(username);
        // value previously stored
        console.log("got username: " +  uname.value);
        setUserName({ value:uname.value, error: uname.error});
         //axios call
        var person3 = new FormData()
        person3.append('username', uname.value)
        
        //kya? 
        axios.get('http://192.168.0.106:8001/GetUserByUsername',{params: { username:uname.value}})
        .then((response) => {
            
            if (response)
            {

                console.log("if condition");  
                console.log(response.data.data[0]);
                setFirstName({value: response.data.data[0].fields.first_name, error: ""}); 
                setLastName({value: response.data.data[0].fields.last_name, error: ""}); 
                setEmail({value: response.data.data[0].fields.email, error: ""}); 
               //setCheckPassword({value: response.data.data[0].fields.password, error: ""});  
               // console.log(response.data.fields.last_name); 
            }
           
        })

        return
      }
      else
      {
          return
      }

    } catch(e) {
      // error reading value
    }
  };


  const onUpdatePressed =async () => {
    const first_nameError = nameValidator(first_name.value)
    const last_nameError = nameValidator(last_name.value)
    const user_nameError = nameValidator(user_name.value)
    const emailError = emailValidator(email.value)
    //const old_passwordError = passwordValidator(old_password.value)
    const new_passwordError = passwordValidator(new_password.value)
    const confirm_passwordError = passwordValidator(confirm_password.value)
    
    try {
    if (emailError || new_passwordError || confirm_passwordError || first_nameError|| last_nameError|| user_nameError) {
      console.log("empty");
      setFirstName({ ...first_name, error: first_nameError })
      setLastName({ ...last_name, error: last_nameError })
      setUserName({ ...user_name, error: user_nameError})
      setEmail({ ...email, error: emailError })
      //setOldPassword({ ...old_password, error: old_passwordError })
      setNewPassword({ ...new_password, error: new_passwordError })
      setConfirmPassword({ ...confirm_password, error: confirm_passwordError })
      return
    }
    else{
     console.log("register else");
      const person = new FormData()

      // Add data to FormData instance which is person
      // The first parameter is the field name, same as the 'name' property in the HTML element <input name = 'name'>
      // The second parameter is the value of the field itself
      person.append('first_name', first_name.value)
      person.append('last_name', last_name.value)
      person.append('username', user_name.value)
      person.append('password1', new_password.value)
      person.append('password2', confirm_password.value)
      person.append('email', email.value)

      console.log(person);
      console.log(new_password.value);
      console.log(confirm_password.value);
      // Add data again data
      axios.post('http://192.168.0.106:8001/UpdateUser',person)
      .then((response) => {
        if (response.data.valid==true)
         {
          
          Alert.alert("Congratulations! User updated");
          navigation.navigate('LoginScreen');

          return;
         }
         else
         {
           Alert.alert("Oops! Passwords Don't Match. Enter again")
           console.log("update failed");
           setNewPassword({value:"", error: ""});
           setConfirmPassword({value:"", error:""});
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

   
   // getData(),
    <ScrollView>
    <Background>
     
      <Logo />
      <Header>Update Account Info</Header>
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
        value={last_name.value}
        onChangeText={(text) => setLastName({ value: text, error: '' })}
        error={!!last_name.error}
        errorText={last_name.error}
      />
      <TextInput style="color:blue"
        label="Username"
        returnKeyType="next"
        value={user_name.value}
        editable={false}
        
        //onChangeText={(text) => setUserName({ value: text, error: '' })}
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
        label="New Password"
        returnKeyType="done"
        value={new_password.value}
        onChangeText={(text) => setNewPassword({ value: text, error: '' })}
        error={!!new_password.error}
        errorText={new_password.error}
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
        onPress={onUpdatePressed}
        style={{ marginTop: 24 }}
      >
        Update
      </Button>
      <View style={styles.row}>
        <Text> Go back to </Text>
        <TouchableOpacity onPress={() => navigation.replace('Home')}>
          <Text style={styles.link, styles.bottomMargin}>Home</Text>
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

export default UpdateScreen
