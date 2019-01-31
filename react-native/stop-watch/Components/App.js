import React, { Component } from 'react'
import { createAppContainer, createStackNavigator } from "react-navigation";
import MainScreen from './MainScreen';

const appStackNavigator = createStackNavigator({
  Main:{
    screen:MainScreen
  }
});

export default createAppContainer(appStackNavigator);