import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { decrease, increase } from "../../redux/countSlice"
import { WrapCount } from "./index.styles"

const Count = () => {
	const dispatch = useDispatch()
	const count = useSelector((state) => state.count)

	return (
		<WrapCount>
			<div className="wrap-modal">
				<div className="num-of-count">{count}</div>
				<div className="wrap-action">
					<button onClick={() => dispatch(decrease())}>-</button>
					<button onClick={() => dispatch(increase())}>+</button>
				</div>
			</div>
		</WrapCount>
	)
}

export default Count
