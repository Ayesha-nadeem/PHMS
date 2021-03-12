import React, { Component }  from 'react';
import {TextInput, Alert,Modal,FlatList, ScrollView, Text, View, TouchableHighlight, Image } from 'react-native';

//import { recipes } from '../../data/dataArrays';
import MenuImage from '../../components/MenuImage/MenuImage';
import DrawerActions from 'react-navigation';
//import { getCategoryName } from '../../data/MockDataAPI';
import ShoppingCartIcon from '../../screens/shoppingCart/shoppingCart';
import SlideShow from '../../components/SlideShow'
import Background from '../../components/Background'
import Logo from '../../components/Logo'
import Header from '../../components/Header'
import Button from '../../components/Button'
import Paragraph from '../../components/Paragraph'

//import Button from '../../components/Button'

import { SliderBox } from "react-native-image-slider-box";


export default class Confirmation extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Confirmation',
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


// onPressRecipe = item => {
//   this.props.navigation.navigate('Breakfast', { item });
// };
  render() {

    const roomId=this.props.navigation.getParam('r');
    const hotelId=this.props.navigation.getParam('hotel');
    const roomType=this.props.navigation.getParam('roomType');
    const amount=this.props.navigation.getParam('rentPerDay');
    var hotelName=this.props.navigation.getParam('hotelName');
      
    return (


       
      
        <View>
            <Text  >Confirmation: {JSON.stringify(hotelName)}</Text>
            <Text  >Confirmation: {JSON.stringify(hotelId)}</Text>
            <Text  >Confirmation: {JSON.stringify(roomId)}</Text>
            <Text  >Confirmation: {JSON.stringify(roomType)}</Text>
            <Text  >Confirmation: {JSON.stringify(amount)}</Text>
            
          
            <Button mode="contained">Pay Now</Button>
          
        </View>
        

  
    );
  }
}

