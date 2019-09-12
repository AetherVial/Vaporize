export const fetchPlaylistTracks = (playlistId) => {
    return $.ajax({
        method: 'GET',
        url: '/api/playlist_tracks',
        data: { playlistId }
    })
}

export const fetchPlaylistTrack = id => {
    return $.ajax({
        method: 'GET',
        url: `/api/playlist_tracks/${id}`
    })
}

export const createPlaylistTrack = playlist_track => {
    return $.ajax({
        method: 'POST',
        url: `/api/playlist_tracks`,
        data: {playlist_track}
    })
}


export const deletePlaylistTrack = id => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/playlist_tracks/${id}`,
    })
}