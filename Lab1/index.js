const http = require('http');
const path = require("path");
const util = require("util");
const v8 = require("v8");
const cryptoRandomString = require("crypto-random-string").default;

const hostname = '127.0.0.1';
const port = 8888;

const server = http.createServer((request, response) => {
 response.statusCode = 200;
 response.setHeader('Content-Type', 'text/plain');
const token = cryptoRandomString({length: 16, type: 'alphanumeric'});

response.end(`Hello, man!\nYour random token is: ${token}\n`);
});


server.listen(port, hostname, () => {
 console.log(v8.getHeapStatistics());
 console.log(path.basename(__filename));
 console.log(path.join(__dirname, 'uploads','images'));
 console.log(`Server running at http://${hostname}:${port}/`);

 console.log("***** Przyklad dzialania*****");
 console.log("Losowy ciag (hex, 8 znakow): ", cryptoRandomString({length: 8, type: 'hex'}));
 console.log("Losowy ciag (alphanumeric, 10 znakow): ", cryptoRandomString({length: 10, type: 'alphanumeric'}));
 console.log("Losowy ciag (base64, 12 znakow): ", cryptoRandomString({length: 12, type: 'base64'}));

 console.log("*****************************");
 console.log("           Opis"              );
 console.log("Moduł 'crypto-random-string' tworzy bezpieczne kryptograficznie losowe ciągi znaków.");
 console.log("Na przykład, można go użyć do generowania tokenów sesji, haseł jednorazowych lub innych poufnych danych.");
});
