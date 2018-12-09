/*global chrome*/
import React, { Component } from 'react';
import './weapon.css';

class Weapon extends Component {
  render() {
    return (
      <div className='weapon-point'>
        <div className='cursor target-point'></div>
        <img className='cursor weapon-img' src={chrome.runtime.getURL("/resource/weapon/pistol.png")}/>
      </div>
    )
  }
}

export default Weapon;