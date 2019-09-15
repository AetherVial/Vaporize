import React from 'react';

class MusicBar extends React.Component {
    constructor(props) {
        super(props)
    }

    // componentDidUpdate(prevProps) {
        // console.log(this.props.currentlyPlaying)
        // console.log(prevProps)
        // if (this.props.currentlyPlaying && this.props.currentlyPlaying != prevProps.currentlyPlaying) {
        // // let blah = this.props.currentlyPlaying.audioUrl
        // // document.getElementById("player").src = blah;
        // console.log("hola theo")
        // }
    // }
    

    render() {
        console.log("im rerendering")
        let blah;

        if (!this.props.currentlyPlaying) {
            blah = null;
        } else {
           // this.props.fetchCurrentTrack(this.props.currentlyPlaying.id)
            let blah = this.props.currentlyPlaying.audioUrl
            
            document.getElementById("player").src = blah;
            document.getElementById("player").load();
            // document.getElementById("player").play();
        }
        return (

            <div className="musicBar">
                <div className="now-playing-info">
                    <img src={window.Yacht}></img>
                    <div className="music-info">
                        <p className="info-song-title">
                            Hello my name is song-info
                        </p>
                        <br/>
                            {blah}
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