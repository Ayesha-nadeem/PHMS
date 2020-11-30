import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";
import Products from '../Menu/Products'
import { connect } from 'react-redux'
import ShowCartItems from '../../components/ShowCartItems/ShowCartItems'


class CartScreen extends Component {
    // var i;
    //   for (i = 0; i < this.props.products.length; i++) {
    //     this.props.products[i]['hotel']=this.props.hotel;
    //     this.props.products[i]['room']=this.props.room;
    //   }
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
        // fetch('http://82.165.158.88/Room/?format=json').then((response)=>response.json())
        // .then((responseJson)=>{
        //     this.setState({
        //         isLoading:true,
        //         room:responseJson.filter(d => d.room_code===this.props.cartItems[0].room)
        //     })
        // })
        fetch('http://82.165.158.88/TimeSlot/?format=json').then((response)=>response.json())
        .then((responseJson)=>{
            this.setState({
                isLoading:true,
                timeslots:responseJson
            })
        })
    }
    render() {
        // this.props.cartItems[0]['hotel']=this.props.hotel
        // console.log(this.props.cartItems,"sasdsdad",this.state.timeslots,"zoo",this.state.room)
        var items=this.props.cartItems
        var timeslots=this.state.timeslots
        //var room=this.state.room
        return (
            <View style={styles.container}>
                {this.props.cartItems.length > 0 ?
                    <ShowCartItems
                        onPress={this.props.removeItem}
                        products={this.props.cartItems}
                        buttonName={"remove"} />
                    : <Text>No items in your cart</Text>
                }
                <View style={{ justifyContent:'center', alignItems:'center', margin:30}}>               
                <Button onPress={() => this.props.navigation.navigate('Time',{items,timeslots})} title="Confirm Order"  />
            </View>
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
        // alignItems: 'center',
        // justifyContent: 'center'
    }
});