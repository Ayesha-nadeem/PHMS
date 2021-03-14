import React, { Component }  from 'react';
import {TextInput, Alert,Modal,FlatList, ScrollView, Text, View, TouchableHighlight, ImageBackground } from 'react-native';
import Button from '../../components/Button'
import styles from './styles';



export default class APIscreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
      title: 'APIscreen',
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
  
      
     
      const hotel=this.props.navigation.getParam('hotelId');
      const roomType=this.props.navigation.getParam('roomType');
      const rentPerDay=this.props.navigation.getParam('amount');
      const hotelName=this.props.navigation.getParam('hotelName');
      const r=this.props.navigation.getParam('roomId');
      const checkIn=this.props.navigation.getParam('checkIn');
      const checkOut=this.props.navigation.getParam('checkOut');
  
        
        const naviFail=() =>{
            Alert.alert('Oops something went wrong');
                       

          this.props.navigation.navigate('Confirmation',{roomType,rentPerDay,hotelName,hotel,r});
        
        } 
        const naviPass=() =>{
            //hurraaahhh
            this.props.navigation.navigate('Success',{roomType,rentPerDay,hotelName,hotel,checkIn,checkOut,r});
          
          } 
    
     
        
      return (
  
  
         
        
          <View >
            <ImageBackground source={require('../../assets/background_dot.png')} resizeMode="repeat" style={styles.image}>
           
              <Text style={styles.roomType}> Payment API Test Screen</Text>
              
              
              <Button style={{width:'60%', alignSelf:'center',marginTop:'20%'}} mode="contained" onPress={naviPass}>Success</Button>
              <Button style={{width:'60%', alignSelf:'center',marginTop:'20%'}} mode="contained" onPress={naviFail}>Fail</Button>
            
            </ImageBackground>
          </View>
          
  
    
      );
    }
  }
  
  