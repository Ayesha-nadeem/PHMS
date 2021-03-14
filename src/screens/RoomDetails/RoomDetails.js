import React, { Component }  from 'react';
import {TextInput, Alert,Modal,FlatList, ScrollView, Text, View, TouchableHighlight, ImageBackground } from 'react-native';
import styles from './styles';
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


export default class OptionScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'RoomDet',
   // headerLeft: () =>
     // <MenuImage
       // onPress={() => {
         // navigation.openDrawer();
      //  }}
      ///>,
    // headerRight: (
    //   <ShoppingCartIcon/>
    // )
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
//shows room type's specifications
  render() {
      const {navigaton}=this.props;
      const r=this.props.navigation.getParam('rt');
      const hotel=this.props.navigation.getParam('hotel');
      var hotelName=this.props.navigation.getParam('hotelName');
      let roomType="";
      let roomDesc="";
      let numOfPer="";
      let rentPerDay=0;
      if(r==1)
      {
        
        roomType='Single';
        
        roomDesc="A special form of accommodation which can be found in some resort hotels. It is a kind of stand-alone house which gives extra privacy and space to hotel guests. A fully equipped villa contains not only bedrooms and a living room but a private swimming pool, Jacuzzi and balcony. It is suitable for couples, families and large groups.The room size or area of Villa’s are generally between 100 m² to 150 m².";
        numOfPer="1";
        rentPerDay=10000;
      }
      else if(r==2)
      {
        roomType="Deluxe";
        roomDesc="A special form of accommodation which can be found in some resort hotels. It is a kind of stand-alone house which gives extra privacy and space to hotel guests. A fully equipped villa contains not only bedrooms and a living room but a private swimming pool, Jacuzzi and balcony. It is suitable for couples, families and large groups.The room size or area of Villa’s are generally between 100 m² to 150 m².";
        numOfPer="2-3";
        rentPerDay=15000;
      }
      else if(r==3)
      {
        roomType="Comfort";
        roomDesc="A special form of accommodation which can be found in some resort hotels. It is a kind of stand-alone house which gives extra privacy and space to hotel guests. A fully equipped villa contains not only bedrooms and a living room but a private swimming pool, Jacuzzi and balcony. It is suitable for couples, families and large groups.The room size or area of Villa’s are generally between 100 m² to 150 m².";
        numOfPer="1-2";
        rentPerDay=15000;
      }
      else
      {
        roomType="Executive";
        roomDesc="A special form of accommodation which can be found in some resort hotels. It is a kind of stand-alone house which gives extra privacy and space to hotel guests. A fully equipped villa contains not only bedrooms and a living room but a private swimming pool, Jacuzzi and balcony. It is suitable for couples, families and large groups.The room size or area of Villa’s are generally between 100 m² to 150 m².";
        numOfPer="1-2";
        rentPerDay=25000;
      }

      
    const navi=() =>{
     
      this.props.navigation.navigate('Confirmation',{roomType,r,hotel,rentPerDay,hotelName});
    
    } 

      
    // const pressHandler=(opt) =>{
    //     if (opt=="Menu")
    //     {
          
    //         var hotel=this.props.navigation.getParam('hotel');
    //         const rt=this.props.navigation.getParam('rt');
    //         console.log(hotel);
    //         console.log(rt);
    //     }
    //     else{
    //         console.log(opt);
    //         var hotel=this.props.navigation.getParam('hotel');
    //         console.log(hotel);
    //         this.props.navigation.navigate('Room',{hotel});
    //     }
        

    // }
    return (
       
      <ScrollView>
        <View>
          <ImageBackground source={require('../../assets/background_dot.png')} resizeMode="repeat" style={styles.image}>
              <SlideShow images={this.state.images} />
              <Text style={styles.roomType}> {JSON.stringify(roomType)}</Text>
              <Text style={styles.roomRent}>Number of Persons Allowed :  {JSON.stringify(numOfPer)}</Text>
              <Paragraph>Description : {JSON.stringify(roomDesc)}</Paragraph>
            

              <Text  style={styles.roomRent}>Starting from Rs:{JSON.stringify(rentPerDay)}</Text>
              
              <Button mode="contained" style={{width:"60%" , alignSelf:"center"}} onPress={navi}>Book now</Button>

          </ImageBackground>
        </View>
      </ScrollView>
        

  
    );
  }
}

