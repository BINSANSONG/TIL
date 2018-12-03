import React, { Component } from "react";
import ReactDOM from "react-dom";
import Bullet from './Bullet';
import Weapon from './Weapon';


//load된 page에 script를 넣으면, sciprt는 무기와 관련된 태그를 page의 DOM에 삽입한다.
const weaponContainer = document.createElement('div');
(function setWeapon(){
  console.log('setweapon executed!')
  weaponContainer.className='weapon-cursor-container';
  ReactDOM.render(<Weapon/>,weaponContainer);
  document.body.appendChild(weaponContainer);
  document.onmousemove=animateWeapon;
  weaponContainer.style.display='none';
})()

let isWeaponDisplay=false;

//alt키를 누르면
document.onkeydown = event => {
  if (event.keyCode === 18 && !isWeaponDisplay) {
    console.log('무기켜짐');
    // document.querySelector('*').style.cursor = 'none'; // 1. 마우스 커서를 없애고
    weaponContainer.style.display = ""; // 2. 무기를 화면상에 보여주고
    document.onmousedown = animateBullet; // 3. 마우스 클릭시 bullet을 찍어주는 이벤트를 등록.
    isWeaponDisplay=true;
  }
  else if (event.keyCode === 18 && isWeaponDisplay) {
    console.log('무기꺼짐');
    document.querySelector('*').style.cursor = ''; // 1. 마우스 커서를 보여주고
    weaponContainer.style.display = "none"; // 2. 무기를 화면상에서 없애고
    document.querySelectorAll('.bullet-container').forEach(e=>{ //3. bullet들을 지운다.
        e.remove();
    });
    document.onmousedown = null; // 4. 마우스 클릭 이벤트를 삭제한다.
    isWeaponDisplay=false;
  }
};

//alt키를 떼면,
// document.onkeyup = event => {
//   console.log(event.keyCode);
//   if (event.keyCode === 18) {
//     document.querySelector('*').style.cursor = ''; // 1. 마우스 커서를 보여주고
//     weaponContainer.style.display = "none"; // 2. 무기를 화면상에서 없애고
//     document.querySelectorAll('.bullet-container').forEach(e=>{ //3. bullet들을 지운다.
//         e.remove();
//     });
//     document.onmousedown = null; // 4. 마우스 클릭 이벤트를 삭제한다.
//   }
// };


//bullet 생성 이벤트.
function animateBullet(event){
    const bulletMark = document.createElement('div');
    bulletMark.className = 'bullet-container';
    ReactDOM.render(<Bullet />, bulletMark);
    document.body.appendChild(bulletMark);
  
    const imgWidth = bulletMark.clientWidth;
    const imgHeight = bulletMark.clientHeight;
    bulletMark.style.left = event.pageX - imgWidth / 2 + 'px';
    bulletMark.style.top = event.pageY - imgHeight / 2 + 'px';
    bulletMark.style.position = 'absolute';
}

// weapon 이동 이벤트.
function animateWeapon(event) {
  weaponContainer.style.left = event.pageX + "px";
  weaponContainer.style.top = event.pageY + "px";
}
