#!/usr/bin/env node

const fs = require("fs-extra")
const path = require("path")
const https = require("https")
const { exec } = require("child_process")
const packageJson = require("../package.json")
exec(`echo "${packageJson.version}"`)

const dependencies = {
	redux: packageJson.dependencies.redux,
	"react-redux": packageJson.dependencies["react-redux"],
	"react-router-dom": packageJson.dependencies["react-router-dom"],
	"redux-thunk": packageJson.dependencies["redux-thunk"],
	"styled-components": packageJson.dependencies["styled-components"],
}
const listAddDependencies = Object.entries(dependencies)
	.map(([key, value]) => `${key}@${value}`)
	.join(" ")

const devDependencies = {
	"@redux-devtools/core": packageJson.devDependencies["@redux-devtools/core"],
	"@redux-devtools/dock-monitor":
		packageJson.devDependencies["@redux-devtools/dock-monitor"],
	"@redux-devtools/log-monitor":
		packageJson.devDependencies["@redux-devtools/log-monitor"],
	husky: packageJson.devDependencies.husky,
	prettier: packageJson.devDependencies.prettier,
}

const listAddDevDependencies = Object.entries(devDependencies)
	.map(([key, value]) => `${key}@${value}`)
	.join(" ")

exec(
	`npx create-react-app@^5.0.1 ${process.argv[2]}`,
	(initErr, initStdout, initStderr) => {
		if (initErr) {
			console.error(
				`Everything was fine, then it wasn't:
				${initErr}`
			)
			return
		}

		console.log(initStdout)

		exec(
			`cd ${process.argv[2]} && npm i ${listAddDependencies} && npm i -D ${listAddDevDependencies}`,
			(initErr, initStdout, initStderr) => {
				if (initErr) {
					console.error(
						`install package failed:
						${initErr}`
					)
					return
				}

				console.log(initStdout)

				exec(
					`cd ${process.argv[2]} && npm pkg set scripts.prettier="prettier --write ."`,
					(initErr, initStdout, initStderr) => {
						if (initErr) {
							console.error(
								`cannot set script prettier:
								${initErr}`
							)
							return
						}
						exec(
							`cd ${process.argv[2]} && npx mrm@2 lint-staged`,
							(initErr, initStdout, initStderr) => {
								if (initErr) {
									console.error(
										`cannot setup pre-commit:
										${initErr}`
									)
									return
								}
								exec(
									`cd ${process.argv[2]} && rm -r src`,
									(initErr, initStdout, initStderr) => {
										if (initErr) {
											console.error(
												`rm src failed:
												${initErr}`
											)
											return
										}

										console.log(initStdout)

										exec(
											`cd ${process.argv[2]} && rm .gitignore`,
											(
												initErr,
												initStdout,
												initStderr
											) => {
												if (initErr) {
													console.error(
														`cannot remove .gitignore:
														${initErr}`
													)
													return
												}

												console.log(initStdout)
											}
										)

										exec(
											`cd ${process.argv[2]} && rm README.md`,
											(
												initErr,
												initStdout,
												initStderr
											) => {
												if (initErr) {
													console.error(
														`cannot remove README.md:
														${initErr}`
													)
													return
												}

												console.log(initStdout)
												const filesToCopy = [
													"README.md",
													".prettierrc",
													".prettierignore",
												]
												for (
													let i = 0;
													i < filesToCopy.length;
													i += 1
												) {
													fs.createReadStream(
														path.join(
															__dirname,
															`../${filesToCopy[i]}`
														)
													).pipe(
														fs.createWriteStream(
															`${process.argv[2]}/${filesToCopy[i]}`
														)
													)
												}

												// npm will remove the .gitignore file when the package is installed, therefore it cannot be copied
												// locally and needs to be downloaded.
												https.get(
													"https://raw.githubusercontent.com/vuthanhcong97/initial-project/master/.gitignore",
													(res) => {
														res.setEncoding("utf8")
														let body = ""
														res.on(
															"data",
															(data) => {
																body += data
															}
														)
														res.on("end", () => {
															fs.writeFile(
																`${process.argv[2]}/.gitignore`,
																body,
																{
																	encoding:
																		"utf-8",
																},
																(err) => {
																	if (err)
																		throw err
																}
															)
															fs.copy(
																path.join(
																	__dirname,
																	"../src"
																),
																`${process.argv[2]}/src`
															)
																.then(() => {
																	exec(
																		`cd ${process.argv[2]} && git add . && git commit -m "initial project"`,
																		(
																			err,
																			stdout,
																			stderr
																		) => {
																			console.log(
																				`All done!\nYour project is now started into ${process.argv[2]} folder, refer to the README for the project structure.\nHappy Coding!`
																			)
																		}
																	)
																})
																.catch((err) =>
																	console.error(
																		err
																	)
																)
														})
													}
												)
											}
										)
									}
								)
							}
						)
					}
				)
			}
		)
	}
)
