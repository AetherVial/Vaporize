import * as ArtistApiUtils from "../util/artist_api_util";
export const RECEIVE_ALL_ARTISTS = "RECEIVE_ALL_ARTISTS";
export const RECEIVE_ARTIST = "RECEIVE_ARTIST";

const receiveAllArtists = artists => ({
    type: RECEIVE_ALL_ARTISTS,
    artists
});

const receiveArtist = artist => ({
    type: RECEIVE_ARTIST,
    artist
});

export const fetchArtist = id => dispatch => (
ArtistApiUtils.fetchArtist(id)
.then(artist => dispatch(receiveArtist(artist)))
)

export const fetchArtists = () => dispatch => (
ArtistApiUtils.fetchArtists()
.then(artists => dispatch(receiveAllArtists(artists)))
)

