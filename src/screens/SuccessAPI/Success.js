import React, { Component }  from 'react';
import {TextInput,Button, Alert,Modal,FlatList, ScrollView, Text, View, TouchableHighlight, ImageBackground,Linking } from 'react-native';
//import Button from '../../components/Button'
import styles from './styles';
import Background from '../../components/Background';
import Tick from '../../components/Tick';
import Header from '../../components/Header';
import Hyperlink from 'react-native-hyperlink';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
            console.log(username);
         
          }
        } catch(e) {
          // error reading value
        }
      }
      getData();

      //function to call scheduleroom
      const callApi = async ()=>{
        try {
          const ip = '127.0.0.1:8000';
          console.log("i'm running");
          const data = fetch(`http://${ip}/scheduleroom`, {
            method: 'POST',
            body: JSON.stringify({
              username,
              hotel_id,
              room_type,
              checkin,
              checkout,
              amount,
              hotel_name
              
            })
          })
          const result = await data.json();
          if(result.booked==false) {
    
            Alert.alert('Contact Admin (Payment Done,room not booked)');
            const roomType=room_type;
            const rentPerDay=amount;
            const hotelName=hotel_name;
            const hotel=hotel_id;
          
            this.props.navigation.navigate('Confirmation',{roomType,rentPerDay,hotelName,hotel,r});
    
          }
          else
          {
            Alert.alert(result);
          }
       } 
       catch (error) {
        console.log("error :" , error);
       }
       }

      callApi();
     
        
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
  
  