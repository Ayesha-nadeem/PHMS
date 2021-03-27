import React from 'react';
import { View ,Image} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import MenuButton from '../../components/MenuButton/MenuButton';
import Logo from '../../components/Logo'

export default class DrawerContainer extends React.Component {
  render() {
    const removeItemValue=async(key) =>{
      try {
          await AsyncStorage.removeItem(key);
          return true;
      }
      catch(exception) {
          return false;
      }
  }
    const { navigation } = this.props;
    return (
      <View style={styles.content}>
       
        <View style={styles.container}>
        <Logo  />
          <MenuButton
            title="HOME"
            source={require('../../../assets/icons/home.png')}
            onPress={() => {
              navigation.navigate('Home');
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="My Rooms"
            source={require('../../../assets/icons/category.png')}
            onPress={() => {
               navigation.navigate('DisplayScheduledRooms');
               navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="Log Out"
            source={require('../../../assets/icons/search.png')}
            onPress={() => {
              removeItemValue("user");
               navigation.navigate('StartScreen');
               navigation.closeDrawer();
            }}
          />
        </View>
      </View>
    );
  }
}

DrawerContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  })
};
