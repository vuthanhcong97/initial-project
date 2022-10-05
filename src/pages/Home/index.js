import React from "react"
import Count from "../../components/Count"
import Footer from "../../components/Footer"
import { WrapHome } from "./index.styles"

const Home = () => {
	return (
		<WrapHome className="page">
			<Count />
			<Footer />
		</WrapHome>
	)
}

export default Home
