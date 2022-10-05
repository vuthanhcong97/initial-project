import React, { Suspense } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import { WrapApp } from "./App.styles"
import MenuBar from "./components/MenuBar"

// route
import routes from "./pages/routes"

const App = () => {
	return (
		<WrapApp>
			<MenuBar />
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
