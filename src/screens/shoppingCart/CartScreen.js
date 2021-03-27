import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    Alert,
    ImageBackground
} from "react-native";
import Products from '../Menu/Products'
import { connect } from 'react-redux'
import ShowCartItems from '../../components/ShowCartItems/ShowCartItems'


class CartScreen extends Component {
    constructor(){
        super();
        this.state={
            isLoading:true,
            dataSource:[],
            timeslots:[],
            hotel:null,
            room:null,
        }
    }
    componentDidMount(){
        fetch('http://82.165.158.88/TimeSlot/?format=json').then((response)=>response.json())
        .then((responseJson)=>{
            this.setState({
                isLoading:true,
                timeslots:responseJson
            })
        })
    }
    render() {
        var items=this.props.cartItems
        var timeslots=this.state.timeslots
        return (
            <View style={styles.container}>
                 <ImageBackground source={require('../../assets/background_dot.png')} resizeMode="repeat" style={styles.image_back}>
                {this.props.cartItems.length > 0 ?
                    <ShowCartItems
                        onPress={this.props.removeItem}
                        products={this.props.cartItems}
                        buttonName={"remove"} />
                    : <Text>No items in your cart</Text>
                }
                <View style={{ justifyContent:'center', alignItems:'center', margin:30}}>               
                <Button onPress={() => 
                {
                this.props.cartItems.length > 0 ?
                this.props.navigation.navigate('Time',{items,timeslots}):
                Alert.alert(
                "No items in your cart",
                 "Please Select at least one item from menu section",
                 [
  
                 { text: "OK" }
                 ],
                 { cancelable: false }
                 );
                }
                } title="Confirm Order"  />
            </View>
            </ImageBackground>
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
        removeItem: (product) => dispatch({ type: 'REMOVE_FROM_CART', payload: product })
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image_back: {
 
        resizeMode: "repeat",
        width:'100%',
        backgroundColor:"white",
        height:'200%'
      },
});