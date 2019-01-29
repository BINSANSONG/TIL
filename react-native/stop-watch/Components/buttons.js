import React, { Component } from 'react'
import { Text as RnText } from "react-native";
import { Button, Text } from "native-base";
import {Font} from "expo";

export default class Buttons extends Component {
  state={
    loaded:false
  }
  componentDidMount() {
    this.loadFonts();
  }
  async loadFonts() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });
    this.setState({ loaded: true });
  }
  render() {
    if(!this.state.loaded){
      return <RnText>로딩중</RnText>;
    }
    
    return <Button><Text>Start</Text></Button>;
    
  }
}
