import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reduxpromise from 'redux-promise';

import nowReducer from './Reducer/nowReducer';
import comingReducer from './Reducer/comingReducer';
import swipeReducer from './Reducer/swipeReducer';
import navReducer from './Reducer/navReducer';

const reducer=combineReducers({
	nowReducer,
	comingReducer,
	swipeReducer,
	navReducer
});

const store=createStore(reducer,applyMiddleware(thunk,reduxpromise));

export default store;