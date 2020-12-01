import React, { useState } from "react";
import { Image,Text,TextInput,StyleSheet,Button, View,Modal,TouchableHighlight,FlatList,Alert} from "react-native";
import {useDispatch} from 'react-redux'


 
const Example = (params) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [timestart, settimestart] = useState("");
  const [timeend, settimeend] = useState("");
  var cars=[];
  const dispatch= useDispatch();

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
 
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
 
  const handleConfirm = (date) => {
    hideDatePicker();
  };
  const resetCart=()=>{    
        dispatch({ type: 'RESET_CART', payload:null})
  }
  const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      marginRight:40,
      marginLeft:10,
      textAlign:"center",
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 4,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
      marginTop:10,
      marginBottom:5,
      marginRight:40,
      marginLeft:40,
      textAlign:"center",
      fontSize: 16,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 0.5,
      borderColor: 'purple',
      borderRadius: 8,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
    },
  });
  const pickerSelect = StyleSheet.create({
    inputIOS: {
      marginRight:40,
      marginLeft:40,
      textAlign:"center",
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 4,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
      marginTop:10,
      marginBottom:0,
      marginRight:40,
      marginLeft:40,
      textAlign:"center",
      fontSize: 16,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 0.5,
      borderColor: 'purple',
      borderRadius: 8,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
    },
  });
  const styles = StyleSheet.create({  
    container: {  
      flex: 1,  
      justifyContent: 'center',  
  },  
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
    headerText: {  
      fontSize: 20,  
      textAlign: "center",  
      margin: 10,  
      fontWeight: "bold"  
  },  
  TextInputStyle: {
    marginRight:40,
    marginLeft:40,
    textAlign: 'center',  
    height: 40,  
    borderRadius: 10,  
    borderWidth: 2,  
    borderColor: '#FFA701',    
  }  
  });
  const stylee = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      justifyContent: 'center',
    },
    submit:{
      marginRight:40,
      marginLeft:40,
      marginTop:10,
      paddingTop:10,
      paddingBottom:10,
      backgroundColor:'#68a0cf',
      borderRadius:10,
      borderWidth: 1,
      borderColor: '#fff',
      
    },
    text: {
      marginRight:40,
      marginBottom:30,
      marginLeft:40,
      marginTop:10,
      paddingTop:15,
      paddingBottom:15,
      backgroundColor:'#FFA701',
      borderRadius:30,
      borderWidth: 1,
      borderColor: '#fff',
      color:"#fff",
      textAlign:"center",
   },
   text1: {
    marginRight:40,
    marginBottom:30,
    marginLeft:40,
    marginTop:10,
    paddingTop:15,
    paddingBottom:15,
    backgroundColor:'red',
    borderRadius:30,
    borderWidth: 1,
    borderColor: '#fff',
    color:"#fff",
    textAlign:"center",
 },


  });
  const styleButton = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      justifyContent: 'center',
    },
  });
  const timeslot = () => {
    setModalVisible(true);
  };
 const postdata = () => {
    try{
      if(timestart!="")
      {
      Alert.alert(
        "Order",
        "You order has been placed for time slot"+JSON.stringify(timestart)+"------"+JSON.stringify(timeend),
        [

          { text: "OK", onPress: () => {
            resetCart()
            params.navigation.navigate("Home") 
             
          }}
        ],
        { cancelable: false }
      );
      }
      else
      {
        Alert.alert(
          "No Time Slot Slected",
          "Please Select a time slot ",
          [
  
            { text: "OK" }
          ],
          { cancelable: false }
        );
        }
  
  
    }catch(e){
      console.log(e)
    }
  };
  var i;
  
  for (i = 0; i < params.navigation.state.params.items.length; i++) {
    cars[i]=params.navigation.state.params.items[i]['id'];
  }
 
  console.log(timestart)
  return (
    <View style={stylee.container}>
      <Image
        style={{ width: 450, height: 350,marginTop:-190,marginBottom:30, }}
        source={require('../../../assets/icons/cal.png')}
      />
      <Text style = {stylee.text} onPress={timeslot}>
      {timestart!="" ? timestart + " --- " + timeend : "Select Your Time Slot"}
      
      </Text>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Select Your Time Slot!</Text>
            <FlatList
              vertical
              showsVerticalScrollIndicator={false}
              numColumns={1}
              data={params.navigation.state.params.timeslots}
              renderItem={({ item }) =>  
              <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => {
                settimestart(item.start);
                settimeend(item.end);
                console.log(timestart)
                setModalVisible(!modalVisible);
                
                
              }} >
              <View>
              <Text style = {{marginRight:30,
              marginBottom:10,
              marginLeft:40,
              marginTop:10,
              paddingTop:15,
              paddingBottom:15,
              paddingright:25,
              paddingLeft:15,
              backgroundColor:'#FFA701',
              borderRadius:10,
              borderWidth: 1,
              borderColor: '#fff',
              color:"#fff",
              }}>  {item.start}----{item.end}    </Text>
              </View>
            </TouchableHighlight>}
              keyExtractor={item => `${item.recipeId}`}
            />

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}onPress={() => {
                setModalVisible(!modalVisible);
              }}
              
            >
              <Text style={styles.textStyle}>Go Back</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    
        <Text style = {stylee.text1} onPress={postdata}>
         Submit
      </Text>
        
    </View>
  );
};
 
export default Example;