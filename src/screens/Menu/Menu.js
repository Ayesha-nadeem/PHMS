// import React from 'react';
// import { FlatList, ScrollView, Text, View, TouchableHighlight, Image } from 'react-native';
// import styles from './styles';
// import { categories } from '../../data/menudata';
// import MenuImage from '../../components/MenuImage/MenuImage';
// import DrawerActions from 'react-navigation';
// import { getCategoryName } from '../../data/MockDataAPI';
// import ShoppingCartIcon from '../../screens/shoppingCart/shoppingCart';
// import Example from '../../screens/timepicker/time';
// import { connect } from 'react-redux'

// class Menu extends React.Component {
//   static navigationOptions = ({ navigation }) => ({
//     title: 'Menu',
//     // headerLeft: (
//     //   <MenuImage
//     //     onPress={() => {
//     //       navigation.openDrawer();
//     //     }}
//     //   />
//     // ),
//     // headerRight: (
//     //   <ShoppingCartIcon />
//     // )
//   });
//   constructor(props) {
//     super(props);
//   }

//   onPressRecipe = item => {
//     console.log(item);
//     this.props.navigation.navigate('Time', { item });
//   };

//   renderRecipes = ({ item }) => (
//     <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)'  onPress={() => this.props.addItemToCart}>
//       <View style={styles.container}>
//         <Image style={styles.photo} source={{ uri: item.photo_url }} />
//         <Text style={styles.title}>{item.name}</Text>
//         {/* <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text> */}
//       </View>
//     </TouchableHighlight>
//   );
//   render() {
//     return (
//       <View>
//         <FlatList
//         vertical
//         showsVerticalScrollIndicator={false}
//         numColumns={2}
//         data={categories}
//         renderItem={this.renderRecipes}
//         keyExtractor={item => `${item.recipeId}`}
//         />
//       </View>
//     );
//   }
// }
// const mapDispatchToProps = (dispatch) => {
//   return {
//       addItemToCart: (product) => dispatch({ type: 'ADD_TO_CART', payload: product })
//   }
// }
// export default connect(null, mapDispatchToProps)(Menu);
// // export default Menu;
import React, { Component } from "react";
import {
    View,
    Text,
    Alert,
    StyleSheet,FlatList,TouchableHighlight,Image
} from "react-native";

//import { books } from '../../data/menudata';
import Products from './Products'
import { connect } from 'react-redux'
import Items from './items';
import styles from './styles';
class Menu extends React.Component{
    
    constructor(){
        super();
        this.state={
            isLoading:true,
            dataSource:[],
            hotel:null,
            room:null,
            x:1,
            flag:true,
            hotelCategories:null,
        }
    }
    componentDidMount(){
        fetch('http://82.165.158.88/Category/?format=json').then((response)=>response.json())
        .then((responseJson)=>{
            this.setState({
                isLoading:true,
                dataSource:responseJson,
               
            })

            this.setState({
                hotelCategories:this.state.dataSource.filter(d => d.hotel_id===this.props.navigation.getParam('hotel')),
            })
            //Alert.alert("Modal has been closed."+this.state.hotelCategories+"");

            this.setState({
                x:this.state.hotelCategories[0]['id'],
            })

           console.log(this.state.hotelCategories)
        })

    }
    
    renderCategory = ({ item }) => (
        <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)'  onPress={() => {
        
            var category = item;
            var hotel=this.props.navigation.getParam('item');
           // var room=this.props.navigation.getParam('room');
          // Alert.alert("Modal has been closed."+item.id+"");
             this.setState({x:item.id});
             this.setState({flag:false});

            //this.props.navigation.navigate('items',{category,hotel,room});
            this.setState({modalVisible: false});
          }}>
          
          <View style={styles.categoriesItemContainer}>
            <Text style={styles.categoriesName}>{item.name}</Text>

          </View>
        </TouchableHighlight>
      );
   
    render() {


       // <Image style={styles.categoriesPhoto} source={{ uri: item.photo_url }} />
// if(this.state.flag==true)
// {
// this.setState({x:hotelCategories[0]['id']});
// }
//room={this.props.navigation.getParam('room')}
let s=null
s=(<Items id={this.state.x} hotel={this.props.navigation.getParam('hotel')} />)



        // fetch('http://192.168.100.9:8000/Hotels/?format=json')
        // .then(response => response.json())
        // .then(json => console.log(json))
        // console.log(this.props.navigation.getParam('item'));
        //             console.log(this.state.dataSource.filter(d => d.hotel_id===this.props.navigation.getParam('item')))
        // onPress={this.props.addItemToCart}
        return (
            <View>
                
            <View style={styles.FlatlistStyle}>
                <FlatList
                horizontal
                // vertical
                // showsVerticalScrollIndicator={false}
                // numColumns={1}
                data={this.state.dataSource.filter(d => d.hotel_id===this.props.navigation.getParam('hotel'))}
                renderItem={this.renderCategory}
                keyExtractor={(item) => item.id}
                />
               
                {/* <Products products={this.state.dataSource.filter(d => d.hotel_id===this.props.navigation.getParam('item'))}  /> */}
            </View>
        <View>{s}</View>
            </View>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItemToCart: (product) => dispatch({ type: 'ADD_TO_CART', payload: product })
    }
}
export default connect(null, mapDispatchToProps)(Menu);
// export default Menu;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     }
// });