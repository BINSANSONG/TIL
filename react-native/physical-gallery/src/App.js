import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createDrawerNavigator, createAppContainer } from "react-navigation";
import HomeStack from './screen/HomeStack';
import MyRoutineStack from './screen/MyRoutineStack';
import Setting from './screen/Setting';
import Info from "./screen/Info";

const AppDrawerNavigator = createDrawerNavigator({
  Home:HomeStack,
  MyRoutine:MyRoutineStack,
  Setting,
  Info,
});

export default createAppContainer(AppDrawerNavigator);