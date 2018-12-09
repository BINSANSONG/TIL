/*global chrome*/

/*
import React from 'react';
import ReactDOM from 'react-dom';
import "./content.css";

class Main extends React.Component {
    render() {
        return (
            <div className={'my-extension'}>
                <h1>Hello world - My first Extension</h1>
            </div>
        )
    }
}

const app = document.createElement('div');

app.style.display = "none";
chrome.runtime.onMessage.addListener(
   function(request, sender, sendResponse) {
      if( request.message === "clicked_browser_action") {
        toggle();
      }
   }
);
function toggle(){
   if(app.style.display === "none"){
     app.style.display = "block";
   }else{
     app.style.display = "none";
   }
}
app.id = "my-extension-root";
document.body.appendChild(app);
ReactDOM.render(<Main />, app);

*/
import React from "react";
import ReactDOM from "react-dom";
import './animation/clickEvent';

function shotEvent(event) {
  event.preventDefault();
  if (event.target.tagName === "IMG") {
    const httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
      if (httpRequest.readyState === 4) {
        if (httpRequest.status === 200) {
          const result = JSON.parse(httpRequest.response);
          alert(result.faces[0].celebrity.value);
        } else {
          console.log(httpRequest.status);
        }
      } else {
        console.log(httpRequest.readyState);
      }
    };
    httpRequest.open("POST", "https://sam-hap.herokuapp.com/recognition");
    httpRequest.setRequestHeader(
      "Content-Type",
      "application/json;charset=UTF-8"
    );
    const imgJSON = JSON.stringify({ image: event.target.src });
    httpRequest.send(imgJSON);
  } else {
    alert("이미지 태그가 아니에요!");
  }
}

let toggle_on = false;

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.message === "clicked_browser_action") {
    if (toggle_on) {
      window.removeEventListener("click", shotEvent);
      toggle_on = false;
    } else {
      window.addEventListener("click", shotEvent);
      toggle_on = true;
    }
  }
});
