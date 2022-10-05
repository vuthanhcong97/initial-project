import React, { Suspense } from "react"
import { Routes, Route, Navigate } from "react-router-dom"

// route
import routes from "./pages/routes"

const App = () => {
	return (
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
	)
}

export default App
