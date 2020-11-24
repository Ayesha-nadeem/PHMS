import React, { useState,Component } from "react";
 import { Image,Text,TextInput,StyleSheet,Button, View,Modal,TouchableOpacity,FlatList,Alert} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import Products from './src/screens/Menu/Products'
import Time from './src/screens/timepicker/time'

import SlideShow from './src/components/SlideShow';


 export default function App(){
  
      
    return(
        <View>
        <Text>hello</Text>
        {/* <View style={styles.textcontainer}>
        <Text style={{fontSize:18, fontWeight:'bold'}}>Categories</Text>
        </View>
        <View style={styles.Categorycontainer}>
        <TouchableOpacity onPress={()=>
 console.log("hello")        }>
        <Text style={styles.textStyle}>Pizza</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>   
        {
            console.log("hello")        }     
}>
        <Text style={styles.textStyle}>Broioches</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> console.log("hello")
}>
        <Text style={styles.textStyle}>Menu Vegano</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>   console.log("hello")
}>
        <Text style={styles.textStyle}>spicy</Text>
        </TouchableOpacity>
        </View>
        <Products/> */}
        </View>
    )
}
const styles = StyleSheet.create({  
    Categorycontainer: { 
      marginTop:45,   
      flexDirection:"row",
      justifyContent:'space-around',
      padding:10,
      backgroundColor:'black',
      height:60,
      alignItems:'center'

  },
  textcontainer:{
      justifyContent:'center',
      alignItems:'center',
      marginTop:100,
  },
  textStyle:{
      fontSize:16,
      color:'white'
  }

  

});

  















//     const [modalVisible, setModalVisible] = useState(false);
//     const [timestart, settimestart] = useState("Select You Time Slot");
//     const [timeend, settimeend] = useState("");
//     var TimeSlots=[
//       {
//         key:"0",
//         start:"06:00:00",
//         end: "07:00:00"
//       },
//       {
//         key:"1",
//         start:"07:00:00",
//         end: "08:00:00"
//       },{
//         key:"2",
//         start:"08:00:00",
//         end: "09:00:00"
//       },{
//         key:"3",
//         start:"09:00:00",
//         end: "10:00:00"
//       },{
//         key:"4",
//         start:"10:00:00",
//         end: "11:00:00"
//       },
//     ];
    
//     const styles = StyleSheet.create({  
//       container: {  
//         flex: 1,  
//         justifyContent: 'center',  
//     },  
//     centeredView: {
//       flex: 1,
//       justifyContent: "center",
//       alignItems: "center",
//       marginTop: 22
//     },
//     modalView: {
//       margin: 20,
//       backgroundColor: "white",
//       borderRadius: 20,
//       padding: 35,
//       alignItems: "center",
//       shadowColor: "#000",
//       shadowOffset: {
//         width: 0,
//         height: 2
//       },
//       shadowOpacity: 0.25,
//       shadowRadius: 3.84,
//       elevation: 5
//     },
//     openButton: {
//       backgroundColor: "#F194FF",
//       borderRadius: 20,
//       padding: 10,
//       elevation: 2
//     },
//     textStyle: {
//       color: "white",
//       fontWeight: "bold",
//       textAlign: "center"
//     },
//     modalText: {
//       marginBottom: 15,
//       textAlign: "center"
//     },
//       headerText: {  
//         fontSize: 20,  
//         textAlign: "center",  
//         margin: 10,  
//         fontWeight: "bold"  
//     },  
//     TextInputStyle: {
//       marginRight:40,
//       marginLeft:40,
//       textAlign: 'center',  
//       height: 40,  
//       borderRadius: 10,  
//       borderWidth: 2,  
//       borderColor: '#FFA701',    
//     }  
//     });
//     const stylee = StyleSheet.create({
//       container: {
//         marginTop:100,
//         flex: 1,
//         backgroundColor: '#FFFFFF',
//         justifyContent: 'center',
//       },
//       submit:{
//         marginRight:40,
//         marginLeft:40,
//         marginTop:10,
//         paddingTop:10,
//         paddingBottom:10,
//         backgroundColor:'#68a0cf',
//         borderRadius:10,
//         borderWidth: 1,
//         borderColor: '#fff',
        
//       },
//       text: {
//         marginRight:40,
//         marginBottom:30,
//         marginLeft:40,
//         marginTop:10,
//         paddingTop:15,
//         paddingBottom:15,
//         backgroundColor:'#FFA701',
//         borderRadius:30,
//         borderWidth: 1,
//         borderColor: '#fff',
//         color:"#fff",
//         textAlign:"center",
//      },
//      text1: {
//       marginRight:40,
//       marginBottom:30,
//       marginLeft:40,
//       marginTop:10,
//       paddingTop:15,
//       paddingBottom:15,
//       backgroundColor:'red',
//       borderRadius:30,
//       borderWidth: 1,
//       borderColor: '#fff',
//       color:"#fff",
//       textAlign:"center",
//    },
  
  
//     });
//     const timeslot = () => {
//       setModalVisible(true);
//     };
//    const postdata = () => {   
//      console.log("submit")
//         Alert.alert(
//           "Order",
//           "You order has been placed for time slot"+ (timestart)+"------"+(timeend),
//           [
//             { text: "OK", onPress: () =>console.log("order placed") }
//           ],
//           { cancelable: false }
//         );
//     };
//     console.log(timestart)
//     return (
//       <View style={stylee.container}>
//         <Image
//           style={{ width: 450, height: 350,marginTop:-190,marginBottom:30, }}
//           source={require('./assets/icons/cal.png')}
//         />
//         <Text style = {stylee.text} onPress={timeslot}>
//         {timestart}--{timeend}
//         </Text>
//         <Modal
//           animationType="slide"
//           transparent={true}
//           visible={modalVisible}
//           onRequestClose={() => {
//             Alert.alert("Modal has been closed.");
//           }}
//         >
//           <View style={styles.centeredView}>
//             <View style={styles.modalView}>
//               <Text style={styles.modalText}>Select Your Time Slot!</Text>
//               <FlatList
//                 vertical
//                 showsVerticalScrollIndicator={false}
//                 numColumns={1}
//                 keyExtractor={item=>item.key}
//                 data={TimeSlots}
//                 renderItem={({ item }) =>  
//                 <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => {
//                   settimestart(item.start);
//                   settimeend(item.end);
//                   console.log(timestart)
//                   setModalVisible(!modalVisible);
                  
                  
//                 }} >
//                 <View>
//                 <Text style = {{marginRight:30,
//                 marginBottom:10,
//                 marginLeft:40,
//                 marginTop:10,
//                 paddingTop:15,
//                 paddingBottom:15,
//                 paddingRight:25,
//                 paddingLeft:15,
//                 backgroundColor:'#FFA701',
//                 borderRadius:10,
//                 borderWidth: 1,
//                 borderColor: '#fff',
//                 color:"#fff",
//                 }}>  {item.start}----{item.end}    </Text>
//                 </View>
//               </TouchableHighlight>}
//               />
  
//               <TouchableHighlight
//                 style={{ ...styles.openButton, backgroundColor: "#2196F3" }}onPress={() => {
//                   setModalVisible(!modalVisible);
//                 }}
                
//               >
//                 <Text style={styles.textStyle}>Go Back</Text>
//               </TouchableHighlight>
//             </View>
//           </View>
//         </Modal>
//                 <Text style = {stylee.text1} onPress={postdata}>
//            Submit
//         </Text>
          
//       </View>
//     );
//  }
