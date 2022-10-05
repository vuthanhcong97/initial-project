import { createStore, applyMiddleware, compose } from "redux"
import { persistState } from "@redux-devtools/core"
import thunk from "redux-thunk"
import createReducer from "./reducer"
import DevTools from "../components/DevTools"

const middleware = [thunk]

const enhancer = compose(
	applyMiddleware(...middleware),
	// Required! Enable Redux DevTools with the monitors you chose
	DevTools.instrument(),
	// Optional. Lets you write ?debug_session=<key> in address bar to persist debug sessions
	persistState(getDebugSessionKey())
)

function getDebugSessionKey() {
	// You can write custom logic here!
	// By default we try to read the key from ?debug_session=<key> in the address bar
	const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/)
	return matches && matches.length > 0 ? matches[1] : null
}

const initialState = {}

const initialReducer = createReducer()

const store = createStore(initialReducer, initialState, enhancer)

store.asyncReducers = {}
store.injectReducer = (key, reducer) => {
	store.asyncReducers[key] = reducer
	store.replaceReducer(createReducer(store.asyncReducers))
	return store
}

export default store
