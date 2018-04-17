import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, Switch, Link, Redirect, withRouter } from 'react-router-dom';

import IncreaseLikes from './actions/IncreaseLikes';
import AddComment from './actions/AddComment';

import Main from './components/Main';
import Single from './components/Single';
import Title from './components/Title';
import NotFound from './components/NotFound';
import PhotoGrid from './components/PhotoGrid';

//<Redirect to="/Home" from="/" />

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { data, onAddComment, onIncreaseLikes } = this.props;
        return (
            <div>
                <Title />
                    <Switch>
                        <Route path='/' exact = {true} render={ () =>  <Main {...this.props}/> }/>
                        {data.map( (item, index) => (
                            <Route path={`/Home/Posts/${item.id}`} render={ () => ( 
                            <Single { ...{item, onAddComment, onIncreaseLikes} } key={index} />
                            )}  key={index} /> ))}
                        <Route  component={NotFound} />
                    </Switch>
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
        onIncreaseLikes: IncreaseLikes,
        onAddComment: AddComment
    }, dispatch);
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
                    