import { takeLatest, put, call } from 'redux-saga/effects';

import axios from 'axios';

import { 
    FETCH_USERS
} from '../actions/types'

import { updateUsers } from '../actions';

const fetchData = (url) => {
    return axios.get(url)
        .then(res => res.data);
}

function * fetchUsers() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const users = yield call(fetchData, url);
    yield put(updateUsers(users));   
}

export default function * rootSaga(){
    yield takeLatest(FETCH_USERS, fetchUsers);
}
