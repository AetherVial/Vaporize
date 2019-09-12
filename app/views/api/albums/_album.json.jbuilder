json.album do
  json.extract! album, :id, :name, :description, :artist_id, :image_url
  json.track_ids @album.tracks.pluck(:id)
  json.artist album.artist, :id, :name
end