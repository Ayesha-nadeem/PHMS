import { StyleSheet } from 'react-native';
import { RecipeCard } from '../../AppStyles';
const styles = StyleSheet.create({
  
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
  container:{
    justifyContent:'center',
    alignItems:'center',
    marginLeft:'10%',
    marginRight:'10%',
    marginTop:20
  },
  ProductButton:{
    flexDirection:'row',
    backgroundColor:'#FFa000',
    borderColor: '#fff',
    height:30,
    marginBottom:8,
    width:200,
    borderRadius: 10, 
        
  },
  Productbuttontitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 2,
    textAlign:'center',
    justifyContent:'flex-end',
    padding: 2,
    borderWidth:1,
    
  },
  ProductbuttonIcon: {
    
    color: '#ffffff',
    marginTop: 5,
    marginStart:25,


  },
  boxes:{
    width:'80%',
    backgroundColor: "cornsilk",
    borderWidth: 1,
    
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
    color: "black",
    fontWeight: "bold",
    fontSize:20,
    justifyContent:'center',
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
  }
});

export default styles;
