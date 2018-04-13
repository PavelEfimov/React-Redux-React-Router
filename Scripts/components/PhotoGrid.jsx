import React from 'react';

import '../../Styles/PhotoGrid.css'

import like from './like.png';
import comment from './comment.png';

const PhotoGrid = ({ likes, url, comments, onIncreaseLikes }) => (
    <div className='photoGrid'>
    {console.log(typeof onIncreaseLikes)}
        <img src={url} alt='image' className='photoGrid-image'/>
        <div className='photoGrid-description'>
            rtyf3qyujtrfeyujtrfet
        </div>
        <div className='photoGrid-floatFix'>
            <button className='photoGrid-button button-first' onClick={onIncreaseLikes}>
            <img src={ like } alt='likes: '/>{likes}
            </button>
            <button className='photoGrid-button button-second'>
                <img src={ comment } alt='comments: '/>{comments}
            </button>
        </div>
    </div>
);

export default PhotoGrid;