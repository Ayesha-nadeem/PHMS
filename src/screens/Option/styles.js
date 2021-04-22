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
    height: 300,
    width:260,
    marginTop:500,
    elevation: 2,
    borderWidth:2,
  },
  openButton2: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    height: 200,
    width:260,
    marginTop:50,
    elevation: 2,
    borderWidth:2,
  },
  textStyle: {
    color: "black",
    textShadowColor:"black",
    textShadowRadius:3,
    marginTop:50,
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
    height: 270,
    width: 170
  },
  image_back: {
 
    resizeMode: "repeat",
    width:'100%',
    backgroundColor:"white",
    height:'100%'
  },
});

export default styles;
