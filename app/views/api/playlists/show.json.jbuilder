json.playlist do 
    json.partial! "api/playlists/playlist", playlist: @playlist
    json.user @playlist.user, :id, :first_name, :last_name, :username
end