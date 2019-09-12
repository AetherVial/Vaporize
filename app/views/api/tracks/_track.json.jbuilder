json.extract! track, :id, :title, :album_id, :artist_id

json.artistName track.artist.name
  
json.albumName track.album.title

json.playlist_ids track.playlists.pluck(:id)