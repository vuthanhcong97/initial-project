import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import createReducer from './reducer'

const composeEnhancers = composeWithDevTools({
	trace: true,
	traceLimit: 25,
});

const middleware = [thunk]

const initialState = {}

const initialReducer = createReducer()

const store =  createStore(
	initialReducer,
	initialState,
	composeEnhancers(applyMiddleware(...middleware))
)

store.asyncReducers = {};
store.injectReducer = (key, reducer) => {
	store.asyncReducers[key] = reducer;
	store.replaceReducer(createReducer(store.asyncReducers));
	return store;
};

export default store
