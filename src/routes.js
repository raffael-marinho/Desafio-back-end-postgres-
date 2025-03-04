const { Router } = require('express');

const UserController = require('./controllers/UserController')
const TaskController = require('./controllers/TaskController');

const router = Router();

router.post("/user-create", UserController.createUser);

router.get("/users", UserController.getUsers);

router.get("/users/:id", UserController.getUserById);

router.put("/update/:id", UserController.updateUser);

router.delete("/delete/:id", UserController.deleteUser);


router.post("/task-create", TaskController.createTask);

module.exports = router;
