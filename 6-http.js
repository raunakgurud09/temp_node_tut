const http = require("http");
const port = 5000;
const server = http.createServer((req, res) => {
  if (req.url === "/") res.end("welcome to our home page!!");
  if (req.url === "/about") res.end("here is a brief history about us!");
  res.end(`
    <h1>Oops!!</h1>
    <p>go to the home page</p>
    <a href = '/'>back Home </a>
    `);
});

server.listen(`${port}`);
