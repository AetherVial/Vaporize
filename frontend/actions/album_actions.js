import * as AlbumApiUtils from "../util/album_api_util";
export const RECEIVE_ALL_ALBUMS = "RECEIVE_ALL_ALBUMS";
export const RECEIVE_ALBUM = "RECEIVE_ALBUM";

const receiveAllAlbums = albums => ({
    type: RECEIVE_ALL_ALBUMS,
    albums
});

const receiveAlbum = album => ({
    type: RECEIVE_ALBUM,
    album
});

export const fetchAlbum = id => dispatch => (
    AlbumApiUtils.fetchAlbum(id)
        .then(album => dispatch(receiveAlbum(album)))
)

export const fetchAlbums = () => dispatch => (
    AlbumApiUtils.fetchAlbums()
        .then(albums => dispatch(receiveAllAlbums(albums)))
)
