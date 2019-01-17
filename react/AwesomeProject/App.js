import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={textstyles.container}>이건 제목입니다</Text>
        <Text>ㅎㅎ 내가 만든 앱이지롱</Text>
        <Text>리액트 네이티브 좋다</Text>
        <Text>빨리빨리 공부해보자</Text>
      </View>
    );
  }
}

const textstyles = StyleSheet.create({
  container: {
    fontSize:25
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});