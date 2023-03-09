import { lazy } from "react"

const routes = [
	{
		path: "/",
		public: true,
		component: lazy(() => import("./Home")),
	},
	{
		path: "/contact",
		public: true,
		component: lazy(() => import("./Contact")),
	},
]

process.env.NODE_ENV === "development" &&
	routes.push({
		path: "/all-image",
		public: true,
		component: lazy(() => import("./AllImage")),
	})

export default routes
