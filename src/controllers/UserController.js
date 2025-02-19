const User = require('../models/User');

module.exports = {
    async createUser(req, res) {
        const { name, email } = req.body;

        try {
            const user = await User.create({ name, email });
            return res.status(200).json({ user });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },

    async getUsers(req, res) {
        try {
            const users = await User.findAll();
            return res.status(200).json(users);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}