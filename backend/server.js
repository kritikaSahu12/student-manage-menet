const jsonServer = require("json-server");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.use((req, res, next) => {
  if (req.method === "POST" ||
      req.method === "PUT" ||
      req.method === "PATCH" ||
      req.method === "DELETE") {
    console.log(`${req.method} ${req.url}`);
  }

  next();
});

server.use(router);

const PORT = process.env.PORT || 3000;

server.listen(PORT, "0.0.0.0", () => {
  console.log(`JSON Server running on port ${PORT}`);
});