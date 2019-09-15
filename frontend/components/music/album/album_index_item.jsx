import React from 'react';
import { connect } from 'react-redux';
import {withRouter, Link} from 'react-router-dom';
import {fetchAlbum} from '../../../actions/album_actions';

class AlbumIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        if (!this.props.album) {
            return null
        } else {
            return (
            <Link to={`/albums/${this.props.album.album.id}`} className="albumIndexItem">
                    <img className="cover-art-index" src={this.props.album.album.photoUrl} />
                    {this.props.album.album.title}
            </Link> 
            )
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {album: ownProps.album}
}

const mapDispatchToProps = dispatch => ({
    fetchAlbum: (id) => dispatch(fetchAlbum(id))
})



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AlbumIndexItem));