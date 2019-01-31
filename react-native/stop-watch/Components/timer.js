import React, { Component } from 'react'
import { Text, View } from "native-base";
import moment from "moment";

export default class Timer extends Component {
  pad = n => n < 10 ? '0' + n : n;

  duration = interval => moment.duration(interval);

  render() {
    return (
      <View style={{flex:1,flexDirection:'row',justifyContent:'space-evenly'}}>
        <Text> {this.pad(this.duration(this.props.interval).minutes())}</Text>
        <Text>:</Text>
        <Text> {this.pad(this.duration(this.props.interval).seconds())}</Text>
        <Text>:</Text>
        <Text> {this.pad(Math.floor(this.duration(this.props.interval).milliseconds()/10))}</Text>
      </View>
    )
  }
}
