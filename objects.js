var playlist = { artistName: "Kanye", songTitle: "Gold Digger" };

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  console.log(delete playlist.artistName);
  return playlist;
}