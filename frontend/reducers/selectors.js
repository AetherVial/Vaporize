export const currentUserPlaylists = (state) => (
    Object.values(state.entities.playlists).filter(playlist => {
        return playlist.user_id === state.session.id 
    })
);