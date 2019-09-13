class Api::SearchesController < ApplicationController


def show
    query_string = params[:query_string]
    @playlists = Playlist.where("title LIKE ?", "%#{query_string}%").first(5)
    @albums = Album.where("title LIKE ?", "%#{query_string}%").first(5)
    @artists = Artist.where("name LIKE ?", "%#{query_string}%").first(5)
    @tracks = Track.where("title LIKE ?", "%#{query_string}%").first(5)

    render 'api/searches/show'
end 
        
#private
    # def search_params
    #     params.require(:search).permit[:query_string]
    # end
end