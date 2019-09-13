import React from 'react';

class MusicBar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div className="musicBar">
                <div className="now-playing-info">
                    <img src={window.Yacht}></img>
                    <div className="music-info">
                        <p className="info-song-title">
                            Hello my name is song-info
                        </p>
                        <br/>
                            Hello my name is artist-info
                        </div>
                </div>
                <div className="song-stuff">
                <div className="buttons">
                    <a href="#">back</a>
                    <a href="#">Play/Pause</a>
                    <a href="#">ff</a>
                </div>
                <div className="playing-bar">
                    <div className="start"></div>
                    <div className="progress"></div>
                </div>
                </div>
                <div className="volume-rocker">
                    hi my name is volume
                </div>
            </div>
        )
    }
}

export default MusicBar;