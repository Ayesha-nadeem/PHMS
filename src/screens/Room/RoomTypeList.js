import React, { Component }  from 'react';
import { Alert,FlatList, ScrollView, Text, View, TouchableHighlight, Image } from 'react-native';
import styles from './styles';


export default class RoomTypeList extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Room',
  
    // headerRight: (
    //   <ShoppingCartIcon/>
    // )
  });

  constructor(props) {
    super(props);
    console.log("here");
    this.state={
      hotelid:null,
      isLoading:true,
      dataSource:[],
      roomType:null,
      input:null,
      
  }
  }

  
  componentDidMount(){
    const Types= [{"id":1,"name":"Single","uname":"single","photo_url":require('../../../assets/rooms/Single.jpg')},
    {"id":2,"name":"Deluxe","uname":"deluxe","photo_url":require('../../../assets/rooms/Deluxe.jpg')},
    {"id":3,"name":"Comfort","uname":"comfort","photo_url":require('../../../assets/rooms/Comfort.jpg')},
    {"id":4,"name":"Presidential Suite","uname":"presidential","photo_url":require('../../../assets/rooms/Presidential.jpg')},
    {"id":5,"name":"Junior Suite","uname":"junior","photo_url":require('../../../assets/rooms/Junior.jpg')},
    {"id":6,"name":"Suite","uname":"suite","photo_url":require('../../../assets/rooms/Suite.jpg')},
    {"id":7,"name":"Studio","uname":"studio","photo_url":require('../../../assets/rooms/Studio.jpg')},
    {"id":8,"name":"Executive","uname":"executive","photo_url":require('../../../assets/rooms/Executive.jpg')}];
    {
        this.setState({
            isLoading:true,
            dataSource:Types,
        })
    }
}
// onPressRecipe = item => {
//   this.props.navigation.navigate('Breakfast', { item });
// };

  renderRecipes = ({ item }) => (
   
  
    <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)'  onPress={() => {  var hotel=this.props.navigation.getParam('item');
    var room=this.props.navigation.getParam('room');
    var rt= item.id;
    this.setState({
      hotelid: hotel.id,
      roomType:item.id,
  })
    this.props.navigation.navigate('Home',{rt,room,hotel});}} >
      
      <View style={styles.container}>
        <Image style={styles.photo} source={(item.photo_url)} />
        <Text style={styles.title}>{item.name}</Text>
        {/* <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text> */}
      </View>
    </TouchableHighlight>
  );

  render() {
  
    return (
      <View>
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={this.state.dataSource}
          renderItem={this.renderRecipes}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}
