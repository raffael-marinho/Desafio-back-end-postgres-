const { Router } = require('express');

const UserController = require('./controllers/UserController')

const router = Router();

router.post("/user-create", UserController.createUser);

module.exports = router;
