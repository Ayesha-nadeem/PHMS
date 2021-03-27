import React, { Component }  from 'react';
import {TextInput, Alert,Modal,FlatList, ScrollView, Text, View, TouchableHighlight, Image,ImageBackground } from 'react-native';
import styles from './styles';
//import { recipes } from '../../data/dataArrays';
import MenuImage from '../../components/MenuImage/MenuImage';
import DrawerActions from 'react-navigation';
//import { getCategoryName } from '../../data/MockDataAPI';
import ShoppingCartIcon from '../../screens/shoppingCart/shoppingCart';
import SlideShow from '../../components/SlideShow'

export default class OptionScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Option',
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
  render() {
    const pressHandler=(opt) =>{
        if (opt=="Menu")
        {
            
            var hotel=this.props.navigation.getParam('hotel');
            var hotelName=this.props.navigation.getParam('hotelName');
            this.props.navigation.navigate('Breakfast',{hotel,hotelName});
        }
        else{
            var hotel=this.props.navigation.getParam('hotel');
            var hotelName=this.props.navigation.getParam('hotelName');
            this.props.navigation.navigate('Room',{hotel,hotelName});
        }
        

    }
    return (
      <ImageBackground source={require('../../assets/background_dot.png')} resizeMode="repeat" style={styles.image_back}>
      <View>
        
     
               <View style={styles.centeredView}>

              <TouchableHighlight
              
                style={{ ...styles.openButton, backgroundColor: "white" }}
                onPress={() => pressHandler("Menu")}                  >
                  <View styles={styles.container}>
                
                {/* sIq3ADHz */}
                <Text style={styles.textStyle}>Menu</Text>
                <Image style={styles.photoStyle} source={require('../../../assets/menus.png')} />
                </View>
              </TouchableHighlight>
              <TouchableHighlight
                style={{ ...styles.openButton2, backgroundColor: "white" }}
                onPress={() => pressHandler("Room")}                  >
                  <View styles={styles.container}>
                {/* sIq3ADHz */}
                <Text style={styles.textStyle}>Rooms </Text>
                <Image style={styles.photoStyle} source={require('../../../assets/rooms.png')} />
                </View>
              </TouchableHighlight>
            
          </View>
      </View>
      
      </ImageBackground>
    );
  }
}
