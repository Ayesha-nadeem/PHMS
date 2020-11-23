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
    fetch('http://82.165.158.88/Hotels/?format=json').then((response)=>response.json())
    .then((responseJson)=>{
        this.setState({
            isLoading:true,
            dataSource:responseJson
        })
    })
    fetch('http://192.168.100.3:8000/Room/?format=json').then((response)=>response.json())
    .then((responseJson)=>{
        console.log(responseJson);
        this.setState({
            isLoading:true,
            Rooms:responseJson
        })
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
                    this.props.navigation.navigate('Breakfast',{item,room});
                   
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
