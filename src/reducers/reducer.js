/* Redux is connected to the project in Index.js the root of the App */
import Redux from 'redux';
// redux call the reducer and reducer sends this initialState
let initialState = {
    username: '',
    userprofile: {},
    repos: []
}
//reducer is a function that holds store. Takes in state and action to update redux store
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'UPDATE_USERNAME':
            return {
                ...state,
                username: action.username
            }
            break;
        case 'UPDATE_USERPROFILE':
            return {
                ...state,
                userprofile: action.userprofile
            }
            break;
        case 'UPDATE_REPOS':
            return {
                ...state,
                repos: action.repos
            }
        default:
            return state;
    }
}

export default reducer;