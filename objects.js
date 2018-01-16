playlist = { artistName: "The Corrs", songTitle: "Runaway" };

function updatePlaylist(playlist, artistName, songTitle) {
//  return Object.assign({}, playlst, { [artistName]: songTitle });
  playlist[artistName] = songTitle;
  return;
  
}