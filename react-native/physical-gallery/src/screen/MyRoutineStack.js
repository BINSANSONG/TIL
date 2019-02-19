import React, { Component } from 'react'
import { View } from 'react-native'
import { Button, Icon, Text } from 'native-base';
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
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Button onPress={()=>this.props.navigation.navigate('Routine')} style={{alignSelf:'center'}}><Text>Routine</Text></Button>
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