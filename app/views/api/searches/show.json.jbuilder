json.set! "albums" do
    @albums.each do |album|
        json.set! album.id do
            json.extract! album, :id, :title, :artist_id
        end
    end
end

json.set! "artists" do
    @artists.each do |artist|
        json.set! artist.id do
            json.extract! artist, :id, :name
        end
    end
end

json.set! "playlists" do
    @playlists.each do |playlist|
        json.set! playlist.id do
            json.extract! playlist, :id, :title, :user_id
        end
    end
end

json.set! "tracks" do
    @tracks.each do |track|
        json.set! track.id do
            json.extract! track, :id, :title, :album_id, :artist_id
            
            json.artistName track.artist.name
  
            json.albumName track.album.title
        end
    end
end