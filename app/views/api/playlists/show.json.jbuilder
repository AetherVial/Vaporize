json.set! @playlist.id do 
    json.partial! "api/playlists/playlist", playlist: @playlist
    json.track_ids @playlist.tracks.pluck(:id)
    # json.user @playlist.user, :id, :first_name, :last_name
end
