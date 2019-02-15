import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createDrawerNavigator, createAppContainer } from "react-navigation";
import HomeStack from './screen/HomeStack';
import MyRoutine from './screen/MyRoutineStack';
import Setting from './screen/Setting';
import Info from "./screen/Info";

const AppDrawerNavigator = createDrawerNavigator({
  HomeStack,
  MyRoutine,
  Setting,
  Info
});

export default createAppContainer(AppDrawerNavigator);