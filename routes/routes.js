const router = require("express").Router();
const controller = require("../controller");

router.get("/api/todos", controller.getToDos);

router.post("/api/todos", controller.makeToDo);

module.exports = router;