export const currentUserPlaylists = (state) => (
    Object.values(state.entities.playlists).filter(playlist => {
        return playlist.userId === state.session.id 
    })
);

export const userFollowedPlaylists = (state) => (
    Object.values(state.entities.playlists).filter(playlist => {
        return state.entities.users[state.session.id].followedPlaylists.includes(playlist.id)
    })
)

export const selectTracks = (state, trackIds) => (
    trackIds.map(id => state.entities.tracks[id])
)

export const searchTracks = (object) => {
    Object.keys(object).map(val => {
        return parseInt(val);
    })
}
