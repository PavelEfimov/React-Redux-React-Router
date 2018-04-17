import initialState from './InitialState';

let newState;

export default (state = initialState, action) => {
    switch(action.type) {
        case 'INCREASE_LIKES': {
            newState = [...state.filter(item => item.id !== action.id)];
            newState.splice(state.findIndex(i => i.id === action.id), 0 , Object.assign({}, ...state.filter(item => item.id === action.id), { likes: state.filter(item => item.id === action.id)[0].likes + 1 } ));
            return newState;
        }
        case 'ADD_COMMENT': {
            newState = [...state.filter(item => item.id !== action.id)];
            newState.splice(state.findIndex(i => i.id === action.id), 0, Object.assign({}, ...state.filter(item => item.id === action.id), { comments: [...state.filter(item => item.id === action.id)[0].comments, {name: action.name, comment: action.comment}] }));
            return newState;
        }
        default: 
        return state;
        }
};

/*return Object.assign({}, state, {likes: state.likes + 1 })*/