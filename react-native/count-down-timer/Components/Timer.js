import React, { Component } from "react";
import { Text, View, TextInput } from "react-native";

export default class Timer extends Component {
  timeInput(val=0, type) {
    if(this.props.state==='wating') 
      return <TextInput name={type} keyboardType="numeric" defaultValue="00" onChange={this.props.numIn}/>
    else
      return <TextInput name={type} keyboardType="numeric" editable={false} value={val}/>
  }
  render() {
    return (
      <View>
        {this.timeInput(this.props.h, 'h')}
        <TextInput defaultValue=":" editable={false} />
        {this.timeInput(this.props.m, 'm')}
        <TextInput defaultValue=":" editable={false} />
        {this.timeInput(this.props.s, 's')}
      </View>
    );
  }
}
