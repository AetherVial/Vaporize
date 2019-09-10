class Api::PlaylistTracksController < ApplicationController
    def index
        @playlists_tracks = PlaylistTrack.all
        render :index
    end

    def show
        @playlist_track = PlaylistTrack.find(params[:id])
    end

    def create
        @playlist_track = PlaylistTrack.new(playlist_track_params)
        if @playlist_track.save
            render :show
        else
            render json: @playlist_track.errors.full_messages, status: 422
        end
    end
    
    def destroy
        @playlist_track = playlist_tracks.find(params[:id])
        @playlist_track.destroy
        render :show
    end

    private

    def playlist_track_params
        params.require(:playlist_track).permit(:playlist_id, :track_id)
    end
end

