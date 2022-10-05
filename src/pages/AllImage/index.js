import React from "react"

// images
import allImages from "../../assets/images/mapAllImages"

// styles
import { WrapAllImage } from "./index.styles"

const AllImage = () => {
	return (
		<WrapAllImage>
			{allImages.map(({ component: Component, path }) => (
				<div key={path}>
					<Component />
					<div>{path}</div>
				</div>
			))}
		</WrapAllImage>
	)
}

export default AllImage
