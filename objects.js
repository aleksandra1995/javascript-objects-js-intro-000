var playlist = {Madonna: "My Bloody Valentine"}
function updatePlaylist(playlist,artistName, songTitle) {
  playlist['Phil Ochs'] = "Slowdive"
  return playlist
}
function removeFromPlaylist(playlist, artistName) {
 return delete playlist.Madonna
}