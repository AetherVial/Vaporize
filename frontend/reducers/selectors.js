export const currentUserPlaylists = (state) => (
    Object.values(state.entities.playlists).filter(playlist => {
        return playlist.userId === state.session.id 
    })
);

export const selectTracks = (state, trackIds) => (
    trackIds.map(id => state.entities.tracks[id])
)

// export const currentPlaylistTracks = (state, ownProps) => {
//     Object.values(state.entities.tracks).filter(track => {
//         playlist.trackIds.includes(id)
//     })
// }