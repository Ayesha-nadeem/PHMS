import React, { Component }  from 'react';
import {TextInput, Alert,Modal,FlatList, ScrollView, Text, View, TouchableHighlight, ImageBackground } from 'react-native';
import styles from './styles';

import Button from '../../components/Button'
import Paragraph from '../../components/Paragraph'
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';


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

    const tableTitle= ['Hotel Name', 'Room Type', 'Room Rent', 'Check-In','Check-Out'];
    const roomId=this.props.navigation.getParam('r');
    const hotelId=this.props.navigation.getParam('hotel');
    const roomType=this.props.navigation.getParam('roomType');
    const amount=this.props.navigation.getParam('rentPerDay');
    var hotelName=this.props.navigation.getParam('hotelName');
    var checkIn='';
    var checkOut='';

      const tableData= [
        [hotelName],
        [ roomType],
        [ amount+' PKR/night'],
        [ '22-03-2000'],
        ['23-03-2000']
      ];

      const navi=() =>{
     
        this.props.navigation.navigate('APIscreen',{roomType,amount,hotelName,hotelId,checkIn,checkOut,roomId});
      
      } 
  
   
      
    return (


       
      
        <View >
          <ImageBackground source={require('../../assets/background_dot.png')} resizeMode="repeat" style={styles.image}>
         
            <Text style={styles.roomType}> Confirm Your Booking</Text>
            
            <Table borderStyle={{borderWidth: 2}}>
          
              <TableWrapper style={styles.wrapper}>
              
                <Col data={tableTitle} style={styles.title} heightArr={[50,50]} textStyle={styles.text2}/>
                <Rows data={tableData} flexArr={[ 1, 1]} style={styles.row} textStyle={styles.text}/>
                
              </TableWrapper>
            </Table>
              
            <Button style={{width:'60%', alignSelf:'center',marginTop:'20%'}} mode="contained" onPress={navi}>Pay Now</Button>
          
          </ImageBackground>
        </View>
        

  
    );
  }
}

