export const fetchTracks = (playlist_id) => {
    return $.ajax({
        method: 'GET',
        url: '/api/tracks',
        data: { playlist_id }
    })
}

export const fetchTrack = id => {
    return $.ajax({
        method: 'GET',
        url: `/api/tracks/${id}`
    })
}

export const fetchTracksByArtist = (artist_id) => {
    return $.ajax({
        method: 'GET',
        url: '/api/tracks',
        data: { artist_id }
    })
}

export const fetchTracksByAlbum = (album_id) => {
    return $.ajax({
        method: 'GET',
        url: '/api/tracks',
        data: { album_id }
    })
}

export const addTrackToPlaylist = (playlistId, id) => {
    return $.ajax({
        method: 'POST',
        url: `api/playlists/${playlistId}/tracks`,
        data: { id }
    });
};

export const removeTrackFromPlaylist = (playlistId, id) => {
    return $.ajax({
        method: 'DELETE',
        url: `api/playlists/${playlistId}/tracks/${id}`
    });
};

