const UserService = require('../services/UserService');

module.exports = {
    async createUser(req, res) {
        try {
            const user = await UserService.createUser(req.body);
            return res.status(201).json(user);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },

    async getUsers(req, res) {
        try {
            const users = await UserService.getUsers();
            return res.status(200).json(users);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },

    async getUserById(req, res) {
        try {
            const user = await UserService.getUserById(req.params.id);
            if (!user) return res.status(404).json({ error: 'User not found' });
            return res.status(200).json(user);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },

    async updateUser(req, res) {
        try {
            const user = await UserService.updateUser(req.params.id, req.body);
            return res.status(200).json(user);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },

    async deleteUser(req, res) {
        try {
            await UserService.deleteUser(req.params.id);
            return res.status(200).json({ message: 'User deleted successfully' });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
};