import count from "./countSlice"

const reducer = (asyncReducer) => ({
	count,
	...asyncReducer,
})

export default reducer
