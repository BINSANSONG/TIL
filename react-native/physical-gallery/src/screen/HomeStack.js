import React, { Component } from "react";
import { View } from "react-native";
import { Button, Text } from "native-base";
import { createStackNavigator } from "react-navigation";
import { Ionicons } from "@expo/vector-icons";

import Routine from "../components/Routine";
import Search from "./Search";
class Home extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: (
        <Ionicons
          style={{ paddingLeft: 10 }}
          onPress={() => navigation.openDrawer()}
          name="md-menu"
          size={30}
        />
      ),
      headerRight: (
        <Ionicons
          style={{ paddingRight: 10 }}
          onPress={() => navigation.navigate('Search')}
          name="md-search"
          size={30}
        />
      )
    };
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Button
          onPress={() => this.props.navigation.navigate("Routine")}
          style={{ alignSelf: "center" }}
        >
          <Text>Routine</Text>
        </Button>
      </View>
    );
  }
}

const HomeStack = createStackNavigator({
  Home,
  Routine,
  Search
});

export default HomeStack;
