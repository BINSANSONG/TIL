import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Container,Content } from "native-base";

import Buttons from "./Buttons";
import Laps from "./Laps";
import Timer from "./Timer";

export default class MainScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      start: 0,
      now: 0,
      laps: [ ],
    }
  }
  
  start = () =>{
    const now = new Date().getTime()
    this.setState({
      start: now,
      now,
      laps: [0],
    })
    this.timer = setInterval(() => {
      this.setState({ now: new Date().getTime()})
    }, 100)
  }

  componentDidMount(){
    this.start();
  }
  render() {
    const { now, start, laps } = this.state;
    const timer = now - start;
    return (
      <Container style={{flex:1}}>
        <Content>
        <Timer interval={timer}/>
        </Content>
        <Content>
        <Buttons />
        </Content>
        <Content>
        <Laps/>
        </Content>
      </Container>
    )
  }
}
