const initialState = { search: ""};
export default function studentReducer(state = initialState, action) {
    switch (action.type) {
        case 'search':
            return {search: action.payload }
      
        default:
            return state;
    }
}