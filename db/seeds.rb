# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Playlist.destroy_all
Artist.destroy_all
Album.destroy_all
Track.destroy_all
PlaylistTrack.destroy_all


user1 = User.create(username: "DemoUser", password: "hailsatan", first_name: "foo", last_name: "bar", email: "foobar@demo.com")

artist1 = Artist.create(name: "Hikaru Utada")

album1 = Album.create(title: "Don't Think Twice", artist_id: 1)

playlist1 = Playlist.create(title: "Kingdom Hearts", user_id: 1)

track1 = Track.create(title: "Don't Think Twice", artist_id: 1, album_id: 1)
track2 = Track.create(title: "Simple and Clean", artist_id: 1, album_id: 1)

playlistfollow1 = PlaylistTrack.create(track_id: 1, playlist_id: 1)
playlistfollow2 = PlaylistTrack.create(track_id: 2, playlist_id: 1)
