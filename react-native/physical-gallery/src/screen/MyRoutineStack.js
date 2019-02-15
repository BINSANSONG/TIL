import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Button, Icon } from 'native-base';
import { createStackNavigator } from "react-navigation";

import Routine from "../components/Routine";
import Search from "./Search";
class MyRoutine extends Component {
  static navigationOption = ({navigation}) => {
    return {
      headerTitle:'MyRoutine',
      headerRight:(<Icon name='ios-search' onPress={navigation.navigate('Search')}/>)
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

const MyRoutineStack = createStackNavigator({
  MyRoutine,
  Routine,
  Search
})

export default MyRoutineStack;