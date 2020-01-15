const { Router } = require("express");
const PotterNews = require("./model");
const Comments = require("../comments/model");
const router = new Router();

router.get("/potternews", (request, response, next) =>
  PotterNews.findAll({ include: [Comments] })
    .then(result => response.send(result))
    .catch(error => response.status(404).json({ error }))
);

router.post("/potternews", (request, response, next) =>
  PotterNews.create(request.body)
    .then(potternew => response.send(potternew))
    .catch(error => res.status(404).json({ error }))
);

router.get("/potternews/:id", (request, response, next) =>
  PotterNews.findByPk(request.params.id, { include: [Comments] })
    .then(result => response.send(result))
    .catch(error => response.status(404).json({ error }))
);

module.exports = router;
