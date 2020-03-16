const express = require("express");
const bodyParser = require("body-parser");
const rpcMethods = require("./routes/api");
const headerMiddleware = require("./headerMiddleware");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(headerMiddleware);

app.use("/api", rpcMethods);

const port = process.env.PORT || 4444;

server = app.listen(port, () => console.log(`Server running on port ${port}`));