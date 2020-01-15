const { Router } = require("express");
const PotterNews = require("../potternews/model");
const Comments = require("./model");
const router = new Router();

router.post("/comments", (request, response, next) =>
  Comments.create(request.body)
    .then(comment => response.send(comment))
    .catch(error => res.status(404).json({ error }))
);

module.exports = router;
