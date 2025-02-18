const { Router } = require('express');
const User = require('./models/User');

const router = Router();

router.post("/", async (req, res) => {
    const { name, email } = req.body;

    try {
        const user = await User.create({ name, email });
        return res.json({ user });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

module.exports = router;
