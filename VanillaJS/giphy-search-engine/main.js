// 1. input 읽는다
const button = document.querySelector('#js-button');
const inputArea = document.querySelector('#js-input');
button.addEventListener('click', () => {
    const inputValue = inputArea.value;
    getData(inputValue);
});
inputArea.addEventListener('keyup', (e) => {
    if (e.which === 13) button.click();
});



// 2. API로 data받아서 


// 3. 뿌린다
const getData = (data) => {


    const API_KEY = 'Dgek5nDGPqfWqG5FK7GBMkYVbuOgxEQ6';
    let keyword = data;
    const URL = `http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${API_KEY}`;

    const GiphyAJAXCall = new XMLHttpRequest();
    GiphyAJAXCall.open('GET', URL);
    GiphyAJAXCall.send();
    GiphyAJAXCall.addEventListener('load', (e) => {
        const rawData = e.target.response;
        document.querySelector('#result-area').innerHTML = '';
        pushToDOM(JSON.parse(rawData));
    });

};

const pushToDOM = (data) => {
    data.data.forEach(e => {
        let img = document.createElement('img');
        img.src = e.images.original.url;
        document.querySelector('#result-area').append(img);
    });
};