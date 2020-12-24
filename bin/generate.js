#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const https = require('https');
const { exec } = require('child_process');

const packageJson = require('../package.json');
exec(`echo "${packageJson.version}"`)

exec(
	`npx create-react-app ${process.argv[2]}`,
	(initErr, initStdout, initStderr) => {
		if (initErr) {
			console.error(
				`Everything was fine, then it wasn't:
				${initErr}`
			);
			return;
		}

		console.log(initStdout)

		exec(
			`cd ${process.argv[2]} && npm i redux react-redux redux-thunk redux-devtools-extension styled-components react-router-dom`,
			(initErr, initStdout, initStderr) => {
				if (initErr) {
					console.error(
						`install package failed:
						${initErr}`
					);
					return;
				}

				console.log(initStdout)

				exec(
					`rm -r src`,
					(initErr, initStdout, initStderr) => { 
						if (initErr) {
							console.error(
								`rm src failed:
								${initErr}`
							);
							return;
						}

						console.log(initStdout)

						// exec(
						// 	`cd ${process.argv[2]} && rm .gitignore`,
						// 	(initErr, initStdout, initStderr) => { 
						// 		if (initErr) {
						// 			console.error(
						// 				`cannot remove .gitignore:
						// 				${initErr}`
						// 			);
						// 			return;
						// 		}

						// 		console.log(initStdout)
						// 	}
						// )

						exec(
							// `cd ${process.argv[2]} && rm README.md`,
							`rm README.md`,
							(initErr, initStdout, initStderr) => { 
								if (initErr) {
									console.error(
										`cannot remove README.md:
										${initErr}`
									);
									return;
								}

								console.log(initStdout)
							}
						)

						const filesToCopy = ['README.md', '.gitignore'];
						for (let i = 0; i < filesToCopy.length; i += 1) {
							fs
								.createReadStream(path.join(__dirname, `../${filesToCopy[i]}`))
								.pipe(fs.createWriteStream(`${process.argv[2]}/${filesToCopy[i]}`));
						}

						fs
							.copy(path.join(__dirname, '../src'), `${process.argv[2]}/src`)
							.then(() =>
								console.log(`All done!\nYour project is now started into ${
								process.argv[2]
								} folder, refer to the README for the project structure.\nHappy Coding!`))
							.catch(err => console.error(err));
					}
				)
			}
		)
	}
)
