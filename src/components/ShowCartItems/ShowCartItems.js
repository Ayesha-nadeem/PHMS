import React, { useState} from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,Image,FlatList,TouchableHighlight
} from "react-native";
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons'
import {useDispatch} from 'react-redux'


const ShowCartItems=(props)=> {
  const dispatch= useDispatch();
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
    const addToCart=(currentId)=>{
      let i;
      for(i=0;i<props.products.length;i++)
      {
        if(props.products[i].id === currentId)
        {
          const product=props.products[i];
          dispatch({ type: 'ADD_TO_CART', payload: product })
          break;
        }
      }
    }
    const removeFromCart=(currentId)=>{
      let i;
      for(i=0;i<props.products.length;i++)
      {
        if(props.products[i].id === currentId)
        {
          const product=props.products[i];
          

          dispatch({ type: 'REMOVE_ONE_ITEM_FROM_CART', payload: product })
          break;
        }
      }
    }

  let i=0;
  let j=0;
  for(i=0;i<props.products.length ; i=i+1)
  {
    let count=0;
    let item=props.products[i].id;  
    if(!isExists(dummyArray,item))
    {       
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
    }
  }
 
    renderMenu = ({ item }) => (
      
          <View style={{flexDirection:'row' ,justifyContent:'space-around' , padding:5,alignItems:'center'}}>
          <View style={{justifyContent:'space-around' ,alignItems:'center',flex:4}}>
            <Text style={{fontWeight:'bold'}}>{item.name}</Text> 
        </View>
        <View style={{justifyContent:'space-around' , alignItems:'center',flex:4}}>
        <View style={{flexDirection:'row' ,justifyContent:'space-between' , padding:5,alignItems:'center'}}>
        <Icon name="ios-remove-circle" size={30} color="#900" onPress={()=>removeFromCart(item.id)}/>
        <Text >{item.count}</Text> 
        <Icon name="ios-add-circle" size={30} color="green" onPress={()=>addToCart(item.id)} />
        </View>
        </View>
            <View style={{justifyContent:'space-around' , alignItems:'center' , flex:2 }}>
            <Button title="Remove" color="red" onPress={() => props.onPress(item)}/>
          </View>
          </View>
      );
        return (
            <View> 
            <View style={{justifyContent:'space-around' , alignItems:'center', marginVertical:20 }}>
            <Text style={{fontWeight:'bold', fontSize:20}}>Cart Items</Text> 
            </View>        
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

