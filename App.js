import React, { Component} from "react";
import {
    View,
    Text,
    Image,FlatList,TouchableHighlight
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import styles from './src/screens/Menu/styles'
import Products from './src/screens/Menu/Products'
 export default function App(){
   return(
     <Products/>
   )
//   let products=[
//     {
//        cover_image:require('./assets/icons/cal.png'),
//        name:"hotel1"

//     },
//     {
//        cover_image:require('./assets/icons/cal.png'),
//        name:"hotel1"

//     },
//     {
//        cover_image:require('./assets/icons/cal.png'),
//        name:"hotel1"

//     },
//     {
//        cover_image:require('./assets/icons/cal.png'),
//        name:"hotel1"

//     },
//     {
//        cover_image:require('./assets/icons/cal.png'),
//        name:"hotel1"

//     },
//     {
//        cover_image:require('./assets/icons/cal.png'),
//        name:"hotel1"

//     },
//     {
//        cover_image:require('./assets/icons/cal.png'),
//        name:"hotel1"

//     },
//     {
//        cover_image:require('./assets/icons/cal.png'),
//        name:"hotel1"

//     }
// ];
// const renderMenu = ({ item }) => (
//    <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)'>
//      <View style={styles.container}>
//        <Image style={styles.photo} source={item.cover_image} />
//        <Text style={styles.title}>{item.name}</Text>           
//        <Icon name="ios-cart" size={30}onPress={() => console.log("icon pressed")}/>

//      </View>
//    </TouchableHighlight>
//  );
//   return(
//       <View>           
//       <FlatList
//       vertical
//       showsVerticalScrollIndicator={false}
//       numColumns={2}
//       data={products}
//       renderItem={renderMenu}
//       // keyExtractor={item => `${item.recipeId}`}
//       />
//   </View>

//   )
}


