class Api::TracksController < ApplicationController
    def index 
        playlist = Playlist.find_by(id: params[:playlist_id])
        if (playlist)
            @tracks = playlist.tracks
        else
            @tracks = Track.all
        end
        render :index
    end

    def show
        @track = Track.find(params[:id])
    end

    private

    def artist_params
        params.require(:track).permit(:title, :artist_id, :album_id, :playlist_id)
    end
end
