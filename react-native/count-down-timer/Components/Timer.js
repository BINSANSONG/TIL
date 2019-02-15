import React, { Component } from "react";
import { Text, View, TextInput } from "react-native";

const TextInputComponent = ({value, onChange, name, ...props}) => (
  <TextInput
      value={value}
      onEndEditing={(event) => onChange(event, name)} //... Bind the name here
      {...props}
  />
)

export default class Timer extends Component {
  timeInput(val, type) {
    if(this.props.state==='wating') 
      return <TextInputComponent name={type} keyboardType="numeric" placeholder='00' onChange={this.props.numIn}/>
    else{
      return <TextInputComponent name={type} keyboardType="numeric" editable={false} value={val}/>
    }
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
