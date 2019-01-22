import React from 'react';
import ReactDOM from 'react-dom';
function gettime() {
    return (new Date()).toLocaleTimeString();
}
const App = () => {
    const buttontext = {Happy: 'Hacking!'};
    const labelText = 'Enter Name: ';
    const style = {backgroundColor:'blue', color:'white'};
    return (
        <div>
            <label htmlFor='name' className='name_label'>{labelText}</label>
            <input id='name' type='text'/>
            <button style={style}>
            {buttontext.Happy}
            </button>
            <div>{gettime()}</div>
        </div>
    );
}

ReactDOM.render(<App/>,document.querySelector('#root'));