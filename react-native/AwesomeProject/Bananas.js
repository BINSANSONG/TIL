import React, { Component } from 'react';
import { StyleSheet, Text, View, Number } from 'react-native';
/*
타이머 앱을 짤건데, 입력한 시간이 줄어들면서, 완료되면 알람이 뜨는거
시간 설정과(분, 초), 일시정지, 다시시작, 초기화, 시작, 정도 
일단 setinterval로 해보고, 다른 방법도 생각해보면서 다른사람이 해놓은거를 보자. 자바스크립트로 타이머 짠거 
Date객체에 뭔가 있을것같기도하고
먼저 입력을 받아야해 - 숫자입력
버튼 - 처음엔 시작버튼뿐
시작되면 숫자가 내려가면서 아래 버튼은 일시정지와 초기화
일시정지를 누르면 숫자가 정지되고 아래버튼은 다시시작과 초기화
시간이 다되면 알람이 뜨고 확인 누르면 처음으로
*/

//시계그룹
class Clock extends Component {
  constructor(props){
    super(props);
    this.state = { isRunning : false };
  }
  run() {

  }
  pause() {

  }
  intialize() {

  }
  render() {
    return (
      <View>
        <Number></Number>
        <Number></Number>
        <Text></Text>
        <Number></Number>
        <Number></Number>
      </View>
    );
  }
}
//합쳐서 타이머
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
