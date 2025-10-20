const http = require("http");
const fs = require("fs");
const path = require("path");

const home = require("./modules/home");
const research = require("./modules/research");
const security = require("./modules/security");
const files = require("./modules/files");
const redqueen = require("./modules/redqueen");

const server = http.createServer((req, res) => {
  
  if (req.url.startsWith("/assets/") || req.url.endsWith(".css") || req.url.endsWith(".js") || req.url.endsWith(".mp3")) {
    const filePath = path.join(__dirname, req.url);
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end("File not found");
      } else {
        const ext = path.extname(req.url);
        const mimeTypes = {
          ".css": "text/css",
          ".js": "application/javascript",
          ".mp3": "audio/mpeg",
        };
        res.writeHead(200, { "Content-Type": mimeTypes[ext] || "text/plain" });
        res.end(data);
      }
    });
    return;
  }

  res.setHeader("Content-Type", "text/html; charset=utf-8");

  if (req.url === "/" || req.url === "/boot") {
    res.end(`
      <link rel="stylesheet" href="/style.css">
      <div id="boot"></div>
      <script src="/boot.js"></script>
    `);
  } else if (req.url === "/home") {
    res.end(home());
  } else if (req.url === "/research") {
    res.end(research());
  } else if (req.url === "/security") {
    res.end(security());
  } else if (req.url === "/files") {
    res.end(files());
  } else if (req.url === "/redqueen") {
    res.end(redqueen());
  } else {
    res.statusCode = 404;
    res.end(`
      <link rel="stylesheet" href="/style.css">
      <h1>404 – ACCESS DENIED</h1>
      <p>Unauthorized sector.</p>
      <a href="/">Return to Umbrella Mainframe</a>
    `);
  }
});

server.listen(3000, () => {
  console.log("Umbrella Terminal active at http://localhost:3000");
});
