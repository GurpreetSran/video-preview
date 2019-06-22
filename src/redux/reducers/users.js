import { UPDATE_USERS } from '../actions/types';

const initialState = [];

const users = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_USERS: 
            return [...action.users]
        default:
            return state;
    }
};

export default users;