import React, { Component }  from 'react';
import {TextInput, Alert,Modal,FlatList, ScrollView, Text, View, TouchableHighlight, ImageBackground } from 'react-native';
import Button from '../../components/Button'
import styles from './styles';
import {CreditCardInput} from 'react-native-credit-card-input';
import Stripe from 'react-native-stripe-api';

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
        values:[],
        error:'',
        
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
      
      const saveOnlinePaymentDefaults=(tokenValue)=>{//function to save data in reservation table
        //var roomAvailability=false; //room's availability flag set to fault
        //var reservationData={};//room's attrubutes to be saved in DB on reservation
        //DoReservation(reservationData, roomAvailability);//function for storing data

        console.log("api screen" + rentPerDay);
            //hurraaahhh
        this.props.navigation.navigate('Success',{roomType,rentPerDay,hotelName,hotel,checkIn,checkOut,r});
          
      }
      const _onChange = (formData) => this.setState({values:formData});
      const _onFocus = (field) => console.log('focusing', field);

      const payment = async () => {
        var expiry = this.state.values.values.expiry;
       
        var month = expiry.split('/');
        const apiKey='pk_test_51IdsZiD1gVujQSiXQD9yLd5s7dkQnCbQ9pKM5onJHUfGsjLdxmLawJ0AJF42ZH58YycQx6W2gLjIFYcjPBBTE45k00RaHoZoVe';
        const client = new Stripe(apiKey);
        await client
          .createToken({
            number: this.state.values.values.number,
            exp_month: month[0],
            exp_year: month[1],
            cvc: this.state.values.values.cvc,
            address_zip: this.state.values.values.postalCode,
          })
          .then((value) => {
            const myObjStr = JSON.stringify(value);
            if (myObjStr.includes('error')) {
              this.setState({error:value.error});
              console.log(this.state.error.message)
            } else {
              console.log("Successfully validated");
              saveOnlinePaymentDefaults(value);
              //console.log("Successfully validated");
            }
          })
          .catch((error) => console.log(error));
      };

        const naviFail=() =>{
            Alert.alert('Oops something went wrong');
                       

          this.props.navigation.navigate('Confirmation',{roomType,rentPerDay,hotelName,hotel,r});
        
        } 
    
     
        
      return (
        <View >
          <ImageBackground source={require('../../assets/background_dot.png')} resizeMode="repeat" style={styles.image}>

          <Text style={styles.roomType}> Payment API Test Screen</Text>
          <CreditCardInput
            autoFocus
            requiresName
            requiresCVC
            requiresPostalCode
            validColor={'black'}
            invalidColor={'red'}
            placeholderColor={'darkgray'}
            onFocus={_onFocus}
            onChange={_onChange}
          />
            {/*show room/reservation's details in a view if needed*/}  
              <Button style={{width:'60%', alignSelf:'center',marginTop:'20%'}} mode="contained" onPress={() => payment()}>Success</Button>
              <Button style={{width:'60%', alignSelf:'center',marginTop:'20%'}} mode="contained" onPress={naviFail}>Fail</Button>
            
            </ImageBackground>
          </View>
          
  
    
      );
    }
  }
  
  