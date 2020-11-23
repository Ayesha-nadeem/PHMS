import React, { Component} from "react";
import {
    View,
    Text,
    Image,FlatList,TouchableHighlight
} from "react-native";
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons'

class Products extends Component {
    
    renderMenu = ({ item }) => (
        <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)'>
          <View style={styles.container}>
            <Image style={styles.photo} source={item.cover_image } />
            <Text style={styles.title}>{item.name}</Text>           
            <Icon name="ios-cart" size={30}onPress={() => console.log("icon pressed")}/>

          </View>
        </TouchableHighlight>
      );
    render() {
        const products=[
            {
                key:"1",
               cover_image:require('../../../assets/icons/cal.png'),
               name:"Item1"
   
            },
            {
                key:"2",
               cover_image:require('../../../assets/icons/cal.png'),
               name:"Item1"
   
            },
            {
                key:"3",
               cover_image:require('../../../assets/icons/cal.png'),
               name:"Item1"
   
            },
            {
                key:"4",
               cover_image:require('../../../assets/icons/cal.png'),
               name:"Item1"
   
            },
            {
                key:"5",
               cover_image:require('../../../assets/icons/cal.png'),
               name:"Item1"
   
            },
            {
                key:"6",
               cover_image:require('../../../assets/icons/cal.png'),
               name:"Item1"
   
            },
            {
                key:"7",
               cover_image:require('../../../assets/icons/cal.png'),
               name:"Item1"
   
            },
            {
                key:"8",
               cover_image:require('../../../assets/icons/cal.png'),
               name:"Item1"
   
            }
        ];
        return (         
            <View>           
            <FlatList
            vertical
            showsVerticalScrollIndicator={false}
            numColumns={2}
            data={products}
            renderItem={this.renderMenu}
            keyExtractor={item => item.key}
            />
        </View>
        );
    }
}
export default Products;
