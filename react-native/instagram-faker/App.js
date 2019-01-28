import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createStackNavigator } from "react-navigation";
import MainScreen from "./Components/MainScreen";
const AppStackNavigator = createStackNavigator({
  Main:{
    screen:MainScreen
  }
});

export default createAppContainer(AppStackNavigator);