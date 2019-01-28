import React, { Component } from "react";
import { Text, StyleSheet, RefreshControl } from "react-native";
import { Container, Content, Icon, Button } from "native-base";
import CardComponent from "../CardComponent";
export default class HomeTab extends Component {

  state = {
    feeds:[],
    refreshing:false,
  }

  componentWillMount() {
    this.fetchFeeds().then(feeds=>{
      this.setState({feeds});
    });
  }

  onRefresh = () => {
    this.setState({refreshing:true});
    this.fetchFeeds().then(feeds=>{
      this.setState({feeds:feeds, refreshing:false});
      
    });
  }

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-home" style={{ color: tintColor }} />
    )
  };

  fetchFeeds() {
    const data = {
      id: 1,
      jsonrpc: "2.0",
      method: "call",
      params: [
        "database_api",
        "get_discussions_by_created",
        [{ tag: "kr", limit: 20 }]
      ]
    };
    return fetch("https://api.steemit.com", {
      method: "POST",
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(res => res.result);
  }

  render() {
    return (
      <Container style={style.container}>
        <Content refreshControl={
          <RefreshControl refreshing={this.state.refreshing} onRefresh={this.onRefresh}/>
        }>
          {
            this.state.feeds.map(feed=><CardComponent data={feed} key={feed.post_id}/>)
          }
        </Content>
      </Container>
    );
  }
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  }
});
