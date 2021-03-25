import React, { useState }  from 'react';
import {TextInput, Alert,Modal,FlatList, ScrollView, Text, View, TouchableHighlight, ImageBackground } from 'react-native';
import styles from './styles';
import DateTimePickerModal from "react-native-modal-datetime-picker";

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
        isDatePickerVisible:false,
        isDatePickerVisible1:false,
        checkIn:'',
        checkOut:'',
        amount:0
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
    var amount=this.props.navigation.getParam('rentPerDay');
    var hotelName=this.props.navigation.getParam('hotelName');
    const navi=() =>{
     var checkIn=this.state.checkIn;
     var checkOut=this.state.checkOut;
      this.props.navigation.navigate('APIscreen',{roomType,amount,hotelName,hotelId,checkIn,checkOut,roomId});
    

    } 

    const showDatePicker = () => {
      this.setState({isDatePickerVisible:true});
    };
    const hideDatePicker = () => {
        this.setState({isDatePickerVisible:false});
    };
    const handleConfirm = (date) => {
      this.setState({checkIn : new Date(date)},()=> {
       if (this.state.checkOut){
        const diffTime = Math.abs(this.state.checkOut - this.state.checkIn);
        const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24)); 
        console.log(diffTime + " milliseconds");
        console.log(diffDays + " days");
        this.setState({amount:amount*diffDays})
      }
        
     
       });
      hideDatePicker();
    };

    const showDatePicker1 = () => {
      this.setState({isDatePickerVisible1:true});
    };
    const hideDatePicker1 = () => {
        this.setState({isDatePickerVisible1:false});
    };
    const handleConfirm1 = (date) => {
      this.setState({checkOut : new Date(date)},()=> {
        const diffTime = Math.abs(this.state.checkOut - this.state.checkIn);
        const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24)); 
        console.log(diffTime + " milliseconds");
        console.log(diffDays + " days");
        this.setState({amount:amount*diffDays});   
       
      });
      //this.setState({checkOut : new Date(date)});
      console.log(this.state.checkOut);
      hideDatePicker1();
      


     // const diffTime = Math.abs(this.state.checkOut - this.state.checkIn);
      //const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
      //console.log(diffTime + " milliseconds");
      //console.log(diffDays + " days");
      // amount=(this.state.checkOut.getTime()-this.state.checkIn.getTime())/86400000;
      // console.log(typeof(this.state.checkOut));
      // console.log(amount);
    };

    const btn1=<View>
    {!(this.state.checkIn) && <Button title="Check In" width='25'    onPress={showDatePicker}>Check-In</Button>}
    <Text onPress={showDatePicker}>{this.state.checkIn && this.state.checkIn.toDateString()}</Text>

    
    <DateTimePickerModal
        isVisible={this.state.isDatePickerVisible}
        mode='date'
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        minimumDate={new Date()}/>
</View>
const btn2=<View>
{!(this.state.checkOut) && <Button title="Check In" width='25'    onPress={showDatePicker1}>Check-Out</Button>}
<Text onPress={showDatePicker1}>{this.state.checkOut && this.state.checkOut.toDateString()}</Text>


<DateTimePickerModal
    isVisible={this.state.isDatePickerVisible1}
    mode='date'
    onConfirm={handleConfirm1}
    onCancel={hideDatePicker1}
    minimumDate={new Date()}/>
</View>
  //  const btn2=<Button onPress={()=>{showDatePicker}}></Button>

      const tableData= [
        [hotelName],
        [ roomType],
        [this.state.amount+' PKR/night'],
        [btn1],
        [btn2]
      ];
      

     
      
      
  
   
      
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

            
              {/* <View>
                    <AppButton title="Check Out" width='30'    onPress={showDatePicker}></AppButton>
                    <Text >{checkOut.toDateString()}</Text>
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode='date'
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                        minimumDate={new Date(checkIn)}/>
              </View> */}
              
            <Button style={{width:'60%', alignSelf:'center',marginTop:'20%'}} mode="contained" onPress={navi}>Pay Now</Button>
          </ImageBackground>
        </View>
        

  
    );
  }
}

