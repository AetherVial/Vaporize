class Api::PlaylistsController < ApplicationController

    def index
        @playlists = Playlist.all
    end

    def show
        @playlists = Playlist.find(params[:id])
    end

    def create
        @playlist = Playlist.new(playlist_params)

        @playlist.user_id = current_user.user_id

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
        params.require(:playlist).permit(:name)
    end
end
