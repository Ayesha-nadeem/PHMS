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

import { books } from '../../data/menudata';
import Products from './Products'
import { connect } from 'react-redux'
import styles from './styles';
class Items extends React.Component{
    constructor(){
        super();
        this.state={
            isLoading:true,
            dataSource:[]
        }
    }
    componentDidMount(){
        fetch('http://82.165.158.88/Item/?format=json').then((response)=>response.json())
        .then((responseJson)=>{
            this.setState({
                isLoading:true,
                dataSource:responseJson,
                category:null,
            })
        })
    }
 
   
    render() {
        //<Products products={this.state.dataSource.filter(d => d.category_id===this.props.navigation.getParam('category').id)} onPress={this.props.addItemToCart} room={this.props.navigation.getParam('room')}/>

        //Alert.alert("Modalitem screen has been closed."+this.props.id+"");

        // fetch('http://192.168.100.9:8000/Hotels/?format=json')
        // .then(response => response.json())
        // .then(json => console.log(json))
        // console.log(this.props.navigation.getParam('item'));
        //             console.log(this.state.dataSource.filter(d => d.hotel_id===this.props.navigation.getParam('item')))
        // onPress={this.props.addItemToCart}
        //console.log(this.state.dataSource.filter(d => d.category_id===this.props.navigation.getParam('category').id))
       // console.log(this.props.navigation.getParam('room'))
        var i;
        for (i = 0; i < this.state.dataSource.length; i++) {
          this.state.dataSource[i]['room']=this.props.room;
        }
        console.log(this.state.dataSource,"Products")
        return (
            <View>
                <Products products={this.state.dataSource.filter(d => d.category_id===this.props.id)} onPress={this.props.addItemToCart} room={this.props.room}/>

            </View>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItemToCart: (product) => dispatch({ type: 'ADD_TO_CART', payload: product }),
        // addItemToCart: (product) => dispatch({ type: 'ADD_TO_CART', payload: product })

    }
}
export default connect(null, mapDispatchToProps)(Items);
// export default Menu;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     }
// });