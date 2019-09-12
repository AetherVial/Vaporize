json.set! @album.id do 
    json.partial! "api/albums/album", album: @album
    json.track_ids @album.tracks.pluck(:id)
end