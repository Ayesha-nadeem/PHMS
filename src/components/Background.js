import React from 'react'
import { ImageBackground, StyleSheet, View } from 'react-native'
import { theme } from '../core/theme'

const Background = ({ children }) => (
  <ImageBackground
    source={require('../assets/background_dot.png')}
    resizeMode="repeat"
    style={styles.background}
  >
    
    <View style={styles.container} behavior="padding">
      {children}
    </View>
  </ImageBackground>
)
//previously the above view was keyboard avoiding view
const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    maxHeight:'140%',
    backgroundColor: theme.colors.surface,
  },
  container: {
    flex: 1,
    padding: '5%',
    flexGrow:1,
    width: '100%',
    maxHeight:'140%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Background
