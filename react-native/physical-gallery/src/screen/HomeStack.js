import React, { Component } from "react";
import { View } from "react-native";
import { Button, Text } from "native-base";
import { createStackNavigator } from "react-navigation";
import Icon from '@expo/vector-icons/Ionicons';

import Routine from "../components/Routine";
import Search from "./Search";

class Home extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title:'피지컬갤러리',
      headerLeft: (
        <Icon
          style={{ paddingLeft: 10 }}
          onPress={() => navigation.openDrawer()}
          name="md-menu"
          size={30}
        />
      ),
      headerRight: (
        <Icon
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
          onPress={() => this.props.navigation.navigate("Routine",{
            name:'1번 루틴'
          })}
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
