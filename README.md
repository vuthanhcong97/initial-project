#	Install
-	setup project by create-react-app and install redux, redux-thunk, react-router, styled-component with some configs
##	Use global
-	`npm i -g initial-project`
-	`initial-project <project-name>`
##	Use by npx
-	`npx initial-project <project-name>`

-	HAPPY CODING!

#   apis
-   contain config, function request API
#   assets
##  fonts
-   contain font files
##  images
-   contain image follow structure `<folder image name>` -> `index.js` + `<image name>.<format>`
#   components
-   contain component share between pages
#   pages
-   contain page in web

#	tree structure
```
+--node_modules
+--public
+--src
|	+--apis
|	+--assets
|	|	+--fonts
|	|	+--images
|	|	|	+--<image component name>
|	|	|	|	+--index.js
|	|	|	|	+--<image name>.<image format>
|	|	|	+--...
|	|	|	+--mapAllImage.js
|	+--components
|	|	+--Component1
|	|	|	+--index.js
|	|	|	+--index.styles.js
|	|	+--...
|	+--pages
|	|	+--AllImage
|	|	|	+--index.js
|	|	|	+--index.styles.js
|	|	+--Page1
|	|	|	+--components
|	|	|	|	+--Component1InPage2
|	|	|	|	+--Component2InPage2
|	|	|	+--index.js
|	|	|	+--index.styles.js
|	|	+--Page2 //page contain nested page
|	|	|	+--components
|	|	|	|	+--Component1InPage2
|	|	|	|	+--Component2InPage2
|	|	|	+--pages
|	|	|	|	+--SubPage1InPage2
|	|	|	|	+--SubPage2InPage2
|	|	|	|	+--...
|	|	|	|	+--routes.js
|	|	|	+--index.js
|	|	|	+--index.styles.js
|	|	+--Page3
|	|	|	+--index.js
|	|	|	+--index.styles.js
|	|	+--...
|	|	+--routes.js
|	+--redux
|	|	+--reducer1
|	|	|	+--action.js
|	|	|	+--reducer1.js
|	|	|	+--index.js
|	|	|	+--types.js
|	|	+--...
|	|	+--index.dev.js //store when NODE_ENV is development
|	|	+--index.js //store
|	|	+--index.prod.js //store when NODE_ENV is production
|	|	+--reducer.js
|	+--App.js
|	+--index.css
|	+--index.dev.js // entry point when NODE_ENV is development
|	+--index.js // entry point
|	+--index.dev.js  // entry when NODE_ENV is production
|	+--reportWebVitals.js 
|	+--setupTests.js
+--.gitignore
+--package.json
+--package-lock.json
+--README.md
+--yarn.lock
```
