import React, { Component }  from 'react';
import {TextInput, Alert,Modal,FlatList, ScrollView, Text, View, TouchableHighlight, Image,ImageBackground } from 'react-native';

import styles from './styles';
//import { recipes } from '../../data/dataArrays';
import MenuImage from '../../components/MenuImage/MenuImage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Moment from 'moment';

export default class DisplayScheduledRoomsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'DisplayScheduledRooms',
    headerLeft: () =>
      <MenuImage
        onPress={() => {
          navigation.openDrawer();
        }}
      />,
    // headerRight: (
    //   <ShoppingCartIcon/>
    // )
  });

  constructor(props) {
    super(props);
    this.state={
     
      dataSource:[],
      user:"",
    
  }
  }
  
  
  componentDidMount(){
      
    var username;
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem('user')
        if(value !== null) {
          // value previously stored
          username=value;
          username=JSON.parse(username);
          username=username.value;
          //console.log(username);
         // fetch('http://192.168.10.31:8001/schRooms/?format=json').then((response)=>response.json())
          fetch('http://192.168.10.8:8001/schRooms/?format=json').then((response)=>response.json())
          .then((responseJson)=>{
      
             
              this.setState({
                  isLoading:true,
                  dataSource:responseJson,
                  user:username,
                  
              })
             
          })
    
       
        }
      } catch(e) {
        //error reading value
      }
    }

    

   getData();
   
}

 avatarImage=img=> {
    switch (img) {
      case "Comfort":
        return require('../../../assets/rooms/Deluxe.jpg');
      case "Executive":
        return require('../../../assets/rooms/Suite.jpg');
      case "Deluxe":
        return require('../../../assets/rooms/Junior.jpg');
      default:
        return require('../../../assets/rooms/Single.jpg');
    }
  }

  renderRecipes = ({ item }) => (
    
    <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)'>
    
  
      <View style={styles.container}>
        <View style={styles.boxes}>
            <Image style={styles.room_photo} source={this.avatarImage(item.roomtype)}/>
            <Text style={styles.Productbuttontitle}>Username: {item.username}</Text>
            <Text  style={styles.Productbuttontitle}>Hotel: {item.hotel_name}</Text>
            <Text  style={styles.Productbuttontitle}>Room Type: {item.roomtype}</Text>
            <Text  style={styles.Productbuttontitle}>Amount Paid: {item.amount}</Text>
            <Text  style={styles.Productbuttontitle}>CheckIn Date: {Moment(item.checkin).format('YYYY-MM-DD')}</Text>
            <Text  style={styles.Productbuttontitle}>CheckOut Date: {Moment(item.checkout).format('YYYY-MM-DD')}</Text>
            <Text  style={styles.Productbuttontitle}>CheckOut Status: {String(item.checked_out)}</Text>
        </View>

       
      </View>
    </TouchableHighlight>
  );

  render() {
     
    Moment.locale('en');
    return (

      <ScrollView>
         <ImageBackground source={require('../../assets/background_dot.png')} resizeMode="repeat" style={styles.image_back}>
         
         <Text style={styles.roomType}>My Booked Rooms</Text>
          <FlatList style={styles.spacer}
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={1}
          data={this.state.dataSource.filter(d => d.username===this.state.user)}
          renderItem={this.renderRecipes}
          keyExtractor={item => item.id}
        />
        

        
        </ImageBackground>
      </ScrollView>
    );
  }
}
