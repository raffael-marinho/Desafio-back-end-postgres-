const {Router} = require('express');

const router = Router();

router.get("/", (req, res) => {
    return res.send("Hello world!")
});

module.exports = router;