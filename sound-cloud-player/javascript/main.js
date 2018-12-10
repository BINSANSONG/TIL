/* 0. UI Setting*/ 
const UI = {
    setInputArea: ()=>{
        document.querySelector('#js-submit').addEventListener('click',()=>{
            const searchValue = document.querySelector('#js-search').value;
            SoundCloudAPI.getTracks(searchValue);
        });
    },
    
    setSearchButton: ()=>{
        document.querySelector('#js-search').addEventListener('keyup',e=>{
            if(e.keyCode===13) document.querySelector('#js-submit').click(); 
        });
    },

    setResetButton: () => {
        const reset = document.querySelector('#js-reset');
        reset.addEventListener('click', () => {
            localStorage.clear();
            document.querySelector('#js-playlist').innerHTML = null;
        });
    },
    
    setPlaylist: ()=>{
        document.querySelector('#js-playlist').innerHTML=localStorage.getItem('playlist');
    },
}

UI.setInputArea();
UI.setPlaylist();
UI.setResetButton();
UI.setSearchButton();


const SoundCloudAPI = {
    init: () => {
        SC.initialize({
            client_id: 'cd9be64eeb32d1741c17cb39e41d254d'
        });
    },

    getTracks: (inputValue) => {
        SC.get('/tracks', {
            q: inputValue
        }).then(function (tracks) {
            SoundCloudAPI.renderTracks(tracks);
        });
    },

    renderTracks: (tracks) => {
        document.querySelector('#js-search-results').innerHTML=null;
        tracks.forEach(e => {
            const card =  document.createElement('div');
            const imageDiv =  document.createElement('div');
            const imgImg =  document.createElement('img');
        
            card.classList.add('card');
            imageDiv.classList.add('image');
            imgImg.classList.add('image_img');
            imgImg.src = e.artwork_url;
            imgImg.onerror = () => {
                imgImg.src = 'https://www.previssima.fr/files/app/img/img-not-found.png';
            };
            imgImg.alt = 'Album cover image';
        
            card.appendChild(imageDiv);
            imageDiv.appendChild(imgImg);
            
            const content = document.createElement('div');
            const header = document.createElement('div');
            const link = document.createElement('a');
        
            content.classList.add('content');
            header.classList.add('header');
            link.target='_blank';
            link.href=e.permalink_url;
            link.innerHTML = e.title;
        
            card.appendChild(content);
            content.appendChild(header);
            content.appendChild(link);
        
        
            const bottom = document.createElement('div');
            const icon = document.createElement('i');
            const span = document.createElement('span');
        
            bottom.classList.add('ui', 'bottom', 'attached', 'button', 'js-button');
            icon.classList.add('add','icon');
            span.innerHTML='Add To Playlist';
        
            card.appendChild(bottom);
            bottom.appendChild(icon);
            bottom.appendChild(span);
    
            bottom.addEventListener('click',()=>{
                SoundCloudAPI.addPlaylist(e.permalink_url);
            });
        
            document.querySelector('#js-search-results').appendChild(card); 
        });
    
    },

    addPlaylist: (trackURL) => {
        SC.oEmbed(trackURL,{
            auto_play:true
        }).then(function(embed){
            const sidebar = document.querySelector('#js-playlist');
            const playbox = document.createElement('div');
            playbox.innerHTML = embed.html;
            sidebar.insertBefore(playbox,sidebar.firstChild);
            localStorage.setItem('playlist',sidebar.innerHTML);
        });
    },

};

SoundCloudAPI.init();

