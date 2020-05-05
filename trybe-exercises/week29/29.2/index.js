const http = require("http");
const express = require('express');
const app = express();
function makeid(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
app.get('/', (req, res, next) => {
  res.send('rolou!');
});
// const server = http.createServer((request, response) => {
//   if (request.url !== "/signup") {
//     response.writeHead(404, "Not Found");
//     return response.end();
//   }

//   if (!request.headers.authorization) {
//     const responseBody = JSON.stringify({ message: "Token inválido!" });
//     response.writeHead(401, "Unauthorized", {
//       "Content-Type": "application/json"
//     });
//     response.write(responseBody);
//     return response.end();
//   }

//   request.on("data", data => {
//     const body = JSON.parse(data);
//     if (body.email && body.password && body.firstName && body.phone) {
//       const responseBody = JSON.stringify({ token: makeid(16) });
//       response.writeHead(200, "OK");
//       response.write(responseBody);
//       return response.end();
//     }

//     response.writeHead(400, "Bad Request");
//     response.write(JSON.stringify({ message: "Campos faltando" }));
//     return response.end();
//   });
// });

app.listen(3000);
