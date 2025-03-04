const Task = require("../models/Task");

module.exports = {
    async createTask(req, res) {
        const { user_id, title, description, status, priority } = req.body;

        try {
            const task = await Task.create({ user_id, title, description, status, priority });
            return res.status(200).json({ task });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
}
