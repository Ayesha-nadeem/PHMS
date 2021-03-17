import React, { Component }  from 'react';
import {TextInput, Alert,Modal,FlatList, ScrollView, Text, View, TouchableHighlight, Image } from 'react-native';
import styles from './styles';
//import { recipes } from '../../data/dataArrays';
import MenuImage from '../../components/MenuImage/MenuImage';
import AsyncStorage from '@react-native-async-storage/async-storage';


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
    
  }
  }

  componentDidMount(){
    fetch('http://192.168.100.5:8000/schRooms/?format=json').then((response)=>response.json())
    .then((responseJson)=>{
        this.setState({
            isLoading:true,
            dataSource:responseJson
        })
    })
   
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
// onPressRecipe = item => {
//   this.props.navigation.navigate('Breakfast', { item });
// };
  renderRecipes = ({ item }) => (
    
    <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => 
      {
       //this.setState({hotelname:item.name,hotelid:item.id});
    //   var hotel = item.id;
    //   var hotelName=item.name;
    //   console.log(hotel);
    //'image!name-of-the-asset'
    Alert.alert(""+item.roomtype);
} }>
      <View style={styles.container}>
        <Image style={styles.photo} source={this.avatarImage(item.roomtype)}/>
        <Text style={styles.Productbuttontitle}>{item.username}</Text>
        <Text  style={styles.Productbuttontitle}>{item.hotel_name}</Text>
        <Text  style={styles.Productbuttontitle}>{item.amount}</Text>
        <Text  style={styles.Productbuttontitle}>{item.checkin}</Text>
        <Text  style={styles.Productbuttontitle}>{item.checkout}</Text>
        <Text  style={styles.Productbuttontitle}>{item.checked_out}</Text>
        <Text  style={styles.Productbuttontitle}>{item.roomtype}</Text>

        {/* <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text> */}
      </View>
    </TouchableHighlight>
  );

  render() {
      var username='';
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
          //error reading value
        }
      }
      const user="ayesha";
      console.log("username  "+username);
      console.log("user  "+user);

      getData();
    return (

      <View>
       <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={1}
          data={this.state.dataSource.filter(d => d.username===user)}
          renderItem={this.renderRecipes}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}
