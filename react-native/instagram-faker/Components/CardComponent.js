import React, { Component } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import {
  Card,
  CardItem,
  Thumbnail,
  Body,
  Left,
  Right,
  Button,
  Icon
} from "native-base";
const faker = require('faker/locale/ko');

export default class CardComponent extends Component {
  render() {
    
    return (
      <Card>
        <CardItem>
          <Left>
            <Thumbnail
              source={{
                uri: faker.image.image()
              }}
            />
            <Body>
              <Text>{faker.name.findName()}</Text>
              <Text note>{new Date(faker.date.past()).toDateString()}</Text>
            </Body>
          </Left>
        </CardItem>
        
          <CardItem cardBody>
            <Image
              source={{ uri: faker.image.image() }}
              style={{ height: 200, width: null, flex: 1 }}
            />
          </CardItem>
        
        <CardItem>
          <Text style={{ fontWeight: "900" }}>{faker.name.title()}</Text>
        </CardItem>
        <CardItem>
          <Text>{faker.lorem.paragraph().slice(0, 200)}</Text>
        </CardItem>

        <CardItem style={{ height: 45 }}>
          <Left>
            <Button transparent>
              <Icon name="ios-heart" style={{ color: "red", marginRight: 5, }} />
              <Text>{ faker.random.number(1000) }</Text>
            </Button>
            <Button transparent>
              <Icon name="ios-chatbubbles" style={{ color: "blue", marginRight: 5, }} />
              <Text>{ faker.random.number(200) }</Text>
            </Button>
            <Button transparent>
              <Icon name="ios-send" style={{ color: "black" }} />
            </Button>
          </Left>
          <Right>
            <Text>{ faker.commerce.price(0.00,100.00,2,'$') }</Text>
          </Right>
        </CardItem>
      </Card>
    );
  }
}
