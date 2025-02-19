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
    },

    async getUserById(req, res) {
        const { id } = req.params;

        try {
            const user = await User.findByPk(id);
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }
            return res.status(200).json(user);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },

    async updateUser(req, res) {
        const { id } = req.params;
        const { name, email } = req.body;

        try {
            const user = await User.findByPk(id);
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }
            await user.update({ name, email });
            return res.status(200).json(user);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

}