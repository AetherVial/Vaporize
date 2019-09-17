json.extract! artist, :id, :name
json.track_ids artist.tracks.pluck(:id)
json.album_ids artist.albums.pluck(:id)
json.photoUrl url_for(artist.photo)