import React, { Component } from "react";
import { Text, List, ListItem, Left, Right, Icon } from "native-base";
import Timer from "./Timer";
export default class Laps extends Component {
  render() {
    return (
      <List
        dataArray={this.props.laps}
        renderRow={lap => (
          <ListItem>
            <Left>
              <Timer interval={lap}/>
            </Left>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
        )}
      />
    );
  }
}
