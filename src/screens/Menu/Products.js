import React, { Component,ActivityIndicator} from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Button,Image,FlatList,TouchableHighlight
} from "react-native";
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons'

class Products extends Component {
    

    // renderProducts = (products) => {
    //     console.log(products)
    //     return products.map((item, index) => {
    //         return (
    //             <View key={index} style={{ padding: 20 }}>
    //                 {/* <Image style={styles.photo} source={{ uri: item.photo_url }} />
    //                 <Text style={styles.title}>{item.name}</Text> */}
    //                 {/* <Button onPress={() => this.props.onPress(item)} title={item.name + " - " + item.price} /> */}
    //                 {/* <Image  source={{ uri: item.photo_url }} />
    //                 <Text >{item.name}</Text> */}
    //                 {/* <FlatList
    //                 vertical
    //                 showsVerticalScrollIndicator={false}
    //                 numColumns={2}
    //                 data={this.props.products}
    //                 renderItem={this.renderRecipes}
    //                 keyExtractor={item => `${item.recipeId}`}
    //                 /> */}
    //             </View>
    //         )
    //     })
    // }
    //            <Icon name="ios-cart" size={30}onPress={() => this.props.onPress(item)}/>

    renderMenu = ({ item }) => (
        <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)'>
          <View style={styles.container}>
            <Image style={styles.photo} source={{ uri: item.cover_image }} />

            <Text style={styles.title}>{item.name}</Text>
            {/* <ion-icon name="add-circle-outline"></ion-icon> */}
           
            <TouchableOpacity  style={styles.ProductButton} onPress={() => this.props.onPress(item)}>
              <Text  style={styles.Productbuttontitle}>add to cart</Text></TouchableOpacity>
            {/* <Text style={styles.categoriesName}>{this.props.hotel}</Text> */}
            {/* <Text style={styles.categoriesName}>{this.props.room}</Text> */}
            {/* <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text> */}
          </View>
        </TouchableHighlight>
      );


    render() {
      // var i;
      // for (i = 0; i < this.props.products.length; i++) {
      //   this.props.products[i]['room']=this.props.room;
      // }
      // console.log(this.props.products,"Products")
        return (
          
            <View>
            
            <FlatList
            vertical
            showsVerticalScrollIndicator={false}
            numColumns={2}
            data={this.props.products}
            renderItem={this.renderMenu}
            // keyExtractor={item => `${item.recipeId}`}
            />
        </View>
            // <View style={styles.container}>
    
            //     {/* <Button onPress={() => this.props.onPress(this.props.products)} title={this.props.products.name + " - " + this.props.products.price} /> */}
            //     {/* {this.renderProducts(this.props.products)} */}
            // </View>
        );
    }
}
export default Products;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center'
//     }
// });