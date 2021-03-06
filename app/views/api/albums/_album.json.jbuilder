json.album do
  json.extract! album, :id, :title, :artist_id
  json.track_ids album.tracks.pluck(:id)
  json.artist album.artist, :id, :name

  json.photoUrl url_for(album.photo)
end