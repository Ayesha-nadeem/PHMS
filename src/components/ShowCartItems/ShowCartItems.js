import React, { useState} from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,Image,FlatList,TouchableHighlight
} from "react-native";
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons'

const ShowCartItems=(props)=> {
  var dummyArray=[];
  const isExists=(dummyArray,currentId)=>
    {
      var i=0
      for( i=0;i<dummyArray.length;i++)
      {
        if(dummyArray[i].id == currentId){
          return true
        }
      }
      return false
    }
  // console.log("dummyid = "+ updateItemCount[0].id + " dummycount = "+updateItemCount[0].count )
  let i=0;
  let j=0;
  for(i=0;i<props.products.length ; i=i+1)
  {
    let count=0;
    let item=props.products[i].id;  
    if(!isExists(dummyArray,item))
    {       
        console.log("item = "+ item)
        for(j=0;j<props.products.length;j++)
      {
        if(item==props.products[j].id)
        {
          count=count+1
        }
      }
      dummyArray=[...dummyArray,{
        name:props.products[i].name,
        id:item,
        count:count
      }]
    //  console.log("dummyid = "+ dummyArray[i].id + " dummycount = "+dummyArray[i].count )
    }
  }
 
  //console.log("dummyArray = "+dummyArray)

    renderMenu = ({ item }) => (
      
          <View style={{flexDirection:'row' ,justifyContent:'space-around' , padding:5,alignItems:'center'}}>
          <View style={{justifyContent:'space-around' ,alignItems:'center',flex:2}}>
            <Text style={{fontWeight:'bold'}}>{item.name}</Text> 
        </View>
        <View style={{justifyContent:'space-around' , alignItems:'center',flex:1}}>
            <Text >{item.count}</Text> 
            </View>
            <View style={{justifyContent:'space-around' , alignItems:'center' , flex:2 }}>
            <Button title="Remove" color="red" onPress={() => props.onPress(item)}/>
          </View>
          </View>
      );
        return (
            <View>          
            <FlatList
            vertical
            showsVerticalScrollIndicator={false}
            numColumns={1}
            data={dummyArray}
            renderItem={renderMenu}
            />
        </View>
           
        );
    
}
export default ShowCartItems;

