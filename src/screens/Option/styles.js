import { StyleSheet } from 'react-native';
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
    height: 140,
    width:260,
    marginTop:400,
    elevation: 2
  },
  openButton2: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    height: 140,
    width:260,
    marginTop:20,
    elevation: 2
  },
  textStyle: {
    color: "white",
    textShadowColor:"black",
    textShadowRadius:3,
    fontWeight: "bold",
    fontSize:35,
    textAlign: "center"
  }
});

export default styles;
