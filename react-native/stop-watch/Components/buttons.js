import React, { Component } from 'react'
import { Button, Text, View } from "native-base";

export default class Buttons extends Component {

  makeButtons = (timerState) =>{
    if(timerState==='init') {
      return <Button onPress={this.props.onStart}><Text>Start</Text></Button>;
    }else if(timerState==='started'){
      return (
        <View style={{flex:1,flexDirection:'row',justifyContent:'space-around'}}>
          <Button onPress={this.props.onLaps}><Text>Laps</Text></Button>
          <Button onPress={this.props.onStop}><Text>Pause</Text></Button>
        </View>
      )
    }else{
      return (
        <View style={{flex:1,flexDirection:'row',justifyContent:'space-around'}}>
          <Button onPress={this.props.onReset}><Text>Reset</Text></Button>
          <Button onPress={this.props.onResume}><Text>Resume</Text></Button>
        </View>
      )
    }
  }

  render() {    
    return (
      <View style={{flex:1, flexDirection:'row', justifyContent:'center'}}>
        {this.makeButtons(this.props.timerState)}
      </View>
    )
  }
}
