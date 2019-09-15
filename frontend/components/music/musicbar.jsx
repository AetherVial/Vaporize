import React from 'react';

class MusicBar extends React.Component {
    constructor(props) {
        super(props)
    }

    shouldComponentUpdate(nextProps) {
        if (this.props.currentlyPlaying && this.props.currentlyPlaying === nextProps.currentlyPlaying) {
            return false;
        }
        return true;
    }

    
    render() {
        let blah;
        let title;
        let artist;
        let cover;
        if (!this.props.currentlyPlaying) {
            blah = null;
        } else {
           // this.props.fetchCurrentTrack(this.props.currentlyPlaying.id)
            blah = this.props.currentlyPlaying.audioUrl;
            title = this.props.currentlyPlaying.title;
            artist = this.props.currentlyPlaying.artistName;
            cover = this.props.currentlyPlaying.coverUrl;
            document.getElementById("player").src = blah;
            document.getElementById("player").load();
            document.getElementById("player").play();
        }

        if (cover) {
            cover = <img src={cover}></img>
        } else {
            cover = <div></div>
        }
        return (

            <div className="musicBar">
                <div className="now-playing-info">
                    {cover}
                    <div className="music-info">
                        <p className="info-song-title">
                            {title}
                        </p>
                        <br/>
                            {artist}
                        </div>
                </div>
                <div className="song-stuff">
                <div>
                    <audio id="player" controls></audio>
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