import React from 'react';
const formatTime = time => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    if (seconds < 10) {
        return minutes + ':0' + seconds;
    } else {
        return minutes + ':' + seconds;
    }
}


class Time extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTime: 0,
            totalTime: 0
        }

    }

    

    render() {
        if (this.props.audio) {
            this.props.audio.addEventListener('timeupdate', () => {
                // seekbar.value = this.audio.currentTime / this.audio.duration * seekbar.max;
                this.setState({ currentTime: this.audio.currentTime });
                this.setState({ totalTime: this.audio.duration });
            })
        }

        return (
            <div>{formatTime(this.state.currentTime)} {formatTime(this.state.totalTime)}</div>
        )
    }
}

export default Time;