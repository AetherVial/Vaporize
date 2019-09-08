export const fetchPlaylists = (userId) => {
    return $.ajax({
        method: 'GET',
        url: '/api/playlists',
        data: { userId }
    })
}

export const fetchPlaylist = playlist => {
    return $.ajax({
        method: 'GET',
        url: `/api/playlists/${playlist.id}`
    })
}

export const updatePlaylist = playlist => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/playlists/${playlist.id}`,
        data: playlist
    })
}

export const createPlaylist = playlist => {
    return $.ajax({
        method: 'POST',
        url: `/api/playlists/`,
        data: playlist
    })
}

export const deletePlaylist = id => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/playlists/${id}`,
    })
}

