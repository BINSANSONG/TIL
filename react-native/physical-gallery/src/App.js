import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'
import { createDrawerNavigator, createAppContainer, SafeAreaView, DrawerItems } from "react-navigation";
import Icon from '@expo/vector-icons/Ionicons';

import HomeStack from './screen/HomeStack';
import MyRoutineStack from './screen/MyRoutineStack';
import SettingStack from './screen/SettingStack';
import InfoStack from "./screen/InfoStack";
import { Thumbnail } from 'native-base';

const CustomDrawerContentComponent = (props) => (
  <SafeAreaView>
    <View style={{height:130,backgroundColor:'lightblue', alignItems:'center', justifyContent:'center'}}>
      <Thumbnail large source={require('../assets/physicalgallery.png')}/>
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
);


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
},{
  contentComponent:CustomDrawerContentComponent,
  drawerWidth:220
});

export default createAppContainer(AppDrawerNavigator);