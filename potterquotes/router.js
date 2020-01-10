const { Router } = require("express");
const Sequelize = require("sequelize");
const PotterQuote = require("./model");
const router = new Router();

router.post("/potterquote", (request, response, next) => {
  PotterQuote.create(request.body)
    .then(potterquote => response.send(potterquote))
    .catch(errors => next(errors));
});

router.get("/potterquote", (request, response, next) => {
  PotterQuote.findAndCountAll()
    .then(result =>
      response.send({ amount: result.count, potterquotes: result.rows })
    )
    .catch(errors => next(errors));
});

router.get("/potterquote/:id", (request, response, next) => {
  PotterQuote.findByPk(request.params.id)
    .then(potterquote => response.send(potterquote))
    .catch(errors => next(errors));
});

router.get("/potterquotes/random", (request, response, next) => {
  PotterQuote.findAll({ order: Sequelize.literal("random()"), limit: 1 })
    .then(potterquote => response.send(potterquote))
    .catch(errors => next(errors));
});

module.exports = router;
