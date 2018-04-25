import React, { Component, createRef } from 'react';

import '../../Styles/Single.css';

import like from './like.png';

class Single extends Component {
    constructor(props) {
        super(props);
        this.nameRef = createRef()
        this.commentRef = createRef()
        this.state = {
            name: '',
            comment: ''
        }
        this.changeName = e => {
            this.setState({ name: e.target.value});        
        },

        this.changeComment = e => {
            this.setState({ comment: e.target.value});        
        },

        this.add = () => {           
            const { item: { id }, onAddComment } = this.props;  
            const { name, comment } = this.state;
            onAddComment(name, comment, id);      
            this.nameRef.current.value = '';
            this.commentRef.current.value = '';
            this.setState({ name: '', comment: ''});
        },
        
        this.increaseLikes = () => {
            const { item: { id }, onIncreaseLikes } = this.props;
            onIncreaseLikes(id);
        };  
    }

    componentDidMount() {
        this.nameRef.current.focus();
    }

    render() {
        const { item: { url, likes, comments, id, caption} } = this.props;
        const { add, increaseLikes, changeName, changeComment } = this;
        const { name, comment } = this.state;
        return (         
            <div className = 'single' >
            <div className = 'single-clearFix' >
                <div className = 'single-image' >
                    <img src = { url } alt = 'image' />
                    <span>{ caption }</span>
                    <button onClick = { increaseLikes } className = 'image-likes' ><img src = { like } alt='likes: '/>{ likes }</button>          
                </div>
                <div className = 'single-comments' >
                {comments.map( (item, index) => (
                        <div className = 'comments-comment' key = { index } >
                            <span>{ item.name }: </span> 
                            <span>{ item.comment }</span>                            
                        </div>
                    ))}
                    <div className = 'comments-form'> 
                    <input type = 'text' ref = { this.nameRef } onChange = { changeName } />
                    <div className = 'label-box'>
                        <label  className = { name !== '' ? 'label-transform' : '' }>Your name</label>
                    </div>
                    <input type = 'text' ref = { this.commentRef } onChange = { changeComment } />
                    <div className = 'label-box'>
                        <label  className = { comment !== '' ? 'label-transform' : '' }>Your comment</label>
                    </div>
                    <button onClick = { add } >Добавить</button>
                    </div>
                </div>                  
            </div>
            </div>
        );
    }
}

export default Single;
