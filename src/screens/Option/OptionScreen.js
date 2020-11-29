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
            var item=this.props.navigation.getParam('item');
            //var room=this.props.navigation.getParam('room');
            this.props.navigation.navigate('Breakfast',{item});
        }
        else{
            console.log(opt);
            var item=this.props.navigation.getParam('item');
            //var room=this.props.navigation.getParam('room');
            this.props.navigation.navigate('Room',{item});
        }
        

    }
    return (
      <View>
     
          <View style={styles.centeredView}>
              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "orange" }}
                onPress={() => pressHandler("Menu")}                  >
                {/* sIq3ADHz */}
                <Text style={styles.textStyle}>Check Out the Menu! </Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={{ ...styles.openButton2, backgroundColor: "darkcyan" }}
                onPress={() => pressHandler("Room")}                  >
                {/* sIq3ADHz */}
                <Text style={styles.textStyle}>Check Out Rooms! </Text>
              </TouchableHighlight>
            
          </View>
      </View>
    );
  }
}
