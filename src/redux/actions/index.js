import { UPDATE_USERS } from './types';

export const updateUsers = (users) => ({
    type: UPDATE_USERS,
    users
});