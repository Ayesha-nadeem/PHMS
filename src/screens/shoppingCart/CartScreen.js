import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";
import Products from '../Menu/Products'
import { connect } from 'react-redux'

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
        const TimeSlot=[{"id":1,"start":"06:00:00","end":"06:30:00","tables":"3","hotel_id":7},
        {"id":4,"start":"07:00:00","end":"08:00:00","tables":"5","hotel_id":15},
        {"id":5,"start":"07:00:00","end":"08:00:00","tables":"5","hotel_id":15},
        {"id":6,"start":"07:00:00","end":"08:00:00","tables":"10","hotel_id":7},
        {"id":7,"start":"06:00:00","end":"07:00:00","tables":"10","hotel_id":13},
        {"id":8,"start":"10:00:00","end":"11:00:00","tables":"4","hotel_id":7},
        {"id":9,"start":"05:00:00","end":"05:30:00","tables":"6","hotel_id":7},
        {"id":10,"start":"10:00:00","end":"11:00:00","tables":"4","hotel_id":7},
        {"id":11,"start":"12:00:00","end":"01:00:00","tables":"10","hotel_id":7},
        {"id":12,"start":"08:00:00","end":"09:00:00","tables":"5","hotel_id":19}];
        this.setState({
            isLoading:true,
            timeslots:TimeSlot
        });
    const HRooms = [{"id":1,"room_no":"22","room_code":"zBSe68VM","hotel_id":7},
    {"id":11,"room_no":"4","room_code":"STtyd3MP","hotel_id":7},
    {"id":13,"room_no":"4","room_code":"AcUc0pKs","hotel_id":12},
    {"id":14,"room_no":"5","room_code":"3OBKdpeV","hotel_id":12},
    {"id":15,"room_no":"23","room_code":"BFFtX0Qa","hotel_id":7},
    {"id":16,"room_no":"5","room_code":"G3LZaWhC","hotel_id":12},
    {"id":17,"room_no":"45","room_code":"eZs9sWwk","hotel_id":12},
    {"id":18,"room_no":"17","room_code":"gQrh4Kkr","hotel_id":13},
    {"id":19,"room_no":"4","room_code":"B1khD0eR","hotel_id":13},
    {"id":20,"room_no":"90","room_code":"PVq0bBpj","hotel_id":14},
    {"id":21,"room_no":"91","room_code":"9Nx6t89O","hotel_id":14},
    {"id":22,"room_no":"21","room_code":"7G9Q1BAP","hotel_id":14},
    {"id":23,"room_no":"20","room_code":"gzX2hHdR","hotel_id":13},
    {"id":24,"room_no":"12","room_code":"m2YeAULQ","hotel_id":15},
    {"id":25,"room_no":"55","room_code":"12345","hotel_id":7},
    {"id":26,"room_no":"66","room_code":"JjEuS2rH","hotel_id":7},
    {"id":28,"room_no":"1","room_code":"12345","hotel_id":19},
    {"id":29,"room_no":"2","room_code":"12345","hotel_id":19},{"id":31,"room_no":"25","room_code":"q%hGGbD8","hotel_id":15}];
    this.setState({
      isLoading:true,
      Rooms:HRooms
      //Rooms:HRooms.filter(d => d.room_code==this.props.cartItems[0].room)
  });
}
    render() {
        // this.props.cartItems[0]['hotel']=this.props.hotel
        // console.log(this.props.cartItems,"sasdsdad",this.state.timeslots,"zoo",this.state.room)
        var items=this.props.cartItems
        var timeslots=this.state.timeslots
        var room=this.state.room
        return (
            <View style={styles.container}>
                {this.props.cartItems.length > 0 ?
                    <Products
                        onPress={this.props.removeItem}
                        products={this.props.cartItems} />
                    : <Text>No items in your cart</Text>
                }
                <Button onPress={() => this.props.navigation.navigate('Time',{items,timeslots,room})} title="Confirm Order" color="red" />
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