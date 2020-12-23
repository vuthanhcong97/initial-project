import React, { Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

// route
import routes from './pages/routes'

const App = () => {

	return (
		<Switch>
			{
				routes.map(({ component: Component, path, ...rest }) => {
					return (
						<Route key={path} path={path} {...rest}>
							<Suspense fallback={"loading..."}>
								<Component />
							</Suspense>
						</Route>
					)
				})
			}

			<Redirect to="/" />
		</Switch>
	)
}

export default App
