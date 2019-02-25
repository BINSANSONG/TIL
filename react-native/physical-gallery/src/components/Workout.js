import React, { Component } from 'react'
import { View } from 'react-native'
import { Content, Card, CardItem, Text, Body, Left, Right } from "native-base";
import Icon from '@expo/vector-icons/Ionicons'

import Timer from './Timer';

export default class Workout extends Component {
  render() {
    return (
      <View>
        <Card>
            <CardItem bordered style={{flexDirection:'row', justifyContent:'space-around'}}>
              <Icon name='md-timer' size={30}/>
              <Text>첫번째 운동</Text>
              <Timer time={this.props.time} start={this.props.start} onTimeElapsed={this.props.onTimeElapsed}/>
            </CardItem>
          </Card>
      </View>
    )
  }
}
