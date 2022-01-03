export const initialState = {
    user: null,
}

export const actionTypes = {
    LOGGED_IN: "LOGGED_IN",
}

function reducer(state, action) {
    console.log(action);
    
    switch(action.type) {
        case actionTypes.LOGGED_IN:
            return {
                ...state,
                user: action.user
            };
        default:
            return state;
    }
}

export default reducer;