@playlists.each do |playlist|
    json.set! playlist.id do
        json.extract! playlist, :id, :title, :user_id
        json.track_ids playlist.tracks.pluck(:id)
        # json.user playlist.user, :id, :first_name, :last_name, :username
    end
end 