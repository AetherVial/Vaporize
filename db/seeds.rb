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
user2 = User.create(username: "MegaloBox", password: "12345678", first_name: "Joe", last_name: "the Boxer", email: "box@joesgym.io")
user3 = User.create(username: "AllMightFanBoy", password: "allmight!", first_name: "Izuku", last_name: "Midoriya", email: "deku@allmightfanclub.com")
user4 = User.create(username: "HoneySweetTeaTime", password: "mugistronk", first_name: "Tsumugi", last_name: "Kotobuki", email: "mugi@keion.io")
user5 = User.create(username: "4HeadRitsu", password: "drummer123", first_name: "Ritsu", last_name: "Tainaka", email: "ritsu@keion.io")

artist1 = Artist.create(name: "Hikaru Utada")
artist2 = Artist.create(name: "Hokago Tea Time")
artist3 = Artist.create(name: "YUI")
artist4 = Artist.create(name: "All Time Low")
artist5 = Artist.create(name: "Anberlin")

album1 = Album.create(title: "Don't Think Twice", artist_id: 1)
album2 = Album.create(title: "Sakuragaoka Keionbu", artist_id: 2)
album3 = Album.create(title: "Singing! - Single", artist_id: 2)
album4 = Album.create(title: "No, Thank You! - Single", artist_id: 2)
album5 = Album.create(title: "Nothing Personal", artist_id: 4)
album6 = Album.create(title: "Rolling Star - Single", artist_id: 3)
album7 = Album.create(title: "Never Take Friendship Personal", artist_id: 5)
album8 = Album.create(title: "Future Hearts", artist_id: 4)

playlist1 = Playlist.create(title: "Kingdom Hearts", user_id: 1)
playlist2 = Playlist.create(title: "K-ON!", user_id: 4)
playlist3 = Playlist.create(title: "Pop Punk", user_id: 5)
playlist4 = Playlist.create(title: "Weeb Music", user_id: 3)


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
track11 = Track.create(title: "Rolling Star", artist_id: 3, album_id: 6)
track12 = Track.create(title: "Weightless", artist_id: 4, album_id: 5)
track13 = Track.create(title: "Stella", artist_id: 4, album_id: 5)
track14 = Track.create(title: "Lost in Stereo", artist_id: 4, album_id: 5)
track15 = Track.create(title: "Future Hearts", artist_id: 4, album_id: 8)
track16 = Track.create(title: "Stationary Stationery", artist_id: 5, album_id: 7)
track17 = Track.create(title: "A Day Late", artist_id: 5, album_id: 7)
track18 = Track.create(title: "Paperthin Hymn", artist_id: 5, album_id: 7)
track19 = Track.create(title: "The Feel Good Drag", artist_id: 5, album_id: 7)
track20 = Track.create(title: "The Runaways", artist_id: 5, album_id: 7)

playlistTrack1 = PlaylistTrack.create(track_id: 1, playlist_id: 1)
playlistTrack2 = PlaylistTrack.create(track_id: 2, playlist_id: 1)
playlistTrack3 = PlaylistTrack.create(track_id: 5, playlist_id: 2)
playlistTrack4 = PlaylistTrack.create(track_id: 6, playlist_id: 2)
playlistTrack5 = PlaylistTrack.create(track_id: 6, playlist_id: 2)
playlistTrack6 = PlaylistTrack.create(track_id: 12, playlist_id: 3)
playlistTrack7 = PlaylistTrack.create(track_id: 13, playlist_id: 3)
playlistTrack8 = PlaylistTrack.create(track_id: 14, playlist_id: 3)
playlistTrack9 = PlaylistTrack.create(track_id: 15, playlist_id: 3)
playlistTrack10 = PlaylistTrack.create(track_id: 16, playlist_id: 3)
playlistTrack11 = PlaylistTrack.create(track_id: 17, playlist_id: 3)
playlistTrack12 = PlaylistTrack.create(track_id: 18, playlist_id: 3)
playlistTrack13 = PlaylistTrack.create(track_id: 19, playlist_id: 3)
playlistTrack14 = PlaylistTrack.create(track_id: 20, playlist_id: 3)
playlistTrack15 = PlaylistTrack.create(track_id: 8, playlist_id: 3)
playlistTrack16 = PlaylistTrack.create(track_id: 6, playlist_id: 3)
playlistTrack17 = PlaylistTrack.create(track_id: 1, playlist_id: 4)
playlistTrack18 = PlaylistTrack.create(track_id: 2, playlist_id: 4)
playlistTrack19 = PlaylistTrack.create(track_id: 3, playlist_id: 4)
playlistTrack20 = PlaylistTrack.create(track_id: 4, playlist_id: 4)


