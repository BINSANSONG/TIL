// 1. React and ReactDOM library import
import React from 'react';
import ReactDOM from 'react-dom';

// 2. React 컴포넌트 생성
function getButtonText() {
    return 'ClickMe!';
}

const App  = ()=>{
    const buttonText = {happy : 'hacking'};
    const time = new Date().toLocaleTimeString();
    return (
        <div>
            <h3>{time}</h3>
            <label htmlFor="name" className="name_label">Enter name:</label>
            <input type="text" id="name"/>
            <button style={{
                backgroundColor:'blue', 
                color:'white',
                border: 'solid 3px black',
                }}>{buttonText.happy}</button>
        </div>
    )
}

// 3. 화면에 HTML 띄우기
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)