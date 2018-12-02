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
import React from 'react';
import ReactDOM from 'react-dom';
import "./content.css";
const request = require('request');

function shotEvent(event){
    event.preventDefault();
    if(event.target.tagName==='IMG'){
        const imgsrc = event.target.src;
        const options = {
            uri: 'https://sam-hap.herokuapp.com/recognition',
            method: 'POST',
            json: {
                "image": imgsrc
            }
        }
        request(options,(error,response,body)=>{
            if(!error && response.statusCode == 200){
                console.log(body);
            }
        });
    }
}

let toggle_on = false;

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
       if( request.message === "clicked_browser_action") {
         if(toggle_on){
            window.removeEventListener('click',shotEvent);
            toggle_on=false;  
         } 
         else{
            window.addEventListener('click',shotEvent);
            toggle_on=true;
         }
       }
    }
 );