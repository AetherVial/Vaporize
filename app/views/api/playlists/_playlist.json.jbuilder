json.extract! playlist, :id, :user_id, :title

json.track_ids @playlist.tracks.pluck(:id)