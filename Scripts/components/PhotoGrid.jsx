import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../Styles/PhotoGrid.css'

import like from './like.png';
import comment from './comment.png';

class PhotoGrid extends Component {
    constructor(props) {
        super(props);
        this.increaseLikes = () => {
            const { item: { id }, onIncreaseLikes } = this.props;
            onIncreaseLikes(id);
        };
    }

    render() { 
        const { item: { likes, url, id, caption, comments} } = this.props;
        return(
            <div className='photoGrid'>
                <img src={url} alt='image' className='photoGrid-image'/>
                <div className='photoGrid-description'>
                    <span>{ caption }</span>
                </div>
                <div className='photoGrid-floatFix'>
                    <button className='photoGrid-button button-first' onClick={this.increaseLikes}>
                        <img src={ like } alt='likes: '/>{likes}
                    </button>
                    <span>{}</span>
                    <Link to={`/Home/Posts/${id}`} >
                        <button className='photoGrid-button button-second'>
                            <img src={ comment } alt='comments: '/>{comments.length}
                        </button>
                    </Link>
                </div>
            </div>
        );
    };
}

export default PhotoGrid;