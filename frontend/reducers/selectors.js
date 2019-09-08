export const currentUserPlaylists = (state) => (
    Object.values(state.entities.playlists).filter(playlist => {
        return playlist.userId === state.session.id 
    })
);