import React from 'react';
import TrackIndexItem from './track_index_item';

class TrackIndex extends React.Component{
    constructor(props) {
        super(props)
    }

    componentDidUpdate(prevProps) {
        if (Object.values(prevProps.tracks) === Object.values(this.props.tracks)) {
            this.props.fetchTracks();
        }
    }

    render() {
        const { tracks } = this.props;
        if (!tracks) {
            return (
                null
            );
        }

        const list = Object.values(tracks).map((track, idx) => {
            let key;
            if (!this.props.tracks) {
                key = Math.random();
            } else {
                key = track.title + idx;
            }
            return (
                <TrackIndexItem
                    key={key}
                    track={track}
                    idx={idx + 1}
                />
            );
        });

        return(
            <div className="playlists">
            <ul>{list}</ul>
            </div>
        )
    }
}

export default TrackIndex;