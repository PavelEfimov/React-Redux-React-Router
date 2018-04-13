const initialState = 
    {
        id: 'firgreoi3409',
        url: 'http://www.takefoto.ru/userfiles/image/Dlya%20Statey/09.09.2014/rassvet_zakat/rassvet_zakat_9.jpg',
        likes: 23,
        comments: [
            {
                name: 'Paul',
                comment: 'Cool!!' 
            }
        ]
    };


export default (state = initialState, action) => {
    switch(action.type) {
        case 'INCREASE_LIKES': 
            return Object.assign({}, state, {likes: state.likes + 1 })
        default: 
        return state;
        }
};
