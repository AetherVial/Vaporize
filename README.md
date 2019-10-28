# [Vaporize](https://vaporize-sh.herokuapp.com)

------

### Tech Stack

* Ruby on Rails
* React / Redux
* PostgreSQL
* AWS S3 Cloud Storage

------

### [Live Link](https://vaporize-sh.herokuapp.com)

Welcome to Vaporize, a faithful Spotify clone utilizing a Ruby on Rails, React / Redux and PostgreSQL stack. Spotify is a web app that lets users add music to their collections, create, delete, and update playlists, and follow users, playlists and artists. Vaporize aims to give users most of this functionality while demonstrating the my proficiency in the aforementioned technology stack. I hope you'll take a look around and enjoy using it!

------
### How to Use
------
![Demo Login and Splash Page](https://github.com/AetherVial/Vaporize/blob/master/app/assets/images/demo.gif)

To use Vaporize, you can go to the live link up top, which takes you to the site hosted on Heroku or you can download this repository and run the following: 

* ```npm init ```
* ```npm install ```
* ```npm start ```

and go to localhost:3000 in your browser of choice (preferebly Chrome).

------
### Features
------
Vaporize is a full stack Spotify clone with most of the features you would expect out of Spotify. Users have the ability to perform CRUD operations on playlists as well as listen to and search for songs, artists, albums and other playlists. 

![New Playlist](https://github.com/AetherVial/Vaporize/blob/master/app/assets/images/newplaylist.gif)
![Add to Playlist](https://github.com/AetherVial/Vaporize/blob/master/app/assets/images/addto.gif)
![Tabs](https://github.com/AetherVial/Vaporize/blob/master/app/assets/images/tabs.gif)
------
### Code Examples
------
Below are some code snippets of this application:

* The following code snippet is part of the component that holds a single track. It creates a play queue using the current playlist, album, or artist and starts from the selected track and goes up to the end. It then adds the previous tracks in the list to the end of the queue.

```js
handlePlay(e) {
        e.preventDefault();
        this.props.fetchCurrentTrack(this.props.track.id)
        let i = findTrackIndex(this.props.tracks, this.props.track.id)
        let q = makeQueue(i, this.props.tracks)
        this.props.receiveCurrentTrackList(q)
    }
```
* The following code snippet is responsible for creating a playlist from the modal form. Vaporize creates a form using a modal element to allow for the creation of a playlist and then redirects the user to that playlist. When a playlist is created, it closes the modal, performs the creation of the playlist on the backend, then takes the user to the playlist. It also performs a validation on the front end that disallows a user from making a playlist with no title.

```js
handleSubmit(e) {
        e.preventDefault();
        let close = document.getElementsByClassName("close");
        if (this.state.title !== '') {
            const playlist = Object.assign({}, this.state);
            this.props.action(playlist).then(
                newPlaylist => {
                    let id = (Object.values(newPlaylist.playlist)[0].id)
                    this.props.history.push(`/playlists/${id}`)
                })
        }
        this.setState({
            title: ''
        })
        $(close).click();
    }
  ```
  
 * The following Ruby on Rails code snippet is from the backend API that puts a song in a playlist. It utilizes a joins table called ```playlist_tracks``` in order to form a many to many relationship between tracks and playlists they belong to. When putting a track on a playlist, the backend simply uses the following to create an entry in the joins table and the front end action does an AJAX call to pull data from this joins table to populate a playlist the user is looking at.
 
 ```
 def create
        @playlist_track = PlaylistTrack.new(playlist_track_params)
        if @playlist_track.save
            render :show
        else
            render json: @playlist_track.errors.full_messages, status: 422
        end
    end
 ```
 
---
Thanks for taking a look at Vaporize and I hope you'll try it out!

Contributors:

Stanton Huang



