import React, { Component } from "react";
import { Container, Content, Header, Body, Title, Left } from "native-base";

import Buttons from "./Buttons";
import Laps from "./Laps";
import Timer from "./Timer";

export default class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: 0,
      now: 0,
      interval:0,
      laps: [],
      timerState: "init"
    };
  }

  start = () => {
    const now = new Date().getTime();
    this.setState({
      start: now,
      now,
      laps: [0],
      timerState:'started'
    });
    this.timer = setInterval(() => {
      this.setState({ now: new Date().getTime()});
    }, 50);
  };

  lap = () => {
    const timestamp = new Date().getTime();
    const { laps, now, start } = this.state;
    const [firstLap, ...other] = laps;
    this.setState({
      laps: [0, firstLap + now - start, ...other],
      start: timestamp,
      now: timestamp
    });
  };

  pause = () => {
    clearInterval(this.timer);
    const { laps, now, start, interval } = this.state;
    const [firstLap, ...other] = laps;
    this.setState({
      laps: [firstLap + now - start, ...other],
      start: 0,
      now: 0,
      interval:interval+now-start,
      timerState: "stopped"
    });
  };
  reset = () => {
    this.setState({
      laps: [],
      start: 0,
      now: 0,
      interval: 0,
      timerState: "init"
    });
  };
  resume = () => {
    const now = new Date().getTime();
    this.setState({
      start: now,
      now,
      timerState: "started"
    });
    this.timer = setInterval(() => {
      this.setState({ now: new Date().getTime() });
    }, 50);
  };

  render() {
    const { now, start, interval, laps } = this.state;
    const timer = now - start + interval;
    return (
      <Container style={{ flex: 1 }}>
        <Content>
          <Timer interval={timer} />
        </Content>
        <Content>
          <Buttons
            timerState={this.state.timerState}
            onStart={this.start}
            onStop={this.pause}
            onReset={this.reset}
            onLaps={this.lap}
            onResume={this.resume}
          />
        </Content>
        <Content>
          <Laps laps={this.state.laps} />
        </Content>
      </Container>
    );
  }
}
