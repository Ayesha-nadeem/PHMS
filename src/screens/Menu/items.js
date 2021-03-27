
import React, { Component } from "react";
import {
    View,
    Text,
    Alert,
    StyleSheet,FlatList,TouchableHighlight,Image
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

//import { books } from '../../data/menudata';
import Products from './Products'
import { connect } from 'react-redux'
import styles from './styles';
class Items extends React.Component{
    constructor(){
        super();
        this.state={
            isLoading:true,
            dataSource:[],
            dataSourceForSchRooms:[],
            user:"",
            dataSourceForCategories:[],
           


        }
    }
    componentDidMount(){
        var username;
        const getData = async () => {
          try {
            const value = await AsyncStorage.getItem('user')
            if(value !== null) {
              // value previously stored
              username=value;
              username=JSON.parse(username);
              username=username.value;
              //console.log(username);
             // fetch('http://192.168.10.31:8001/schRooms/?format=json').then((response)=>response.json())
              fetch('http://192.168.10.7:8001/schRooms/?format=json').then((response)=>response.json())
              .then((responseJson)=>{
          
                 
                  this.setState({
                      isLoading:true,
                      dataSourceForSchRooms:responseJson,
                      user:username,
                      
                  })
                 
              })
        
           
            }
          } catch(e) {
              console.log("error in scheduale rooms", e);
          }
        } 

   getData();
        fetch('http://82.165.158.88/Item/?format=json').then((response)=>response.json())
        .then((responseJson)=>{
            this.setState({
                isLoading:true,
                dataSource:responseJson,
                category:null,
            })
        })

        fetch('http://82.165.158.88/Category/?format=json').then((response)=>response.json())
        .then((responseJson)=>{
            this.setState({
                isLoading:true,
                dataSourceForCategories:responseJson,
               
            })
        })
    }
   
    render() {


        return (
            <View>
                {/* <Products products={this.state.dataSource.filter(d => d.category_id===this.props.id)} onPress={this.props.addItemToCart} buttonName={"add to cart"}/> */}
                <Products products={this.state.dataSource.filter(d => d.category_id===this.props.id)} 
                onPress={(products)=>{ 
                    var itemsInCart=this.props.cartItems;
                    if(itemCategoryInCart=itemsInCart[0]!=null)
                    {
                        var itemCategoryInCart=itemsInCart[0].category_id;
                        // console.log(itemCategoryInCart,"is valid--------------------")
                        var myHotel= this.state.dataSourceForCategories.filter(d=>d.id===itemCategoryInCart && d.hotel_id===this.props.hotel );
                        // console.log(myHotel,"myhotel *******************************")

                        var myuser= this.state.dataSourceForSchRooms.filter(d=>d.username===this.state.user && d.hotel_id===this.props.hotel && d.checked_out==false);
                        if(myuser[0]!=null && myHotel[0]!=null)                  
                        {
                            console.log("isValidSchRoom--------------------")
                            {this.props.addItemToCart(products)}
                            
                        }
                        else if(myuser[0]!=null && myHotel[0]==null)
                        {
                            console.log("woopsyyyyyyyyyyyyyyyyyyyyyyyyyyyy")
                            Alert.alert("By adding this item we will remove previous hotel's items from the cart.");
                            {this.props.resetCart()}
                            {this.props.addItemToCart(products)}

                        }                     
                        else
                        {
                            Alert.alert("Can't add to cart because You haven't booked a room in this hotel.");
                        }

                    }
                    else{

                        var myuser= this.state.dataSourceForSchRooms.filter(d=>d.username===this.state.user && d.hotel_id===this.props.hotel && d.checked_out==false);
                        var isValid=false;
                        if(myuser[0]!=null)                  
                        {
                            isValid=true;
                        }
                            if(isValid)
                            {
                                // console.log(isValid,"is valid--------------------")
                                {this.props.addItemToCart(products)}
                            }
                            else{
                            Alert.alert("Can't add to cart because You haven't booked a room in this hotel.");
                            }
                    }   

                }
            }
            buttonName={"add to cart"}/>

            </View>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        cartItems: state
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addItemToCart: (product) => dispatch({ type: 'ADD_TO_CART', payload: product }),
        resetCart: () => dispatch({ type: 'RESET_CART'})

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Items);
