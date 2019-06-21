import { takeLatest } from 'redux-saga/effects';


function initialiseApp() {
    console.log('App Started');
}


export default function * rootSaga(){
    yield takeLatest('INIT', initialiseApp);
}


