# NodeStaticServer

## Install

Copy index.js file inside you static files, respecting this following architecture
```
	- /img
	- /js
	- /css
	- index.html
	- otherPage.html
	- 404.html
	- index.js
```
Launch `node index.js` to start server and then browser `localhost:8080`
## Current Features

- Server All static file as : `/img` , `/js`, `/css`
- Server 404 page at : `/`
- Simple Angular ngRoute supports, throwing every page to index.html and then detect `/:name` to server `:name` page 
- Serve Favicon.ico at : `/`

## To Do Enchancement

 - [ ] Possibility to toggle between Angular Route and Classical/Static Route system
