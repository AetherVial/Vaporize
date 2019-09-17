# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# require 'open-uri'
User.destroy_all
Playlist.destroy_all
Artist.destroy_all
Album.destroy_all
Track.destroy_all
PlaylistTrack.destroy_all
require 'open-uri'

user1 = User.create(username: "DemoUser", password: "hailsatan", first_name: "foo", last_name: "bar", email: "foobar@demo.com")
user2 = User.create(username: "MegaloBox", password: "12345678", first_name: "Joe", last_name: "the Boxer", email: "box@joesgym.io")
user3 = User.create(username: "AllMightFanBoy", password: "allmight!", first_name: "Izuku", last_name: "Midoriya", email: "deku@allmightfanclub.com")
user4 = User.create(username: "HoneySweetTeaTime", password: "mugistronk", first_name: "Tsumugi", last_name: "Kotobuki", email: "mugi@keion.io")
user5 = User.create(username: "4HeadRitsu", password: "drummer123", first_name: "Ritsu", last_name: "Tainaka", email: "ritsu@keion.io")

artist1 = Artist.create(name: "Hikaru Utada")
photo1 = open('https://vaporize-pro.s3-us-west-1.amazonaws.com/utada.jpg')
artist1.photo.attach(io: photo1, filename: 'utada.jpg')

artist2 = Artist.create(name: "Hokago Tea Time")
photo2 = open('https://vaporize-pro.s3-us-west-1.amazonaws.com/HTT.jpg')
artist2.photo.attach(io: photo2, filename: 'HTT.jpg')

artist3 = Artist.create(name: "YUI")
photo3 = open('https://vaporize-pro.s3-us-west-1.amazonaws.com/yui.jpeg')
artist3.photo.attach(io: photo3, filename: 'yui.jpeg')

artist4 = Artist.create(name: "All Time Low")
photo4 = open('https://vaporize-pro.s3-us-west-1.amazonaws.com/alltimelow.jpeg')
artist4.photo.attach(io: photo4, filename: 'alltimelow.jpeg')

artist5 = Artist.create(name: "Anberlin")
photo5 = open('https://vaporize-pro.s3-us-west-1.amazonaws.com/anberlin.jpeg')
artist5.photo.attach(io: photo5, filename: 'anberlin.jpeg')

album1 = Album.create(title: "Don't Think Twice", artist_id: artist1.id)
cover = open('https://vaporize-pro.s3-us-west-1.amazonaws.com/dontthinktwice.jpg')
album1.photo.attach(io: cover, filename: 'dontthinktwice.jpg')

album2 = Album.create(title: "Hokago Tea Time II", artist_id: artist2.id)
cover2 = open('https://vaporize-pro.s3-us-west-1.amazonaws.com/HO-KAGO_TEA_TIME_Second.jpg')
album2.photo.attach(io: cover2, filename: 'teatime.jpg')

album3 = Album.create(title: "Singing! - Single", artist_id: artist2.id)
cover3 = open('https://vaporize-pro.s3-us-west-1.amazonaws.com/Singing!_Song_Cover.jpg')
album3.photo.attach(io: cover3, filename: 'singing.jpg')

album4 = Album.create(title: "No, Thank You! - Single", artist_id: artist2.id)
cover4 = open('https://vaporize-pro.s3-us-west-1.amazonaws.com/nothankyou.png')
album4.photo.attach(io: cover4, filename: 'nothankyou.png')

album5 = Album.create(title: "Nothing Personal", artist_id: artist4.id)
cover5 = open('https://vaporize-pro.s3-us-west-1.amazonaws.com/Alltimelownothingpersonal.jpg')
album5.photo.attach(io: cover5, filename: 'nothingpersonal.jpg')

album6 = Album.create(title: "Rolling Star - Single", artist_id: artist3.id)
cover6 = open('https://vaporize-pro.s3-us-west-1.amazonaws.com/Yuirollingstar.jpg')
album6.photo.attach(io: cover6, filename: 'rollingstar.jpg')

album7 = Album.create(title: "Never Take Friendship Personal", artist_id: 5)
cover7 = open('https://vaporize-pro.s3-us-west-1.amazonaws.com/nvrtakefriendshippersonal.jpg')
album7.photo.attach(io: cover7, filename: 'nvrtkfrshp.jpg')

album8 = Album.create(title: "Future Hearts", artist_id: 4)
cover8 = open('https://vaporize-pro.s3-us-west-1.amazonaws.com/futurehearts.jpg')
album8.photo.attach(io: cover8, filename: 'futurehearts.jpg')

playlist1 = Playlist.create(title: "Kingdom Hearts", user_id: 1)
playlist2 = Playlist.create(title: "K-ON!", user_id: 4)
playlist3 = Playlist.create(title: "Pop Punk", user_id: 5)
playlist4 = Playlist.create(title: "Weeb Music", user_id: 3)


track1 = Track.create(title: "Don't Think Twice", artist_id: 1, album_id: 1)
audio1 = open('https://vaporize-pro.s3-us-west-1.amazonaws.com/dontthinktwice.mp3')
track1.audio.attach(io: audio1, filename: 'dontthinktwice.mp3')

track2 = Track.create(title: "Simple and Clean", artist_id: 1, album_id: 1)
audio2 = open('https://vaporize-pro.s3-us-west-1.amazonaws.com/simpleandclean.mp3')
track2.audio.attach(io: audio2, filename: 'simpleandclean.mp3')

track3 = Track.create(title: "Fuwa-Fuwa Time", artist_id: 2, album_id: 2)
audio3 = open('https://vaporize-pro.s3-us-west-1.amazonaws.com/FuwaFuwaTime.mp3')
track3.audio.attach(io: audio3, filename: 'fuwafuwatime.mp3')

track4 = Track.create(title: "Fude Pen - Boru Pen", artist_id: 2, album_id: 2)
audio4 = open('https://vaporize-pro.s3-us-west-1.amazonaws.com/FudePenBoruPen.mp3')
track4.audio.attach(io: audio4, filename: 'fudepen.mp3')

track5 = Track.create(title: "U & I", artist_id: 2, album_id: 2)
audio5 = open('https://vaporize-pro.s3-us-west-1.amazonaws.com/UandI.mp3')
track5.audio.attach(io: audio5, filename: 'uandi.mp3')

track6 = Track.create(title: "Pure Pure Heart", artist_id: 2, album_id: 2)
audio6 = open('https://vaporize-pro.s3-us-west-1.amazonaws.com/PurePureHeart.mp3')
track6.audio.attach(io: audio6, filename: 'purepureheart.mp3')

track7 = Track.create(title: "Tenshi Ni Fureta Yo", artist_id: 2, album_id: 2)
audio7 = open('https://vaporize-pro.s3-us-west-1.amazonaws.com/TenshiNiFuretaYo.mp3')
track7.audio.attach(io: audio7, filename: 'tenshini.mp3')

track8= Track.create(title: "Samidare 20 Love", artist_id: 2, album_id: 2)
audio8 = open('https://vaporize-pro.s3-us-west-1.amazonaws.com/Samidare20Love.mp3')
track8.audio.attach(io: audio8, filename: 'samidare.mp3')

track9 = Track.create(title: "Singing!", artist_id: 2, album_id: 3)
audio9 = open('https://vaporize-pro.s3-us-west-1.amazonaws.com/singing.mp3')
track9.audio.attach(io: audio9, filename: 'singing.mp3')

track10 = Track.create(title: "No, Thank You!", artist_id: 2, album_id: 4)
audio10 = open('https://vaporize-pro.s3-us-west-1.amazonaws.com/nothankyou.mp3')
track10.audio.attach(io: audio10, filename: 'nothankyou.mp3')

track11 = Track.create(title: "Rolling Star", artist_id: 3, album_id: 6)
audio11 = open('https://vaporize-pro.s3-us-west-1.amazonaws.com/rollingstar.mp3')
track11.audio.attach(io: audio11, filename: 'rollingstar.mp3')

track12 = Track.create(title: "Weightless", artist_id: 4, album_id: 5)
audio12 = open('https://vaporize-pro.s3-us-west-1.amazonaws.com/weightless.mp3')
track12.audio.attach(io: audio12, filename: 'weightless.mp3')

track13 = Track.create(title: "Stella", artist_id: 4, album_id: 5)
audio13 = open('https://vaporize-pro.s3-us-west-1.amazonaws.com/stella.mp3')
track13.audio.attach(io: audio13, filename: 'stella.mp3')

track14 = Track.create(title: "Lost in Stereo", artist_id: 4, album_id: 5)
audio14 = open('https://vaporize-pro.s3-us-west-1.amazonaws.com/lostinstereo.mp3')
track14.audio.attach(io: audio14, filename: 'lostinstereo.mp3')

track15 = Track.create(title: "Old Scars / Future Hearts", artist_id: 4, album_id: 8)
audio15 = open('https://vaporize-pro.s3-us-west-1.amazonaws.com/futurehearts.mp3')
track15.audio.attach(io: audio15, filename: 'osfh.mp3')

track16 = Track.create(title: "Stationary Stationery", artist_id: 5, album_id: 7)
audio16 = open('https://vaporize-pro.s3-us-west-1.amazonaws.com/stationarystationery.mp3')
track16.audio.attach(io: audio16, filename: 'stationarystationery.mp3')

track17 = Track.create(title: "A Day Late", artist_id: 5, album_id: 7)
audio17 = open('https://vaporize-pro.s3-us-west-1.amazonaws.com/adaylate.mp3')
track17.audio.attach(io: audio17, filename: 'adaylate.mp3')

track18 = Track.create(title: "Paperthin Hymn", artist_id: 5, album_id: 7)
audio18 = open('https://vaporize-pro.s3-us-west-1.amazonaws.com/paperthinhymn.mp3')
track18.audio.attach(io: audio18, filename: 'paperthinhymn.mp3')

track19 = Track.create(title: "The Feel Good Drag", artist_id: 5, album_id: 7)
audio19 = open('https://vaporize-pro.s3-us-west-1.amazonaws.com/feelgooddrag.mp3')
track19.audio.attach(io: audio19, filename: 'feelgooddrag.mp3')

track20 = Track.create(title: "The Runaways", artist_id: 5, album_id: 7)
audio20 = open('https://vaporize-pro.s3-us-west-1.amazonaws.com/therunaways.mp3')
track20.audio.attach(io: audio20, filename: 'therunaways.mp3')


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


