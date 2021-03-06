class Api::PlaylistsController < ApplicationController

    def index
        if params[:userId]
            @playlists = User.find(params[:userId]).playlists
        else
            @playlists = Playlist.all
        end
        render :index
    end

    def show
        @playlist = Playlist.find(params[:id])
    end

    def create
        @playlist = Playlist.new(playlist_params)
        @playlist.user_id = current_user.id
        if @playlist.save
            render :show
        else
            render json: @playlist.errors.full_messages, status: 422
        end
    end
    
    def destroy
        @playlist = current_user.playlists.find(params[:id])
        @playlist.destroy
        render :show
    end

    def update
        @playlist = current_user.playlists.find(params[:id])

        if @playlist.update(playlist_params)
            render :show
        else

        render json: @playlist.errors.full_messages, status: 422
        end
    end

    private

    def playlist_params
        params.require(:playlist).permit(:title)
    end
end
