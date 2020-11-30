import React, { useState,Component } from "react";
 import { Image,Text,TextInput,StyleSheet,Button, View,Modal,TouchableOpacity,FlatList,Alert} from "react-native";

import { SliderBox } from "react-native-image-slider-box";

export default class SlideShow extends Component {
    constructor(props) {
      super(props);
      this.state = {
        images: [
            require('../../assets/f7.jpg'),
            require('../../assets/f8.jpg'),
            require('../../assets/f9.jpg'),
            require('../../assets/f10.jpg'),
        ]
      };
    }
   
    render() {
      return (
          <SliderBox
            images={this.state.images}          
          />
      );
    }
  }
   
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop:30,
      height:100
    }
  });