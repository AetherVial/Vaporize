json.extract! user, :id, :username, :first_name, :last_name, :email

json.followed_playlists user.followed_playlists.pluck(:playlist_id)