import React, { Component } from 'react';
import { Text, View, WebView, ScrollView, Button, Dimensions } from 'react-native';

import Workout from "./Workout";

const D_width = Dimensions.get('window').width; 
const D_height = Dimensions.get('window').height;

export default class Routine extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title:navigation.getParam('name','디폴트 루틴 네임'),
    };
  };
  state={
    whichWorkout:0
  }
  nextWorkout = () =>{
    this.setState({whichWorkout:this.state.whichWorkout+1});
  }
  render() {
    return (
      <View style={{flex:1, alignItems:'stretch',justifyContent:'flex-start'}}>
         <WebView
          javaScriptEnabled={true}
          domStorageEnabled={true}
          source={{ uri: "https://www.youtube.com/embed/NggtshEbkT0" }}
          style={{marginHorizontal:10}}
        />
        <ScrollView style={{height:D_height*0.4}} alignItems='stretch' marginHorizontal={5} contentContainerStyle={{marginVertical:5}}>
          <Button title='운동시작' onPress={this.nextWorkout}/>
          <Workout time={10} start={this.state.whichWorkout===1} onTimeElapsed={this.nextWorkout}/>
          <Workout time={60} start={this.state.whichWorkout===2} onTimeElapsed={this.nextWorkout}/>
          <Workout time={110} start={this.state.whichWorkout===3} onTimeElapsed={this.nextWorkout}/>
          <Workout time={30} start={this.state.whichWorkout===4} onTimeElapsed={this.nextWorkout}/>
        </ScrollView>
      </View>
    )
  }
}
