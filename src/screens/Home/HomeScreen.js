import React, { Component, useState }  from 'react';
import {TextInput, Alert,Modal,FlatList, ScrollView, Text, View, TouchableHighlight, Image } from 'react-native';
import styles from './styles';
import { recipes } from '../../data/dataArrays';
import MenuImage from '../../components/MenuImage/MenuImage';
import DrawerActions from 'react-navigation';
import { getCategoryName } from '../../data/MockDataAPI';
import ShoppingCartIcon from '../../screens/shoppingCart/shoppingCart';
export default class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    
   
    title: 'Home',
    
   headerLeft: () =>
      <MenuImage
        onPress={() => {

          navigation.openDrawer();
        }}
      />,
    // headerRight: (
    //   <ShoppingCartIcon/>
    // )
    
  });

  constructor(props) {
    super(props);
    this.state={
      modalVisible: false,
      hotelname:null,
      hotelid:null,
      isLoading:true,
      dataSource:[],
      Rooms:[],
      input:null,
  }
  }
 /*  onPressRecipe = item => {
    this.props.navigation.navigate('Breakfast', { });
  };*/
  componentDidMount(){
    const Hotels = [{key:7,"name":'Pearl Continental',"uname":"pear1122", "password":'abcd@123',"photo_url":"http://82.165.158.88/media/pc.jpg"},
    {key:12,"name":"Admiral Park","uname":"admiral1122","password":"abcd@123","photo_url":"http://82.165.158.88/media/IMG_6195-1030x687.jpg"},
    {key:13,"name":"Maryo Technologies","uname":"maryo1122","password":"abcd@123","photo_url":"http://82.165.158.88/media/annie-spratt-hWJsOnaWTqs-unsplash.jpg"},
    {key:14,"name":"Hotel One","uname":"hotel1122","password":"abcd@123","photo_url":"http://82.165.158.88/media/tic1.png"},
    {key:15,"name":"danish","uname":"danish","password":"abcd@123","photo_url":"http://82.165.158.88/media/pexels-photo-1036856.jpeg"},
    {key:16,"name":"Leonardo Vivarelli","uname":"lvivarelli","password":"abcd@123","photo_url":"http://82.165.158.88/media/coffee-drink-cafe-drinking-6661.jpg"},
    {key:18,"name":"testHotel","uname":"testHotel1","password":"testHotel1","photo_url":null},
    {key:19,"name":"Sheraton","uname":"sheraton","password":"abcd@123","photo_url":null},
    {key:20,"name":"Accademia","uname":"accademia","password":"abcd@123","photo_url":null}];
    this.setState({
      isLoading:true,
      dataSource:Hotels
  });
  const HRooms = [{"id":1,"room_no":"22","room_code":"zBSe68VM","hotel_id":7},
  {"id":11,"room_no":"4","room_code":"STtyd3MP","hotel_id":7},
  {"id":13,"room_no":"4","room_code":"AcUc0pKs","hotel_id":12},
  {"id":14,"room_no":"5","room_code":"3OBKdpeV","hotel_id":12},
  {"id":15,"room_no":"23","room_code":"BFFtX0Qa","hotel_id":7},
  {"id":16,"room_no":"5","room_code":"G3LZaWhC","hotel_id":12},
  {"id":17,"room_no":"45","room_code":"eZs9sWwk","hotel_id":12},
  {"id":18,"room_no":"17","room_code":"gQrh4Kkr","hotel_id":13},
  {"id":19,"room_no":"4","room_code":"B1khD0eR","hotel_id":13},
  {"id":20,"room_no":"90","room_code":"PVq0bBpj","hotel_id":14},
  {"id":21,"room_no":"91","room_code":"9Nx6t89O","hotel_id":14},
  {"id":22,"room_no":"21","room_code":"7G9Q1BAP","hotel_id":14},
  {"id":23,"room_no":"20","room_code":"gzX2hHdR","hotel_id":13},
  {"id":24,"room_no":"12","room_code":"m2YeAULQ","hotel_id":15},
  {"id":25,"room_no":"55","room_code":"12345","hotel_id":7},
  {"id":26,"room_no":"66","room_code":"JjEuS2rH","hotel_id":7},
  {"id":28,"room_no":"1","room_code":"12345","hotel_id":19},
  {"id":29,"room_no":"2","room_code":"12345","hotel_id":19},{"id":31,"room_no":"25","room_code":"q%hGGbD8","hotel_id":15}];
   this.setState({
      isLoading:true,
      Rooms:HRooms
  })
 
}
// onPressRecipe = item => {
//   this.props.navigation.navigate('Breakfast', { item });
// };
  renderRecipes = ({ item }) => (
    
    <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => this.setState({modalVisible:true,hotelname:item.name,hotelid:item.id})}>
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: item.photo_url }} />
        <Text style={styles.title}>{item.name}</Text>
        { <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text> 
      }
      </View>
    </TouchableHighlight>
  );
  

  render() {
    
    const { modalVisible } = this.state;
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            this.setState({modalVisible: false});
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
            <Text style={styles.modalText}>{this.state.hotelname}</Text>
              <TextInput
              placeholder="Please Enter Room Code!"  
              underlineColorAndroid='transparent'  
              style={styles.TextInputStyle}    
              onChangeText={(text) => {this.setState({input: text});
              

            }}
            
              
              />

              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "orange" }}
                onPress={() => {
                  var room=this.state.Rooms.filter(d => d.hotel_id===this.state.hotelid)
                  var varify=room.filter(d=>d.room_code===this.state.input)
                  console.log(varify)
                  if (varify.length==0){
                    Alert.alert("btn verifing");
                    var item = this.state.hotelid;
                    var room =this.state.input;
                    this.setState({modalVisible: false});
                    this.state.input=null;
                    this.props.navigation.navigate('menu',{item,room});
                   
                  }
                  else{
                    Alert.alert("btn not");
                  }
                  
                    
                }}
              >
                {/* sIq3ADHz */}
                <Text style={styles.textStyle}>Submit</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
     {  <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={this.state.dataSource}
          renderItem={this.renderRecipes}
          keyExtractor={item => `${item.recipeId}`}
        />
     }
      </View>
    );
  }
}