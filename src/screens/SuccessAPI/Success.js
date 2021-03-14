import React, { Component }  from 'react';
import {TextInput,Button, Alert,Modal,FlatList, ScrollView, Text, View, TouchableHighlight, ImageBackground,Linking } from 'react-native';
//import Button from '../../components/Button'
import styles from './styles';
import Background from '../../components/Background';
import Tick from '../../components/Tick';
import Header from '../../components/Header';
import Hyperlink from 'react-native-hyperlink';

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
      const room_no=this.props.navigation.getParam('r');
      const checkin=this.props.navigation.getParam('checkIn');
      const checkout=this.props.navigation.getParam('checkOut');


      //task for Saira

      //1-fetch username from state and make const user
      //2-call the api written by ayesha
     
       
     
        
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
  
  