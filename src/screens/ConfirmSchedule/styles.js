import { StyleSheet } from 'react-native';
import { withTheme } from 'react-native-elements';
import { RecipeCard } from '../../AppStyles';
import  {theme} from '../../core/theme'

const styles=StyleSheet.create({

    head: {  height: 40,  backgroundColor: '#f1f8ff'  },
    wrapper: { flexDirection: 'row' },
    title: { flex: 1, backgroundColor: '#f6f8fa'},
    row: {  height: 50  },
    text: { textAlign: 'center' },
    text2:{textAlign:'center', fontWeight: 'bold'},
    roomType: {
     
        backgroundColor: "black",
        borderRadius: 0,
        paddingVertical: 10,
        paddingHorizontal: 0,
        marginHorizontal:"20%",
        marginTop:10,
        marginBottom:10,
        
        color: "white",
        textAlign:"center",
        borderWidth:1,
        borderColor:"blue",
      },
      bottom:{
         width:'60%'
          
      },
      image: {
     
        resizeMode: "repeat",
        width:'100%',
        backgroundColor:"white",
        height:'200%'
      },
      btn:{
        color:'black',
        //textAlign:'center',
        backgroundColor:'white',
        borderColor:'black',
        borderRadius:10,
        borderWidth:2,
        width:'60%',
        height:'70%',
      //  marginVertical:20,
        alignSelf:"center",
        
        
       
      },
    

});

export default styles;