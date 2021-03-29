import { createAppContainer, StackRouter } from 'react-navigation';
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
import MenuImage from '../components/MenuImage/MenuImage';
import HomeScreen from '../screens/Home/HomeScreen';
import Example from '../screens/timepicker/time';
import Items from '../screens/Menu/items';
import Menu from '../screens/Menu/Menu';
import StartScreen from '../screens/StartScreen';
import LoginScreen from '../screens/LoginScreen';
import UpdateScreen from '../screens/UpdateScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import DrawerContainer from '../screens/DrawerContainer/DrawerContainer';
import ShoppingCartIcon from '../screens/shoppingCart/shoppingCart';
import CartScreen from '../screens/shoppingCart/CartScreen';
import MenuButton from '../components/MenuButton/MenuButton';
import OptionScreen from '../screens/Option/OptionScreen';
import RoomDetails from '../screens/RoomDetails/RoomDetails';
import RoomTypeList from '../screens/Room/RoomTypeList';
import ConfirmSchedule from '../screens/ConfirmSchedule/Confirmation';
import APIscreen from '../screens/APIScreenTest/APIscreen';
import Success from '../screens/SuccessAPI/Success'
import { TabBarIOS } from 'react-native';
import DisplayScheduledRoomsScreen from '../screens/DisplayScheduledRooms/DisplayScheduledRooms'

const MainNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    StartScreen:StartScreen,
    LoginScreen:LoginScreen,
    UpdateScreen:UpdateScreen,
    RegisterScreen:RegisterScreen,
    ForgotPasswordScreen:ForgotPasswordScreen,
    DisplayScheduledRooms:DisplayScheduledRoomsScreen,

    items:Items,
    Time:Example,
    Breakfast:Menu,
    Cart:CartScreen,
    Option: OptionScreen,
    RoomDet:RoomDetails,
    Room: RoomTypeList,
    Confirmation:ConfirmSchedule,
    APIscreen:APIscreen,
    Success:Success
  },
  // {
  //   defaultNavigationOptions: ({ navigation })=>({
  //       headerTitle: 'Shopping App',
  //       headerRight: (
  //           <ShoppingCartIcon />
  //       )
  //   })},
  {
    initialRouteName: 'StartScreen',
    // headerMode: 'float',
    defaultNavigationOptions: ({ navigation }) => ({
      headerTitle: 'PHMS',
      //headerRight: ()=><ShoppingCartIcon />,
     
            // <ShoppingCartIcon />,
            // headerRight: () =>
            // <MenuImage
            //   onPress={() => {
            //     navigation.openDrawer();
            //   }}
            // />,
      headerTitleStyle: {
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center',
        flex: 1,
      },
    })
    
  }
); 

/* const Drawer = createDrawerNavigator();

function DrawerStack() {
  return(
    <Drawer.Navigator
      drawerPosition='left'
      initialRouteName='Main'
      drawerStyle={{
        width: 250
      }}
      drawerContent={props=> DrawerContainer}
    >
      <Drawer.Screen name='Main' component={MainNavigator} />
    </Drawer.Navigator>
  )
} */

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

/* export default function AppContainer() {
  return(
    <NavigationContainer>
      <DrawerStack/>
    </NavigationContainer>
  )
} */
 
export default AppContainer = createAppContainer(DrawerStack);

console.disableYellowBox = true;

// class ShoppingCart extends Component {
//   render() {
//       return (
//           <AppStackNavigator />
//       );
//   }
// }
// export default ShoppingCart;

// const AppStackNavigator = createStackNavigator({
//   Home: HomeScreen,
//     Categories: CategoriesScreen,
//     Recipe: RecipeScreen,
//     RecipesList: RecipesListScreen,
//     Ingredient: IngredientScreen,
//     Search: SearchScreen,
//     IngredientsDetails: IngredientsDetailsScreen,
//     Time:Example,
//     Breakfast:Menu,
// }, {
//       navigationOptions: {
//           headerTitle: 'Shopping App',
//           headerRight: (
//               <ShoppingCartIcon />
//           )
//       }
//   })

// const styles = StyleSheet.create({
//   container: {
//       flex: 1,
//       alignItems: 'center',
//       justifyContent: 'center'
//   }
// });