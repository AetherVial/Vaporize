class Api::SearchesController < ApplicationController
    def index
        Track.include(:query).limit(5)
        Artist.include(:query).limit(5)
        Album.include(:query).limit(5)
        Playlist.include(:query).limit(5)
        User.include(:query).limit(5)
    end
    private

    def search_params
        params.require(:search).permit(:query)
    end
end
