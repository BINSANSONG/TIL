import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Icon } from "native-base";

export default class ProfileTab extends Component {

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="person" style={{ color: tintColor }} />
    )
  };

  render() {
    return (
      <View>
        <Text> Profile </Text>
      </View>
    )
  }
}
