json.set! 'users' do
    @users.each do |user|
        json.set! user.id do
            json.partial! 'api/users/user', user: user
        end
    end
end

json.set 'albums' do
    @albums.each do |album|
        json.set! album.id do
            json.partial! 'api/albums/album', album: album
        end
    end
end

json.set 'artists' do
    @artists.each do |artist|
        json.set! artist.id do
            json.partial! 'api/artists/artist', artist: artist
        end
    end
end

json.set! 'playlists' do
    @playlists.each do |playlist|
        json.set! playlist.id do
            json.partial! 'api/playlists/playlist', playlist: playlist
        end
    end
end

json.set! 'tracks' do
    @tracks.each do |song|
        json.set! track.id do
            json.partial! 'api/tracks/track', track: track
        end
    end
end
