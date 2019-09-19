json.set! @playlist_follow.id do 
    json.partial! "api/playlist_follows/playlist_follow", playlist_follow: @playlist_follow
end