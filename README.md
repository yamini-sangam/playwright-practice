# <p align="center">Playwright-Practice</p>

## Introduction and Features of Playwright

### 1.What is playwright?
Playwright is a Node.js library that enables browser automation, allowing developers to write automated tests and perform tasks in web browsers programmatically. It supports multiple browsers, including Chromium, Firefox, and WebKit.
### 2. What are the System requirements to install playwright?
	node.js 16+
	windows 10
### 3.What is playwright?
	install - npm init playwright@latest
	version - npx playwright --version
	update  - npm install -D @playwright/test@latest
			
	run test      - npx playwright test		
	ui test       - npx playwright test --ui		
	html report   - npx playwright show-report
	local install - npm i --save-dev @playwright/test


### 4.What is package.json?
Which contains all the dependencies required to build/run the playwright applications

### 5.What is the purpose of (playwright.config.ts) config file?
It is used to configure the some settings to the test like browser

### 6.What is the use of record in playwright while testing webapp?
The Codegen Record option in Playwright allows you to record user interactions with a web page and generate corresponding Playwright code. This is particularly useful for beginners who are unfamiliar with the Playwright API or for quickly prototyping automation scripts.
