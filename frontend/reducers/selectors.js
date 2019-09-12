export const currentUserPlaylists = (state) => (
    Object.values(state.entities.playlists).filter(playlist => {
        return playlist.userId === state.session.id 
    })
);

// export const currentPlaylistTracks = (state, ownProps) => {
//     Object.values(state.entities.tracks).filter(track => {
//         playlist.trackIds.includes(id)
//     })
// }