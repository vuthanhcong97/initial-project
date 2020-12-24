import { lazy } from 'react'

const routes = [
	{
		path: '/',
		exact: true,
		public: true,
		component: lazy(() => import('./Home'))
	},
	{
		path: '/contact',
		exact: true,
		public: true,
		component: lazy(() => import('./Contact'))
	},

]

process.env.NODE_ENV === 'development' && routes.push({
	path: '/all-image',
	exact: false,
	public: true,
	component: lazy(() => import('./AllImage'))
})

export default routes
