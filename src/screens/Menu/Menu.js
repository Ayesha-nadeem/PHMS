import React, { useState,Component } from "react";
 import { Image,Text,TextInput,StyleSheet,Button, View,Modal,TouchableOpacity,FlatList,Alert} from "react-native";
import Products from './Products'
import SlideShow from '../../components/SlideShow'
 export default function Menu(){
  
      
    return(
        <View>
        <View style={styles.container}>
        <SlideShow/>
        </View>
        <View style={styles.textcontainer}>
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
        <Products/>
        </View>
    )
}
const styles = StyleSheet.create({  
    container:{
        height:270,
        width:'100%',
        paddingTop:10
    },
    Categorycontainer: { 
      flexDirection:"row",
      justifyContent:'space-around',
      backgroundColor:'black',
      height:60,
      alignItems:'center'

  },
  textcontainer:{
    marginBottom:25,

      justifyContent:'center',
      alignItems:'center',
  },
  textStyle:{
      fontSize:16,
      color:'white'
  }

  

});