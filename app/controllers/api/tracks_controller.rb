class Api::TracksController < ApplicationController
    def index 
        playlist = Playlist.find_by(id: params[:playlist_id])
        artist = Artist.find_by(id: params[:artist_id])
        album = Album.find_by(id: params[:album_id])
        
        if (album)
            @tracks = album.tracks
        elsif (artist)
            @tracks = artist.tracks
        elsif (playlist)
            @tracks = playlist.tracks
        else
            @tracks = Track.all
        end
        render :index
    end

    def show
        @track = Track.find(params[:id])
    end

    def destroy
        @playlist = current_user.playlists.find(params[:playlist_id])
        @playlist_track = PlaylistTrack.where('playlist_id = ? AND track_id = ?', params[:playlist_id], params[:id]).first
        @playlist_track.destroy
        render 'api/playlists/show'
    end

    def create 
        @playlist = current_user.playlists.find(params[:playlist_id])
        @track = Track.find(params[:id])
        if @track
            @playlist.track_ids += [params[:id]]
            render json: ["Track added!"], status: 200;
        end
    end

    private

    def artist_params
        params.require(:track).permit(:title, :artist_id, :album_id, :playlist_id)
    end
end
