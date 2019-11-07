import React from 'react';
import * as SVGUtil from '../../util/svg_util';
import PlayButton from './play_button';

class MusicBar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            play_button: <SVGUtil.play />,
            currentTime: 0,
            totalTime: 0,
            shuffle: false
        }

        this.handlePlayClick = this.handlePlayClick.bind(this);
        this.toggleMute = this.toggleMute.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handleBack = this.handleBack.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.currentlyPlaying && this.props.currentlyPlaying.id === nextProps.currentlyPlaying.id) {
            return false;
        }
        return true;
    }

    handlePlayClick(e) {
        e.preventDefault();
        let player = document.getElementById("player")
        let button = document.querySelector(".play")
        if (player.paused) {
            this.props.togglePlay();
            player.play();
        } else {
            this.props.togglePlay();
            player.pause();
        }
    }

    handleNext(e) {
        e.preventDefault();
        this.props.goNext();
        this.props.fetchCurrentTrack(this.props.queue.queue[0].id);
    }


    toggleMute(e) {
        e.preventDefault();
        let player = document.getElementById("player")
        if (!player.muted) {
            player.muted = true;
        } else {
            player.muted = false;
        }
    }

    handleBack(e) {
        e.preventDefault();
        let player = document.getElementById("player")
        if (player.currentTime > 2) {
            player.load();
            player.play();
        }
    }

    render() {
        let blah;
        let title;
        let artist;
        let cover;
        if (!this.props.currentlyPlaying) {
            blah = null;
        } else {
            blah = this.props.currentlyPlaying.audioUrl;
            title = this.props.currentlyPlaying.title;
            artist = this.props.currentlyPlaying.artistName;
            cover = this.props.currentlyPlaying.coverUrl;
            document.getElementById("player").src = blah;
            document.getElementById("player").load();
            document.getElementById("player").play();

            const seekbar = document.querySelector('.seekbar')
            const volBar = document.querySelector('.vol-control')
            const audio = document.querySelector('audio')


            audio.addEventListener('timeupdate', () => {
                seekbar.value = audio.currentTime / audio.duration * seekbar.max
            })

            seekbar.addEventListener('change', () => {
                audio.currentTime = audio.duration * seekbar.value / seekbar.max
            })

            volBar.addEventListener('change', () => {
                let x = volBar.value;
                let y = x / 100;
                audio.volume = y;
            })
            
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
                    <div className="controls">
                    <button className="back" onClick={this.handleBack}><SVGUtil.rw /></button>
                        <button className="play" onClick={this.handlePlayClick}>
                            <PlayButton />
                        </button>
                    <button className="forward" onClick={this.handleNext}>
                        <SVGUtil.ff />
                    </button>
                    <audio id="player" onEnded={this.handleNext}
                            currenttime={this.state.currentTime}>
                    </audio>
                    </div>
                        <input onChange={this.seek} className="seekbar" type="range" min="0" max="100" step="0.01"></input>
                </div>
                <div className="volume-rocker">
                    <button className="mute" onClick={this.toggleMute}><SVGUtil.mute /></button>
                    <input className="vol-control" type="range" min="0" max="100" step="1"></input>
                </div>
            </div>
        )
    }
}

export default MusicBar;