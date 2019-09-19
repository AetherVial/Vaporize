export const fetchPlaylistFollows = (playlistId) => {
    return $.ajax({
        method: 'GET',
        url: '/api/playlist_follows',
        data: { playlistId }
    })
}

export const fetchPlaylistFollow = id => {
    return $.ajax({
        method: 'GET',
        url: `/api/playlist_follows/${id}`
    })
}

export const createPlaylistFollow = (playlistId, userId)=> {
    return $.ajax({
        method: 'POST',
        url: `/api/playlist_follows`,
        // url: `/api/playlists/${playlistId}/playlist_follows`,
        data: {playlist_follow: {playlist_id: playlistId, user_id: userId}}
    })
}


export const deletePlaylistFollow = (playlistId, userId) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/playlist_follows/0`,
        data: { playlist_id: playlistId, user_id: userId }
    })
}
