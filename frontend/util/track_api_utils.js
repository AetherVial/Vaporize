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