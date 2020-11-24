
import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,FlatList,TouchableHighlight,Image
} from "react-native";

const Menu=()=>{

    return(
        <View style={styles.container}>
        <View>
        <Text>Pizza</Text>
        </View>
        <View>
        <Text>Broioches</Text>
        </View>
        <View>
        <Text>Menu Vegano</Text>
        </View>
        <View>
        <Text>spicy</Text>
        </View>
        </View>
    )
}
const styles = StyleSheet.create({  
    container: {  
      flexDirection:"row",
      justifyContent:'space-around',
      padding:10
  },
  

});
  
  
  export default Menu;

   
    