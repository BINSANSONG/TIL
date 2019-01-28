import React, { Component } from 'react'
import { Text, View, RefreshControl } from 'react-native'
import { Container, Content, Icon } from "native-base";

import CardComponent from "../CardComponent";

export default class HomeTab extends Component {
  state = {
    feeds:[0,1,2,3,4,5,6,7,8,9],
    refreshing:false,
  }
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-home" style={{ color: tintColor }} />
    )
  };

  onRefresh = () => {
    this.setState({refreshing:true});
    this.setState({refreshing:false});
  };

  render() {
    return (
      <Container>
        <Content refreshControl={
          <RefreshControl onRefresh={this.onRefresh} refreshing={this.state.refreshing}/>
        }>
          { this.state.feeds.map(feed=><CardComponent key={feed}/>) }
        </Content>
      </Container>
    )
  }
}

