import React from 'react'
import Header from './Header'
import { Image, StyleSheet,View,Text } from 'react-native'

const Tick = () => (

  <Image source={require('../assets/tick.png')} style={styles.image} />
 
)

const styles = StyleSheet.create({
  image: {
    width: "70%",
    height: "30%",
    //marginBottom: "80%",
    marginTop:"-50%"
  },
});

export default Tick
