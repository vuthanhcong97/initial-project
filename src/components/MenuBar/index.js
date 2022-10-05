import React from "react"
import { NavLink } from "react-router-dom"
import { WrapMenuBar } from "./index.styles"

const MenuBar = () => {
	return (
		<WrapMenuBar>
			<NavLink
				to="/"
				className={({ isActive }) => (isActive ? "active" : null)}
				end
			>
				Home Page
			</NavLink>
			<NavLink
				to="/contact"
				className={({ isActive }) => (isActive ? "active" : null)}
			>
				Contact Page
			</NavLink>
		</WrapMenuBar>
	)
}

export default MenuBar
