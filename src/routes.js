const { Router } = require('express');

const UserController = require('./controllers/UserController')

const router = Router();

router.post("/user-create", UserController.createUser);

router.get("/users", UserController.getUsers);
router.get("/users/:id", UserController.getUserById);

module.exports = router;
