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
artist2 = Artist.create(name: "Sakuragaoka Keionbu")

album1 = Album.create(title: "Don't Think Twice", artist_id: 1)
album2 = Album.create(title: "Sakuragaoka Keionbu", artist_id: 2)
album3 = Album.create(title: "Singing! - Single", artist_id: 2)
album4 = Album.create(title: "No, Thank You! - Single", artist_id: 2)

playlist1 = Playlist.create(title: "Kingdom Hearts", user_id: 1)
playlist2 = Playlist.create(title: "K-ON!", user_id: 1)

track1 = Track.create(title: "Don't Think Twice", artist_id: 1, album_id: 1)
track2 = Track.create(title: "Simple and Clean", artist_id: 1, album_id: 1)
track3 = Track.create(title: "Fuwa-Fuwa Time", artist_id: 2, album_id: 2)
track4 = Track.create(title: "Fude Pen - Boru Pen", artist_id: 2, album_id: 2)
track5 = Track.create(title: "U & I", artist_id: 2, album_id: 2)
track6 = Track.create(title: "Pure Pure Heart", artist_id: 2, album_id: 2)
track8= Track.create(title: "Samidare 20 Love", artist_id: 2, album_id: 2)
track7 = Track.create(title: "Tenshi Ni Fureta Yo", artist_id: 2, album_id: 2)
track9 = Track.create(title: "Singing!", artist_id: 2, album_id: 3)
track10 = Track.create(title: "No, Thank You!", artist_id: 2, album_id: 4)

playlistTrack1 = PlaylistTrack.create(track_id: 1, playlist_id: 1)
playlistTrack2 = PlaylistTrack.create(track_id: 2, playlist_id: 1)

playlistTrack2 = PlaylistTrack.create(track_id: 5, playlist_id: 2)
playlistTrack2 = PlaylistTrack.create(track_id: 6, playlist_id: 2)
