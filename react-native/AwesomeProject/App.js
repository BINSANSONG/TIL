import * as Expo from "expo";
import React, { Component } from 'react';
import { Container, Button, Text, Icon } from 'native-base';
export default class App extends Component {

  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }

  componentWillMount() {
    this.loadFonts();
  }

  render() {
    if(!this.state.isReady){
      return <Expo.AppLoading />;
    }
    return (
      <Container style={style.container}>
        <Button light>
          <Text>
            Button Text
          </Text>
        </Button>
      </Container>
    );
  }

  async loadFonts() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({isReady:true});
  }
}

const style = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
  }
});