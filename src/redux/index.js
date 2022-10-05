import { configureStore, applyMiddleware } from "@reduxjs/toolkit"
import thunk from "redux-thunk"
import createReducer from "./reducer"

const middleware = [thunk]

const enhancer = applyMiddleware(...middleware)

const initialState = {}

const initialReducer = createReducer()

const store = configureStore({
	reducer: initialReducer,
	preloadedState: initialState,
	enhancers: enhancer,
})

store.asyncReducers = {}
store.injectReducer = (key, reducer) => {
	store.asyncReducers[key] = reducer
	store.replaceReducer(createReducer(store.asyncReducers))
	return store
}

export default store
