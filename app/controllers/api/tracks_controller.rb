class Api::TracksController < ApplicationController
    def index 
        @tracks = Track.all
        render :index
    end

    def show
        @track = Track.find(params[:id])
    end

    private

    def artist_params
        params.require(:track).permit(:title, :artist_id, :album_id)
    end
end
