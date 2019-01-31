import React, { Component } from 'react'
import { Font, AppLoading } from "expo";
import App from "./App";
export default class Setup extends Component {
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
    if(!this.state.loaded) return <AppLoading/>
    return <App/>
  }
}
