json.set! @playlist_track.id do 
    json.partial! "api/playlist_tracks/playlist_track", playlist_track: @playlist_track
end