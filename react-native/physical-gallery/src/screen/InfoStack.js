import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator } from "react-navigation";
import Icon from '@expo/vector-icons/Ionicons';

class Info extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title:'만든사람',
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
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text> 정보 </Text>
      </View>
    )
  }
}

const InfoStack = createStackNavigator({
  Info,
});

export default InfoStack;
