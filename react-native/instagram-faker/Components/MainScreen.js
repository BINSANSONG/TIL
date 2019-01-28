import React, { Component } from "react";
import { Platform } from "react-native";
import { Icon } from "native-base";
import {
  createMaterialTopTabNavigator,
  createAppContainer
} from "react-navigation";

import HomeTab from "./AppTabNavigator/HomeTab";
import SearchTab from "./AppTabNavigator/SearchTab";
import ProfileTab from "./AppTabNavigator/ProfileTab";

const AppTabNavigator = createMaterialTopTabNavigator(
  {
    HomeTab: { screen: HomeTab },
    SearchTab: { screen: SearchTab },
    ProfileTab: { screen: ProfileTab }
  },
  {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: "bottom",
    tabBarOptions: {
      style: {
        ...Platform.select({
          android: {
            backgroundColor: "white"
          }
        })
      },
      iconStyle: { height: 30 },
      activeTintColor: "#000",
      inactiveTintColor: "#d1cece",
      upperCaseLabel: false,
      showLabel: false,
      showIcon: true
    }
  }
);

const AppTabContainer = createAppContainer(AppTabNavigator);

export default class MainScreen extends Component {
  static navigationOptions = {
    headerLeft: <Icon name="ios-camera" style={{ paddingLeft: 10 }} />,
    title: "Instagram",
    headerRight: <Icon name="ios-send" style={{ paddingRight: 10 }} />
  };

  render() {
    return <AppTabContainer />;
  }
}
