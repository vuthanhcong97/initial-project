import { createSlice } from "@reduxjs/toolkit"

const countSlice = createSlice({
	name: "count",
	initialState: 0,
	reducers: {
		increase: (state) => {
			return (state = state + 1)
		},
		decrease: (state) => {
			return (state = state - 1)
		},
	},
})
export const { increase, decrease } = countSlice.actions
export default countSlice.reducer
