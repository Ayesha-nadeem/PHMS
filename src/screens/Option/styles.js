import { StyleSheet } from 'react-native';
import { withTheme } from 'react-native-elements';
import { RecipeCard } from '../../AppStyles';

const styles = StyleSheet.create({
  container: RecipeCard.container,
  photo: RecipeCard.photo,
  title: RecipeCard.title,
  category: RecipeCard.category,
  
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    height: 200,
    width:260,
    marginTop:500,
    elevation: 2
  },
  openButton2: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    height: 200,
    width:260,
    marginTop:20,
    elevation: 2
  },
  textStyle: {
    color: "white",
    textShadowColor:"black",
    textShadowRadius:3,
    height: 60,
    fontWeight: "bold",
    fontSize:30,
    textAlign: "center"
  },
  photoStyle:
  {
    backgroundColor:"white",
    alignItems: "flex-end",
    borderWidth:2,
    borderRadius: 20,
    marginLeft:60,
    height: 120,
    width: 120
  }
});

export default styles;
