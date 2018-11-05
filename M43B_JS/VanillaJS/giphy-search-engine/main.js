// 1. input 읽는다
const button = document.querySelector('#js-button');
const inputArea = document.querySelector('#js-input');
button.addEventListener('click',()=>{
    const inputValue = inputArea.value;
    pushToDOM(inputValue);
});
inputArea.addEventListener('keyup',(e)=>{
    if(e.which === 13) button.click();
});



// 2. API로 data받아서 
const API_KEY = 'Dgek5nDGPqfWqG5FK7GBMkYVbuOgxEQ6';
let keyword = 'cats';
const URL = `api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${API_KEY}`;
console.log(URL);


// 3. 뿌린다
const pushToDOM = (data) => {
    const resultArea = document.querySelector('#result-area');
    resultArea.innerHTML = data;
};