import React from 'react';
import * as SVGUtil from '../../util/svg_util';

class MusicBar extends React.Component {
    constructor(props) {
        super(props)
        this.handlePlayClick = this.handlePlayClick.bind(this);
        this.toggleMute = this.toggleMute.bind(this);
        this.renderTotalTime = this.renderTotalTime.bind(this);
        this.handleNext = this.handleNext.bind(this)
    }

    shouldComponentUpdate(nextProps, nextState) {
        // console.log(this.props.currentlyPlaying)
        // console.log(nextProps.currentlyPlaying)
        if (this.props.currentlyPlaying && this.props.currentlyPlaying.id === nextProps.currentlyPlaying.id) {
            return false;
        } else if (!nextProps.playing) {
            return false;
        }
        return true;
    }

    handlePlayClick(e) {
        e.preventDefault();
        let player = document.getElementById("player")
        let button = document.querySelector("play")
        if (player.paused) {
            player.play();
            this.innerHtml = <SVGUtil.play />
        } else {
            player.pause();
            this.innerHtml = <SVGUtil.pause />
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

    handleSlide(e) {
        e.preventDefault();
        
    }

    renderTotalTime() {
        const player = document.getElementById('player');

        if (player && player.duration) {
            const duration = player.duration;
            const total_minute = parseInt(duration / 60) % 60;
            const total_seconds_long = duration % 60;
            const total_seconds = total_seconds_long.toFixed();
            const totalTime = (total_minute < 10 ? "0" + total_minute :
                total_minute) + ":" + (total_seconds < 10 ? "0" + total_seconds : total_seconds);

            return totalTime;
        } else {
            return '--:--';
        }
    }

    render() {
        let blah;
        let title;
        let artist;
        let cover;
        let duration;
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

            const audio = document.querySelector('audio')
            const seekbar = document.querySelector('.seekbar')
            const volBar = document.querySelector('.vol-control')
            duration = parseInt(audio.duration / 60)

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
                    <button className="back"><SVGUtil.rw /></button>
                        <button className="play" onClick={this.handlePlayClick}><SVGUtil.play /></button>
                    <button className="forward" onClick={this.handleNext}>
                        <SVGUtil.ff />
                    </button>
                    <audio id="player" onEnded={this.handleNext}></audio>
                    </div>
                    <input onChange={this.seek} className="seekbar" type="range" min="0" max="100" step="0.01"></input>
                </div>
                <div className="volume-rocker">
                    <button className="mute" onClick={this.toggleMute}><SVGUtil.mute /></button>
                    <input className="vol-control" type="range" min="0" max="100" step="1"></input>
                    {/* <p>{this.renderTotalTime()}</p> */}
                </div>
            </div>
        )
    }
}

export default MusicBar;