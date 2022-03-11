// const routes = require("express").Router();
const {Router} = require("express");

const ItemPatrimonioController = require("../controllers/ItemPatrimonioController")

const routes = Router();

routes.get("/", ItemPatrimonioController.listAll);
routes.get("/:patrimonio", ItemPatrimonioController.get);
routes.post("/", ItemPatrimonioController.add);

module.exports = routes;