import React, { Component }  from 'react';
import {TextInput, Alert,Modal,FlatList, ScrollView, Text, View, TouchableHighlight, Image } from 'react-native';
import styles from './styles';
import { recipes } from '../../data/dataArrays';
import MenuImage from '../../components/MenuImage/MenuImage';
import DrawerActions from 'react-navigation';
import { getCategoryName } from '../../data/MockDataAPI';
import ShoppingCartIcon from '../../screens/shoppingCart/shoppingCart';

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
            console.log(opt);
<<<<<<< HEAD
            var hotel=this.props.navigation.getParam('hotel');
          
            this.props.navigation.navigate('Breakfast',{hotel});
        }
        else{
            console.log(opt);
            var hotel=this.props.navigation.getParam('hotel');
            console.log(hotel);
            this.props.navigation.navigate('Room',{hotel});
=======
            var item=this.props.navigation.getParam('item');
            //var room=this.props.navigation.getParam('room');
            this.props.navigation.navigate('Breakfast',{item});
        }
        else{
            console.log(opt);
            var item=this.props.navigation.getParam('item');
            //var room=this.props.navigation.getParam('room');
            this.props.navigation.navigate('Room',{item});
>>>>>>> 78b0650e758ad318e4f331296dfc912f22f6cc9f
        }
        

    }
    return (
      <View>
     
          <View style={styles.centeredView}>
              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "orange" }}
                onPress={() => pressHandler("Menu")}                  >
                  <View styles={styles.container}>
                
                {/* sIq3ADHz */}
                <Text style={styles.textStyle}>Menu! </Text>
                <Image style={styles.photoStyle} source={require('../../../assets/menus.png')} />
                </View>
              </TouchableHighlight>
              <TouchableHighlight
                style={{ ...styles.openButton2, backgroundColor: "darkcyan" }}
                onPress={() => pressHandler("Room")}                  >
                  <View styles={styles.container}>
                {/* sIq3ADHz */}
                <Text style={styles.textStyle}>Rooms! </Text>
                <Image style={styles.photoStyle} source={require('../../../assets/rooms.png')} />
                </View>
              </TouchableHighlight>
            
          </View>
      </View>
    );
  }
}
