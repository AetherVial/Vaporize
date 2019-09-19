class Api::PlaylistFollowsController < ApplicationController
    def create
        @playlist = Playlist.find_by(id: playlist_follow_params[:playlist_id])
        @playlist_follow = PlaylistFollow.new(playlist_follow_params)
        if @playlist_follow.save
            render 'api/playlists/show'
        else
            render json: @playlist_follow.errors.full_messages, status: 422
        end
    end
    
    def destroy
        @playlist = Playlist.find(params[:playlist_id])
        @playlist_follow = PlaylistFollow.find_by(playlist_id: params[:playlist_id], user_id: params[:user_id])
        @playlist_follow.destroy
        render 'api/playlists/show'
    end

    def index
        @playlist_follows = PlaylistFollow.all
        render :index
    end

    def show
        @playlist_follow = PlaylistFollow.find(params[:id])
    end

    private

    def playlist_follow_params 
        params.require(:playlist_follow).permit(:playlist_id, :user_id)
    end
end
