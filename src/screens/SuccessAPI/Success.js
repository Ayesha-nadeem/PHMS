import React, { Component }  from 'react';
import {TextInput,Button, Alert,Modal,FlatList, ScrollView, Text, View, TouchableHighlight, ImageBackground,Linking } from 'react-native';
//import Button from '../../components/Button'
import styles from './styles';
import Background from '../../components/Background';
import Tick from '../../components/Tick';
import Header from '../../components/Header';
import Hyperlink from 'react-native-hyperlink';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios'
const url='../screens/Home/HomeScreen';
export default class Success extends React.Component {
    static navigationOptions = ({ navigation }) => ({
      title: 'Success',
  //    headerLeft: () =>
  //      <MenuImage
  //        onPress={() => {
  //          navigation.openDrawer();
  //        }}
  //       />,
  //     headerRight: (
  //       <ShoppingCartIcon/>
  //     )
    });
  
    constructor(props) {
      super(props);
      this.state={
        isLoading:true,
    }
    }
  

    render() {
  
       const navi=()=>{
           this.props.navigation.navigate('Home');
       }
     
       const hotel_id=this.props.navigation.getParam('hotel');
       const room_type=this.props.navigation.getParam('roomType');
       const amount=this.props.navigation.getParam('rentPerDay');
       const hotel_name=this.props.navigation.getParam('hotelName');
       const r=this.props.navigation.getParam('r');
       const checkin=this.props.navigation.getParam('checkIn');
       const checkout=this.props.navigation.getParam('checkOut');
       var username=""; //state
       //function to get username 
      const getData = async () => {
        try {
          const value = await AsyncStorage.getItem('user')
          if(value !== null) {
            // value previously stored
            username=value;
            username=JSON.parse(username);
            username=username.value;
           // console.log(username);
            callApi();
          }
        } catch(e) {
          // error reading value
        }
      }
      getData();
      //function to call scheduleroom
      const callApi = ()=>{
        const person1 = new FormData()
        // Add data to FormData instance which is person
        // The first parameter is the field name, same as the 'name' property in the HTML element <input name = 'name'>
        // The second parameter is the value of the field itself
        person1.append('username', username)
        person1.append('hotel_id', hotel_id)
        person1.append('room_type', room_type)
        person1.append('checkin', '2021-03-25')
        person1.append('checkout','2021-03-26' )
        person1.append('amount', amount)
        person1.append('hotel_name',hotel_name)
        console.log(hotel_id, room_type, checkin,checkout,hotel_name,username)
        //axios.post('http://192.168.10.31:8001/scheduledRoom',person1)
        axios.post('http://192.168.10.7:8001/scheduledRoom',person1)
        .then((response) => {
         // Alert.alert("Modal has been closed."+response.data.booked);
          if(response.data.booked==false) {
    
            Alert.alert('Contact Admin (Payment Done,room not booked)');
            const roomType=room_type;
            const rentPerDay=amount;
            const hotelName=hotel_name;
            const hotel=hotel_id;
          
            this.props.navigation.navigate('Confirmation',{roomType,rentPerDay,hotelName,hotel,r});
        
          }
          else
          {
            console.log ("success");
           // Alert.alert("Payment Failed");
          }
        }, (error) => {
            console.log(error);
          });
       } 

      
        
      return (
  
        <Background>
            <Tick/>
            <Header>Congratulations!</Header>
            <Text>Your Room is Booked.</Text>
           
           {/* 3- enable this button when api returns true */}
            <Button title="Go back to Home" onPress={navi}></Button>
        </Background>
  
    
      );
    }
  }
  
  