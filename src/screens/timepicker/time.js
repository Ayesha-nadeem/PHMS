import React, { useState } from "react";
import { Image,Text,TextInput,StyleSheet,Button, View,Modal,TouchableHighlight,FlatList,Alert} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import RNPickerSelect from 'react-native-picker-select';

 
const Example = (params) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [timestart, settimestart] = useState("Select You Time Slot");
  const [timeend, settimeend] = useState("");
  // var timestart;
  // var timeend=null;
  var cars=[];
 
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
 
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
 
  const handleConfirm = (date) => {
    hideDatePicker();
  };
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
      // console.log(params.navigation.state.params.room[0].hotel_id)
      // console.log(params.navigation.state.params.room[0].id)
      // console.log(cars)
      // console.log(timestart)
      //  fetch('http://82.165.158.88/Orders/',{
      //   method:'post',
      //   mode:'no-cors',
      //   headers:{
      //     'Accept':'application/json',
      //     'Content-type':'application/json',
      //   },
      //   body:JSON.stringify({
      //     hotel_id:params.navigation.state.params.room[0].hotel_id,
      //     room_id:params.navigation.state.params.room[0].id,
      //     menu_items:cars,
      //   })

      // });
      Alert.alert(
        "Order",
        "You order has been placed for time slot"+JSON.stringify(timestart)+"------"+JSON.stringify(timeend),
        [

          { text: "OK", onPress: () => params.navigation.navigate("Home") }
        ],
        { cancelable: false }
      );
  
    }catch(e){
      console.log(e)
    }
  };
  var i;
  
  for (i = 0; i < params.navigation.state.params.items.length; i++) {
    cars[i]=params.navigation.state.params.items[i]['id'];
  }
  // console.log(params.navigation.state.params.items)
  console.log(cars)
  // console.log(timestart)
  // function Item({ title }) {
  //   return (
  //     <View style={styles.item}>
  //       <Text style={styles.title}>{title}</Text>
  //     </View>
  //   );
  // }
  console.log(timestart)
  return (
    <View style={stylee.container}>
      <Image
        style={{ width: 450, height: 350,marginTop:-190,marginBottom:30, }}
        source={require('../../../assets/icons/cal.png')}
      />
      <Text style = {stylee.text} onPress={timeslot}>
      {timestart}--{timeend}
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
                {/* <Image style={styles.photo} source={{ uri: item.photo_url }} /> */}
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
                {/* <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text> */}
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
      {/* /* <Button
      style={{color: 'red', marginTop: 10, padding: 10}}
      color="#FFA701"
      title="Button with icon component" 
      style={styleButton.container} title="Select Time" onPress={showDatePicker} /> */}
      {/* <TextInput
          placeholder="Enter Number Of Persons"  
          underlineColorAndroid='transparent'  
          style={styles.TextInputStyle}  
          keyboardType={'numeric'}  
      />  
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="time"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <RNPickerSelect
            placeholder={{}}
            onValueChange={(value) => console.log(value)}
            items={[
              { label: 'Select Hall', value: 'Select Table' },
              { label: '2', value: '2', },
              { label: '4', value: '4' },
              { label: '6', value: '6' },
              
          ]}
            InputAccessoryView={() => null}
            style={pickerSelect}
            
          />
     
        <RNPickerSelect
            placeholder={{}}
            onValueChange={(value) => console.log(value)}
            items={[
              { label: 'Select Table', value: 'Select Table' },
              { label: '2', value: '2', },
              { label: '4', value: '4' },
              { label: '6', value: '6' },
              
          ]}
            InputAccessoryView={() => null}
            style={pickerSelectStyles}
            
          /> */}
        <Text style = {stylee.text1} onPress={postdata}>
         Submit
      </Text>
        
    </View>
  );
};
 
export default Example;