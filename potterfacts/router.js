const { Router } = require("express");
const Sequelize = require("sequelize");
const PotterFact = require("./model");
const router = new Router();

router.post("/potterfact", (request, response, next) => {
  PotterFact.create(request.body)
    .then(potterfact => response.send(potterfact))
    .catch(errors => next(errors));
});

router.get("/potterfact", (request, response, next) => {
  PotterFact.findAndCountAll()
    .then(result =>
      response.send({ amount: result.count, potterfacts: result.rows })
    )
    .catch(errors => next(errors));
});

router.get("/potterfact/:id", (request, respose, next) => {
  PotterFact.findByPk(request.params.id)
    .then(potterfact => respose.send(potterfact))
    .catch(errors => next(errors));
});

router.get("/potterfacts/random", (request, response, next) => {
  PotterFact.findAll({ order: Sequelize.literal("random()"), limit: 1 })
    .then(potterfact => response.send(potterfact))
    .catch(errors => next(errors));
});

module.exports = router;
