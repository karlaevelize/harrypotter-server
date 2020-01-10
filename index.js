const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const Sse = require("json-sse");
const stream = new Sse();

const port = process.env.PORT || 4002;
const app = express();

const corsMiddleware = cors();
const parserMiddleware = bodyParser.json();

app.use(corsMiddleware);
app.use(parserMiddleware);

app.listen(port, () => console.log(`Hey, I'm on port ${port}!`));
