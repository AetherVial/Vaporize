@playlists.each do |playlist|
    json.set! playlist.id do
        json.partial! playlist, :id, :user_id, :title
        json.user playlist.user, :id, :first_name, :last_name, :username
    end
end 