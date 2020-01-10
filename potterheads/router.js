const { Router } = require("express");
const bcrypt = require("bcrypt");
const PotterHead = require("./model");
const router = new Router();

router.post("/potterhead", (request, response, next) => {
  const user = {
    name: request.body.name,
    email: request.body.email,
    password: bcrypt.hashSync(request.body.password, 3)
  };
  PotterHead.create(user)
    .then(user => response.send(user))
    .catch(errors => next(errors));
});

router.get("/potterhead", (request, response, next) => {
  PotterHead.findAndCountAll()
    .then(result => response.send({ count: result.count, users: result.rows }))
    .catch(error => next(error));
});

module.exports = router;
