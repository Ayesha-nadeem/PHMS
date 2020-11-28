import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppContainer from './src/navigations/AppNavigation';
import { Provider } from 'react-redux';
import store from './store';
import { MenuProvider } from 'react-native-popup-menu';

export default function App() {
  return (
    <Provider store={store}>

       <AppContainer />
    
      
    </Provider>
  

  );
}
