const API_KEY = 'Dgek5nDGPqfWqG5FK7GBMkYVbuOgxEQ6';
let keyword = 'dog';
const URL = `http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${API_KEY}`;

const GiphyAJAXCall = new XMLHttpRequest();
GiphyAJAXCall.open('GET', URL);
GiphyAJAXCall.send();
GiphyAJAXCall.addEventListener('load', (e) => {
    const rawData = e.target.response;
    pushToTV(JSON.parse(rawData));
});

const pushToTV = (data) => {
    data.data.forEach(e => {
        setInterval(function () {
            let pimg = document.querySelector('img');
            let img = document.createElement('img');
            img.classList.add('img-center');
            img.src = e.images.original.url;
            pimg.parentNode.replaceChild(img, pimg);
        }, 3000);
    });
};
