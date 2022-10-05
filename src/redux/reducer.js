import { combineReducers } from "redux"

import config from "./config"

const reducer = (asyncReducer) =>
	combineReducers({
		config,
		...asyncReducer,
	})

export default reducer
