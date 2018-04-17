const initialState = [ 
    {
        id: 'firgreoi3409',
        url: 'http://www.takefoto.ru/userfiles/image/Dlya%20Statey/09.09.2014/rassvet_zakat/rassvet_zakat_9.jpg',
        likes: 23,
        caption: 'something beautiful',
        comments: [
            {
                name: 'Paul',
                comment: 'Cool!!' 
            }
        ]
    }, 
    {
        id: 'oktrgfep044',
        url: 'http://www.bugaga.ru/uploads/posts/2016-11/1479306641_detenysh-tyulenya-1.jpg',
        likes: 19,
        caption: 'chto eto za hyina())(',
        comments: []
    }
];

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