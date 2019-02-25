import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createDrawerNavigator, createAppContainer } from "react-navigation";
import Icon from '@expo/vector-icons/Ionicons';

import HomeStack from './screen/HomeStack';
import MyRoutineStack from './screen/MyRoutineStack';
import SettingStack from './screen/SettingStack';
import InfoStack from "./screen/InfoStack";

const AppDrawerNavigator = createDrawerNavigator({
  HomeStack:{
    screen:HomeStack,
    navigationOptions: ({ navigation }) => ({
      drawerLabel:'메인 화면',
      drawerIcon:(<Icon name='md-home' size={30}/>),
    }),
  },
  MyRoutineStack:{
    screen:MyRoutineStack,
    navigationOptions: ({ navigation }) => ({
      drawerLabel:'나의 운동',
      drawerIcon:(<Icon name='md-person' size={30}/>),
    }),
  },
  SettingStack:{
    screen:SettingStack,
    navigationOptions: ({ navigation }) => ({
      drawerLabel:'설정',
      drawerIcon:(<Icon name='md-settings' size={30}/>),
    }),
  },
  InfoStack:{
    screen:InfoStack,
    navigationOptions: ({ navigation }) => ({
      drawerLabel:'만든 사람',
      drawerIcon:(<Icon name='md-information-circle-outline' size={30}/>),
    }),
  },
});

export default createAppContainer(AppDrawerNavigator);