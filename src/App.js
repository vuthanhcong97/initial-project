import React, { Suspense } from "react"
import { Routes, Route, Navigate, NavLink } from "react-router-dom"
import { WrapApp } from "./App.styles"

// route
import routes from "./pages/routes"

const App = () => {
	return (
		<WrapApp>
			<div className="wrap-menu">
				<NavLink to="/">Home Page</NavLink>
				<NavLink to="/contact">Contact Page</NavLink>
			</div>
			<Routes>
				{routes.map(({ component: Component, path, ...rest }) => {
					return (
						<Route
							key={path}
							path={path}
							element={
								<Suspense fallback={"loading..."}>
									<Component />
								</Suspense>
							}
							{...rest}
						/>
					)
				})}
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		</WrapApp>
	)
}

export default App
