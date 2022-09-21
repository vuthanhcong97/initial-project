import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';

// components
import App from './App';
import DevTools from './components/DevTools';

// redux
import store from './redux'
import { Provider } from 'react-redux';

// styles
import { GlobalStyles } from './GlobalStyles';

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<React.StrictMode>
				<GlobalStyles />
				<App />
			</React.StrictMode>
		</Router>
		<DevTools />
	</Provider>
	,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
