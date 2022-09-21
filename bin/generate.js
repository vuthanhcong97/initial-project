#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const https = require('https');
const { exec } = require('child_process');

const dependencies = {
	"redux": "^4.2.0",
	"react-redux": "^8.0.2",
	"react-router-dom": "^6.4.0",
	"redux-thunk": "^2.4.1",
	"styled-components": "^5.3.5",
}
const listAddDependencies = Object.entries(dependencies)
	.map(([key, value]) => `${key}@${value}`)
	.join(" ")

const devDependencies = {
	"@redux-devtools/core": "^3.13.1",
	"@redux-devtools/dock-monitor": "^3.0.1",
	"@redux-devtools/log-monitor": "^4.0.1"
}

const listAddDevDependencies = Object.entries(devDependencies)
	.map(([key, value]) => `${key}@${value}`)
	.join(" ")

const packageJson = require('../package.json');
exec(`echo "${packageJson.version}"`)

exec(
	`npx create-react-app@^5.0.1 ${process.argv[2]}`,
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
			`cd ${process.argv[2]} && npm i ${listAddDependencies} && npm i -D ${listAddDevDependencies}`,
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
					`cd ${process.argv[2]} && rm -r src`,
					(initErr, initStdout, initStderr) => { 
						if (initErr) {
							console.error(
								`rm src failed:
								${initErr}`
							);
							return;
						}

						console.log(initStdout)

						exec(
							`cd ${process.argv[2]} && rm .gitignore`,
							(initErr, initStdout, initStderr) => { 
								if (initErr) {
									console.error(
										`cannot remove .gitignore:
										${initErr}`
									);
									return;
								}

								console.log(initStdout)
							}
						)

						exec(
							`cd ${process.argv[2]} && rm README.md`,
							(initErr, initStdout, initStderr) => { 
								if (initErr) {
									console.error(
										`cannot remove README.md:
										${initErr}`
									);
									return;
								}

								console.log(initStdout)
								const filesToCopy = ['README.md'];
								for (let i = 0; i < filesToCopy.length; i += 1) {
									fs
										.createReadStream(path.join(__dirname, `../${filesToCopy[i]}`))
										.pipe(fs.createWriteStream(`${process.argv[2]}/${filesToCopy[i]}`));
								}


								// npm will remove the .gitignore file when the package is installed, therefore it cannot be copied
								// locally and needs to be downloaded.
								https.get(
									'https://raw.githubusercontent.com/vuthanhcong97/initial-project/master/.gitignore',
									(res) => {
										res.setEncoding('utf8');
										let body = '';
										res.on('data', (data) => {
											body += data;
										});
										res.on('end', () => {
											fs.writeFile(`${process.argv[2]}/.gitignore`, body, { encoding: 'utf-8' }, (err) => {
												if (err) throw err;
											});
											fs
												.copy(path.join(__dirname, '../src'), `${process.argv[2]}/src`)
												.then(() => {
													exec(
														`cd ${process.argv[2]} && git add . && git commit -m "initial project"`,
														(err, stdout, stderr) => {
															console.log(`All done!\nYour project is now started into ${
															process.argv[2]
															} folder, refer to the README for the project structure.\nHappy Coding!`)
														}
													)
												})
												.catch(err => console.error(err));
										});
									},
								);
		
							}
						)

					}
				)
			}
		)
	}
)
