json.set! @artist.id do 
    json.partial! "api/artists/artist", artist: @artist
    json.track_ids @artist.tracks.pluck(:id)
end