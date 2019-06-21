import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';
import App from './App';
import rootReducer from './redux/reducers';
import rootSaga from './redux/sagas';
import './index.css';

const sagaMiddleWare = createSagaMiddleware();

const store = createStore(
        rootReducer,
        compose(
            applyMiddleware(sagaMiddleWare),
            (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) || compose
        )
    ); 

sagaMiddleWare.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
