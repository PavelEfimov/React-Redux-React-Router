import React, { Component } from 'react';

import '../../Styles/Single.css';

import like from './like.png';

class Single extends Component {
    constructor(props) {
        super(props);

        this.changeName = e => {
            this.setState({ name: e.target.value});        
        },

        this.changeComment = e => {
            this.setState({ comment: e.target.value});        
        },

        this.add = () => {           
            const { item: { id }, onAddComment } = this.props;  
            onAddComment(this.name.value, this.comment.value, id);      
            this.name.value = '';
            this.comment.value = '';
        },
        
        this.increaseLikes = () => {
            const { item: { id }, onIncreaseLikes } = this.props;
            onIncreaseLikes(id);
        };  
    }

    componentDidMount() {
        this.name.focus();
    }

    render() {
        const { item: { url, likes, comments, id, caption} } = this.props;
        const { add } = this;
        return (         
            <div className='single'>
            <div className='single-clearFix'>
                <div className='single-image'>
                    <img src = { url } alt='image' />
                    <span>{ caption }</span>
                    <button onClick={this.increaseLikes} className='image-likes'><img src={ like } alt='likes: '/>{likes}</button>          
                </div>
                <div className='single-comments'>
                {comments.map( (item, index) => (
                        <div className='comments-comment' key={index}>
                            <span>{item.name}: </span> 
                            <span>{item.comment}</span>                            
                        </div>
                    ))}
                    <div className='comments-form'> 
                    <input type='text' placeholder='name' ref = { node => this.name = node } />
                    <input type='text' placeholder='comment' ref = { node => this.comment = node } />
                    <button onClick={ add }>Добавить</button>
                    </div>
                </div>                  
            </div>
            </div>
        );
    }
}
export default Single;
