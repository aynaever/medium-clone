const http = require('http');
const fs = require('fs');

const host = '127.0.0.1';
const port = 8080;

const server = http.createServer((req, res) => {

	const url = req.url;
	let page = fs.readFileSync("./index.html");

	if (url === "/") {
		console.log("home page");
	} else if (url === "/about") {
		console.log("about page");
		page = fs.readFileSync("./about.html");
	} else if (url === "/contact") {
		console.log("contact page");
		page = fs.readFileSync("./contact-me.html");
	} else {
		console.log("404 page");
		page = fs.readFileSync("./404.html");
	}

	res.statusCode = 200;
	res.setHeader('Content-type', 'text/html');
	res.end(page);
});

server.listen(port, host, () => {console.log(`server running at: https://${host}:${port}`)});

console.log('Hello World!');
