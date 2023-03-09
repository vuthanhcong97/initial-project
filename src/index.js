import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter as Router } from "react-router-dom"
import reportWebVitals from "./reportWebVitals"

// components
import App from "./App"

// redux
import store from "./redux"
import { Provider } from "react-redux"

// styles
import { GlobalStyles } from "./GlobalStyles"

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<Router>
				<GlobalStyles />
				<App />
			</Router>
		</Provider>
	</React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
