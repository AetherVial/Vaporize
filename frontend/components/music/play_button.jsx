import React from 'react' 
import * as SVGUtil from '../../util/svg_util'
import {connect} from 'react-redux';

const PlayButton = ({playing}) => {
    if (playing) {
        return (
            <SVGUtil.pause />
        )
    } else {
        return (
            <SVGUtil.play />
        )
    }
}

const mstp = (state) => ({
    playing: state.ui.queue.playing
})


export default connect(mstp)(PlayButton)