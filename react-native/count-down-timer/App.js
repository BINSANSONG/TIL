import React from "react";
import { Button, Text, Container, Header } from "native-base";
import { TextInput } from "react-native";
import { Font, AppLoading } from "expo";
import { Col, Row, Grid } from "react-native-easy-grid";
import { duration } from "moment";
import Timer from "./Components/Timer";
export default class App extends React.Component {
  state = {
    loaded: false,
    duration: duration(),
    state: "wating"
  };
  componentDidMount() {
    this.loadFonts();
  }
  async loadFonts() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });
    this.setState({ loaded: true });
  }

  pad = n => n < 10 ? '0' + n : n;

  numIn = (event, name) => {
    const type = name;
    const val = event.nativeEvent.text;

    const h = this.state.duration.hours();
    const m = this.state.duration.minutes();
    const s = this.state.duration.seconds();

    if (type === "h") {
      this.setState({
        duration: duration({
          h: val,
          m,
          s
        })
      });
    }
    if (type === "m") {
      this.setState({
        duration: duration({
          m: val,
          h,
          s
        })
      });
    }
    if (type === "s") {
      this.setState({
        duration: duration({
          s: val,
          h,
          m
        })
      });
    }
  };

  render() {
    console.log('app loading');
    if (!this.state.loaded) return <AppLoading />;
    return (
      <Container>
        <Header searchBar />
        <Grid>
          <Row
            style={{
              alignItems: "flex-end",
              justifyContent: "center"
            }}
          >
            <Timer
              state={this.state.state}
              numIn={this.numIn}
              h={this.pad(this.state.duration.hours())}
              m={this.pad(this.state.duration.minutes())}
              s={this.pad(this.state.duration.seconds())}
            />
          </Row>
          <Row
            style={{
              alignItems: "flex-start",
              justifyContent: "center"
            }}
          />
        </Grid>
      </Container>
    );
  }
}