/*global chrome*/
import React, { Component } from "react";
import "./bullet.css";

class Bullet extends Component {
  render() {
    return (
        <img
          src={chrome.runtime.getURL("/resource/weapon_mark/bullet1.png")}
          className="bullet"
          draggable="false"
          unselectable="on"
          style={{ width: "70px", height: "70px" }}
        />
    );
  }
}

export default Bullet;