import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import IncreaseLikes from './actions/IncreaseLikes';

import PhotoGrid from './components/PhotoGrid';

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { data, onIncreaseLikes } = this.props;
        return (
            <div>
                {data.map( (item, index) => <PhotoGrid 
                    url={ item.url } 
                    likes = { item.likes } 
                    comments = { item.comments.length }  
                    onIncreaseLikes = { onIncreaseLikes } key = { item.id }/>)}
            </div>
        );
    };
};

const mapStateToProps = state => {
    return {
        data: state.listReducer
    }    
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        onIncreaseLikes: IncreaseLikes
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);