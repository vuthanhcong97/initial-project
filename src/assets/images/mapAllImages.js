const images = []

// https://stackoverflow.com/questions/54059179/what-is-require-context
const context = require.context(".", true, /index.js$/)

context.keys().forEach((path) => {
	const image = {
		path,
		component: require(`${path}`).default
	}

	images.push(image)
})

export default images
