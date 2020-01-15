const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const Sse = require("json-sse");
const stream = new Sse();

const PotterMessage = require("./pottermessages/model");

const potterFactRouter = require("./potterfacts/router");
const potterQuoteRouter = require("./potterquotes/router");
const potterHeadRouter = require("./potterheads/router");
const potterNewsRouter = require("./potternews/router");
const commentsRouter = require("./comments/router");
const authRouter = require("./auth/router");
const potterMessageRouterFactory = require("./pottermessages/router");

const port = process.env.PORT || 4002;
const app = express();

const corsMiddleware = cors();
const parserMiddleware = bodyParser.json();
const potterMessageRouter = potterMessageRouterFactory(stream);

app.use(corsMiddleware);
app.use(parserMiddleware);

app.use(potterFactRouter);
app.use(potterQuoteRouter);
app.use(potterHeadRouter);
app.use(potterNewsRouter);
app.use(commentsRouter);
app.use(authRouter);
app.use(potterMessageRouter);

app.get("/", (request, response) => {
  response.send("hello");
});

app.get("/stream", async (request, response, next) => {
  try {
    const messages = await PotterMessage.findAll();
    const action = {
      type: "ALL_MESSAGES",
      payload: messages
    };
    const string = JSON.stringify(action);
    stream.updateInit(string);
    stream.init(request, response);
  } catch (error) {
    next(error);
  }
});

app.listen(port, () => console.log(`Hey, I'm on port ${port}!`));
