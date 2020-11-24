import React, { Component} from "react";
import {
    View,
    Text,
    Image,FlatList,TouchableHighlight
} from "react-native";
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons'

function Products(props) {
    
    const renderMenu = ({ item }) => (
        <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)'>
          <View style={styles.container}>
            <Image style={styles.photo} source={item.cover_image } />
            <Text style={styles.title}>{item.name}</Text>           
            <Icon name="ios-cart" size={30}onPress={() => console.log("icon pressed")}/>

          </View>
        </TouchableHighlight>
      );
        const products=[
            {
                key:"1",
               cover_image:require('../../../assets/f1.jpg'),
               name:"Sandwich"
   
            },
            {
                key:"2",
                cover_image:require('../../../assets/f2.jpg'),
                name:"Steak"
   
            },
            {
                key:"3",
                cover_image:require('../../../assets/f3.jpg'),
                name:"Burgers"
   
            },
            {
                key:"4",
                cover_image:require('../../../assets/f4.jpg'),
                name:"Pizza"
   
            },
            {
                key:"5",
                cover_image:require('../../../assets/f5.jpeg'),
                name:"Salad"
   
            },
            {
                key:"6",
                cover_image:require('../../../assets/f6.jpg'),
                name:"Pasta"
   
            },
            {
                key:"7",
                cover_image:require('../../../assets/f1.jpg'),
                name:"Sandwih"
   
            },
            {
                key:"8",
                cover_image:require('../../../assets/f2.jpg'),
                name:"Steak"
   
            }
        ];
        return (         
            <View style={{paddingTop:10}}>           
            <FlatList
            vertical
            showsVerticalScrollIndicator={false}
            numColumns={2}
            data={products}
            renderItem={renderMenu}
            keyExtractor={item => item.key}
            />
        </View>
        );
    
}
export default Products;
