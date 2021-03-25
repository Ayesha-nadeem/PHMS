import React, { Component }  from 'react';
import {TextInput, Alert,Modal,FlatList, ScrollView, Text, View, TouchableHighlight, Image } from 'react-native';
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
          fetch('http://192.168.0.106:8001/schRooms/?format=json').then((response)=>response.json())
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
      case "Deluxe":
        return require('../../../assets/rooms/Deluxe.jpg');
      case "Suite":
        return require('../../../assets/rooms/Suite.jpg');
      case "Junior":
        return require('../../../assets/rooms/Junior.jpg');
      default:
        return require('../../../assets/rooms/Single.jpg');
    }
  }

  renderRecipes = ({ item }) => (
    
    <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => 
      {
       //this.setState({hotelname:item.name,hotelid:item.id});
    //   var hotel = item.id;
    //   var hotelName=item.name;
    //   console.log(hotel);
    //'image!name-of-the-asset'
    Alert.alert(""+item.roomtype);
    
    console.log(item.checked_out);
} }>
    
  
      <View style={styles.container}>
        
        <Image style={styles.photo} source={this.avatarImage(item.roomtype)}/>
        <View style={styles.boxes}>
        <Text style={styles.Productbuttontitle}>Username: {item.username}</Text>
        <Text  style={styles.Productbuttontitle}>Hotel: {item.hotel_name}</Text>
        <Text  style={styles.Productbuttontitle}>Room Type {item.roomtype}</Text>
        <Text  style={styles.Productbuttontitle}>Amount Due: {item.amount}</Text>
        <Text  style={styles.Productbuttontitle}>CheckIn Date: {Moment(item.checkin).format('MMM d, YYYY')}</Text>
        <Text  style={styles.Productbuttontitle}>CheckOut Date: {Moment(item.checkout).format('MMM d, YYYY')}</Text>
        <Text  style={styles.Productbuttontitle}>CheckOut Status: {String(item.checked_out)}</Text>
        </View>

        {/* <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text> */}
      </View>
    </TouchableHighlight>
  );

  render() {
     
    Moment.locale('en');
    return (

      <View>
       <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={1}
          data={this.state.dataSource.filter(d => d.username===this.state.user)}
          renderItem={this.renderRecipes}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}
