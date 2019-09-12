import React from 'react';
import TrackIndexItem from './track_index_item';

class TrackIndex extends React.Component{
    constructor(props) {
        super(props)
    }

    render() {
        const { tracks } = this.props;
        console.log(tracks)
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
            <div>
            <h1>playlist index :D</h1>
            <ul>{list}</ul>
            </div>
        )
    }
}

export default TrackIndex;