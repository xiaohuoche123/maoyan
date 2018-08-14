import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reduxpromise from 'redux-promise';

import nowReducer from './Reducer/nowReducer';

const reducer=combineReducers({
	nowReducer
});

const store=createStore(reducer,applyMiddleware(thunk,reduxpromise));

export default store;