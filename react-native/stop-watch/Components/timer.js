import React, { Component } from 'react'
import { View } from 'react-native'
import { Text } from "native-base";
import moment from "moment";

export default class Timer extends Component {
  pad = n => n < 10 ? '0' + n : n;

  duration = interval => moment.duration(interval);

  render() {
    return (
      <View style={{flex:1,flexDirection:'row',justifyContent:'center', alignItems:'center'}}>
        <Text> {this.pad(this.duration(this.props.interval).minutes())}:</Text>
        <Text> {this.pad(this.duration(this.props.interval).seconds())}</Text>
      </View>
    )
  }
}
