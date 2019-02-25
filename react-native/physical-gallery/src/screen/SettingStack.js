import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator } from "react-navigation";
import Icon from '@expo/vector-icons/Ionicons';

class Setting extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title:'설정',
      headerLeft: (
        <Icon
          style={{ paddingLeft: 10 }}
          onPress={() => navigation.openDrawer()}
          name="md-menu"
          size={30}
        />
      )
    };
  };

  render() {
    return (
      <View style={{flex:1, borderColor:'black',borderWidth:5, justifyContent:'center', alignItems:'stretch'}}>
        <View style={{width:20,height:20, backgroundColor:'yellow'}}/>
        <View style={{width:20, backgroundColor:'blue'}}/>
        <View style={{height:20, backgroundColor:'red'}}/>
      </View>
    )
  }
}

const SettingStack = createStackNavigator({
  Setting,
});

export default SettingStack;
