import { CHANGE_PRIMARY_COLOR } from '../actions/theme';

const initialState = {
    primaryColor: '#004C99',
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_PRIMARY_COLOR:
            return { 
                ...state, 
                primaryColor: action.color 
            };
    default:
        return state;
    }
};