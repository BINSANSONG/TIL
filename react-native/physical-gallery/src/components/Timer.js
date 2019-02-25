import React, { Component } from "react";
import { Text, View } from "react-native";
import TimerCountdown from "react-native-timer-countdown";

export default class Timer extends Component {
  render() {
    return (
      <View>
        {this.props.start ? (
          <TimerCountdown
            initialSecondsRemaining={1000 * this.props.time}
            onTimeElapsed={this.props.onTimeElapsed}
          />
        ) : (
          <Text>{this.props.time}</Text>
        )}
      </View>
    );
  }
}
