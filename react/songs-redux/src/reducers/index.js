import {combineReducers} from 'redux';

const songsReducer = () => {
  return [
    {title:'s1', artist:'crush', duration:'5:00'},
    {title:'s2', artist:'dean', duration:'4:22'},
    {title:'s3', artist:'ziont', duration:'4:11'},
    {title:'s4', artist:'zico', duration:'4:00'},
    {title:'s5', artist:'crush', duration:'4:05'},
  ]
};


const selectedSongReducer = (selectedSong=null, action) => {
  if (action.type==='SONG_SELECTED')
    return action.payload;
  else return selectedSong;
};

export default combineReducers({
  songs:songsReducer,
  selectedSong:selectedSongReducer
});