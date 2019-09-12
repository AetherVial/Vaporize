@playlist_tracks.each do |playlist_track|
    json.set! playlist_track.id do
        json.extract! playlist_track, :id, :playlist_id, :track_id
    end
end