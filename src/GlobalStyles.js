import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
	:root {
		--deep-aqua: #003b46;
		--ocean: #07575b;
		--wave: #66a5ad;
		--seafoam: #c4dfe6;
	}

	html, body {
		height: 100%;
	}

	body {
		margin: 0;
		padding: 0;
		font-size: 16px;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
			'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
			sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	* {
		box-sizing: border-box;
	}

	#root {
		height: inherit;
	}

	code {
		font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
	}

	.page {
		flex-grow: 1;
	}
`

export { GlobalStyles }
