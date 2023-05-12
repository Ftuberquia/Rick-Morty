import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';  // thunk y dev nuevas meli
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './Reducer';
import thunkMiddleware from 'redux-thunk';

const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk)) // meli
    // composeEnhancer(applyMiddleware(thunkMiddleware)) jorgev
);

export default store;