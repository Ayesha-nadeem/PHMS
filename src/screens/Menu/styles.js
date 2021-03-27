import { StyleSheet } from 'react-native';
import { RecipeCard } from '../../AppStyles';
const styles = StyleSheet.create({
  container: RecipeCard.container,
  photo: RecipeCard.photo,
  title: RecipeCard.title,
  category: RecipeCard.category,
  TextInputStyle: {
    marginRight:20,
    marginLeft:20,
    marginBottom:20,
    paddingLeft:20,
    paddingRight:20,
    textAlign: 'center',  
    height: 40,  
    borderRadius: 10,  
    borderWidth: 2,  
    borderColor: '#FFA701',    
  } ,
  ProductButton:{
    flexDirection:'row',
    backgroundColor:'#FFa000',
    borderColor: '#fff',
    height:30,
    marginBottom:8,
    width:160,
    borderRadius: 10, 
        
  },
  Productbuttontitle: {
  
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffffff',
    marginTop: 3,
    marginStart:5,
  },
  ProductbuttonIcon: {
    
    color: '#ffffff',
    marginTop: 3,
    marginStart:25,

  },
  FlatlistStyle:
  {
    backgroundColor:'#000000',
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  categoriesItemContainer: {
   
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    borderColor: '#000000',
    borderWidth: 0.5,
    borderRadius: 20,
    backgroundColor:'#000000'
  },
  categoriesPhoto: {
    width: '100%',
    height: 155,
    borderRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    shadowColor: 'blue',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 3
  },
  categoriesName: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffffff',
    margin: 5
  },
  categoriesInfo: {
    marginTop: 3,
    marginBottom: 5
  },
  image_back: {
 
    resizeMode: "repeat",
    width:'100%',
    backgroundColor:"white",
    height:'200%'
  },
});

export default styles;
