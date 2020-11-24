import { createAppContainer } from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer'
import {createStackNavigator} from 'react-navigation-stack'
import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Button
} from "react-native";
import HomeScreen from '../screens/Home/HomeScreen';
import Example from '../screens/timepicker/time';
import Items from '../screens/Menu/items';
import Menu from '../screens/Menu/Menu';
import DrawerContainer from '../screens/DrawerContainer/DrawerContainer';
import SearchScreen from '../screens/Search/SearchScreen';
import ShoppingCartIcon from '../screens/shoppingCart/shoppingCart';
import CartScreen from '../screens/shoppingCart/CartScreen';
import MenuButton from '../components/MenuButton/MenuButton';



const MainNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Search: SearchScreen,
    items:Items,
    Time:Example,
    menu:Menu,
    Cart:CartScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: ({ navigation }) => ({
      headerTitle: 'phms',
      headerRight: ()=><ShoppingCartIcon />,
      headerTitleStyle: {
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center',
        flex: 1,
      },
    })
  }
); 
const DrawerStack = createDrawerNavigator(
  {
    Main: MainNavigator
  },
  {
    drawerPosition: 'left',
    initialRouteName: 'Main',
    drawerWidth: 250,
    contentComponent: DrawerContainer
  }
);
export default AppContainer = createAppContainer(DrawerStack);

console.disableYellowBox = true;
