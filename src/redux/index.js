import { configureStore } from "@reduxjs/toolkit"
import createReducer from "./reducer"

const initialState = {}

const initialReducer = createReducer()

const store = configureStore({
	reducer: initialReducer,
	preloadedState: initialState,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
})

store.asyncReducers = {}
store.injectReducer = (key, reducer) => {
	store.asyncReducers[key] = reducer
	store.replaceReducer(createReducer(store.asyncReducers))
	return store
}

export default store
