import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Button, Icon } from 'native-base';
import { createStackNavigator} from "react-navigation";

import Routine from "../components/Routine";
import Search from "./Search";
class Home extends Component {
  static navigationOption = ({navigation}) => {
    return {
      headerRight:(<Button onPress={navigation.navigate('Search')}><Text>Search</Text></Button>)
    }
  }
  render() {
    return (
      <View>
        <Button onPress={()=>this.props.navigation.navigate('Routine')}><Text>Routine</Text></Button>
      </View>
    )
  }
}

const HomeStack = createStackNavigator({
  Home,
  Routine,
  Search
});

export default HomeStack;
