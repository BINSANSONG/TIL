import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import './SeasonDisplay.css';
import Spinner from "./Spinner";


class App extends React.Component {
  
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     lat: null, // 아직모른다. but 들어는 온다.
  //     errorMessage: '',
  //   };
  // }
  state = { //constructor 대신 이걸 쓰는 것을 허용한다.
    lat: null, // 아직모른다. but 들어는 온다.
    errorMessage: '',
  };

  renderContent(){
    // 사용자 허용함
    if (!this.state.errorMessage && this.state.lat) {
      console.log('들어오면');
      return (<SeasonDisplay lat={this.state.lat}></SeasonDisplay>);
    }

    // 사용자 거부함
    if (this.state.errorMessage && !this.state.lat) {
      console.log('에러면');
      return (<div>Error: {this.state.errorMessage}</div>);
    }
    
    // 허용/거부 기다리는 중..
    console.log('로딩이면');
    return(<Spinner message="위치를 입력해 주세요!"/>)
  }

  render() {
    return (
      <div style={{border:'solid red 10px'}}>
        {this.renderContent()}
      </div>
    )
  }

  componentDidMount() {
    console.log('마운트 일어남');
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude });
      },
      error => { 
        this.setState({ errorMessage: error.message });
      }
    );
  }

  componentDidUpdate(){
    console.log(`${this.state.lat}`);
    console.log('update 일어남');
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude });
      },
      error => { 
        this.setState({ errorMessage: error.message });
      }
    );
  }

}

ReactDOM.render(<App />, document.querySelector("#root"));