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
// import {createStackNavigator} from '@react-navigation/stack'
// import {NavigationContainer} from '@react-navigation/native'
// import {createDrawerNavigator} from '@react-navigation/drawer'
import HomeScreen from '../screens/Home/HomeScreen';
import Example from '../screens/timepicker/time';
import Items from '../screens/Menu/items';
import Menu from '../screens/Menu/Menu';
import CategoriesScreen from '../screens/Categories/CategoriesScreen';
import RecipeScreen from '../screens/Recipe/RecipeScreen';
import RecipesListScreen from '../screens/RecipesList/RecipesListScreen';
import DrawerContainer from '../screens/DrawerContainer/DrawerContainer';
import IngredientScreen from '../screens/Ingredient/IngredientScreen';
import SearchScreen from '../screens/Search/SearchScreen';
import IngredientsDetailsScreen from '../screens/IngredientsDetails/IngredientsDetailsScreen';
import ShoppingCartIcon from '../screens/shoppingCart/shoppingCart';
import CartScreen from '../screens/shoppingCart/CartScreen';
import MenuButton from '../components/MenuButton/MenuButton';
import OptionScreen from '../screens/Option/OptionScreen';
import RoomTypeList from '../screens/Room/RoomTypeList';
/* const Stack = createStackNavigator();

function MainNavigator() {
  return(
    <Stack.Navigator
      screenOptions={{
          headerTitleStyle: {
            fontWeight: 'bold',
            textAlign: 'center',
            alignSelf: 'center',
            flex: 1,
          }
      }}
    >
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Categories' component={CategoriesScreen}/>
      <Stack.Screen name='Recipe' component={RecipeScreen}/>
      <Stack.Screen name='RecipesList' component={RecipesListScreen} />
      <Stack.Screen name='Ingredient' component={IngredientScreen} />
      <Stack.Screen name='Search' component={SearchScreen} />
      <Stack.Screen name='IngredientsDetails' component={IngredientsDetailsScreen} />
    </Stack.Navigator>
  )
} */

const MainNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Categories: CategoriesScreen,
    Recipe: RecipeScreen,
    RecipesList: RecipesListScreen,
    Ingredient: IngredientScreen,
    Search: SearchScreen,
    IngredientsDetails: IngredientsDetailsScreen,
    items:Items,
    Time:Example,
    Breakfast:Menu,
    Cart:CartScreen,
    Option: OptionScreen,
    Room: RoomTypeList
  },
  // {
  //   defaultNavigationOptions: ({ navigation })=>({
  //       headerTitle: 'Shopping App',
  //       headerRight: (
  //           <ShoppingCartIcon />
  //       )
  //   })},
  {
    initialRouteName: 'Home',
    // headerMode: 'float',
    defaultNavigationOptions: ({ navigation }) => ({
      headerTitle: 'PHMS',
      headerRight: ()=><ShoppingCartIcon />,
      
            // <ShoppingCartIcon />,
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