@playlist_follows.each do |playlist_follow|
    json.set! playlist_follow.id do
        json.extract! playlist_follow, :id, :playlist_id, :user_id
    end
end